/*! Lazy Load XT v1.1.0 2018-07-27
 * http://ressio.github.io/lazy-load-xt
 * (C) 2018 RESS.io
 * Licensed under MIT */

(function ($, window) {
    $.lazyLoadXT.forceEvent += ' beforeprint';

    if (window.matchMedia) {
        window
            .matchMedia('print')
            .addListener(function (mql) {
                if (mql.matches) {
                    $(window).trigger('beforeprint');
                }
            });
    }

})(window.jQuery || window.Zepto || window.$, window);
