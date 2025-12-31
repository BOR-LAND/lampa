(function () {
    'use strict';

    Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') {
            document
                .querySelectorAll('.new-year__button')
                .forEach(el => el.remove());
        }
    });
})();
