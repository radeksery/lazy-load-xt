/*jslint browser:true, plusplus:true, vars:true */
/*jshint browser:true, jquery:true */

(function ($) {
    var options = $.lazyLoadXT,
        $isFunction = $.isFunction,
        bgAttr = options.bgAttr || 'data-bg';

    options.selector += ',[' + bgAttr + '], .lazy-bg';


    /**
     * Process function/object event handler
     * @param {string} event suffix
     * @param {jQuery} $el
     */
    function triggerEvent(event, $el) {
        var handler = options['on' + event];
        if (handler) {
            if ($isFunction(handler)) {
                handler.call($el[0]);
            } else {
                if (handler.addClass) {
                    $el.addClass(handler.addClass);
                }
                if (handler.removeClass) {
                    $el.removeClass(handler.removeClass);
                }
            }
        }

        $el.trigger('lazy' + event, [$el]);
    }


    $(document).on('lazyshow', function (e) {
        var $el = $(e.target);
        if ($el.is('.lazy-bg') || $el.is('[' + bgAttr + ']')) {
            var src = false;

            if ('parseSrcset' in $.lazyLoadXT && typeof $.lazyLoadXT.parseSrcset === 'function') {
                src = $.lazyLoadXT.parseSrcset($el);
            }

            if (! src) {
                src = $el.attr(bgAttr);
            }

            if (src) {
                $('<img />')
                    .on('load', function() {
                        $el
                            .addClass('lazy-preloaded')
                            .css('background-image', "url('" + src + "')");
                    })
                    .on('load error', function(e) {
                        triggerEvent(e.type, $el);
                    })
                    .attr('src', src);
            }
        }
    });

})(window.jQuery || window.Zepto || window.$);
