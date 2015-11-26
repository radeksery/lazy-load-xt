/*! Lazy Load XT v1.0.6 2015-11-26
 * http://ressio.github.io/lazy-load-xt
 * (C) 2015 RESS.io
 * Licensed under MIT */

(function ($) {
    var options = $.lazyLoadXT,
        bgAttr = options.bgAttr || 'data-bg';

    options.selector += ',[' + bgAttr + '], .lazy-bg';

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

                        if (options.onload.addClass) {
                            $el.addClass(options.onload.addClass);
                        }
                        if (options.onload.removeClass) {
                            $el.removeClass(options.onload.removeClass);
                        }
                    })
                    .attr('src', src);
            }
        }
    });

})(window.jQuery || window.Zepto || window.$);
