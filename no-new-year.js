(function () {
    'use strict';

    console.log('[test] script start', performance.now());

    var el = document.querySelector('.head__actions');
    if (el) {
        console.log('[test] .head__actions already exists', performance.now());
        return;
    }

    var observer = new MutationObserver(function () {
        var node = document.querySelector('.head__actions');
        if (node) {
            console.log('[test] .head__actions appeared', performance.now());
            observer.disconnect();
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
