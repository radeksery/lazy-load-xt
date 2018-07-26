/*! Lazy Load XT v1.1.0 2018-07-27
 * http://ressio.github.io/lazy-load-xt
 * (C) 2018 RESS.io
 * Licensed under MIT */

(function ($) {
    var options = $.lazyLoadXT;

    options.forceEvent += ' lazyautoload';
    options.autoLoadTime = options.autoLoadTime || 50;

    $(document).ready(function () {
        setTimeout(function () {
            $(window).trigger('lazyautoload');
        }, options.autoLoadTime);
    });

})(window.jQuery || window.Zepto || window.$);
