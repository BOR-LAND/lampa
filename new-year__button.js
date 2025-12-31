(function () {
    'use strict';

    // Функция удаления
    var removeSock = function() {
        var btn = document.querySelector('.new-year_button, .new-year__button');
        if (btn) btn.remove();
    };

    // Подписываемся на макет
    Lampa.Listener.follow('layout', function (e) {
        if (e.type == 'complete') {
            removeSock();
        }
    });

    // На случай, если событие layout уже пролетело к моменту загрузки скрипта
    Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') {
            removeSock();
        }
    });
})();
