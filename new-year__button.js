(function () {
    'use strict';
    // Слушаем событие готовности приложения
    Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') {
            // Вырезаем кнопку, как только приложение готово
            // Добавляем небольшую задержку, чтобы Lampa успела отрисовать шапку
            setTimeout(function() {
                document.querySelectorAll('.new-year_button, .new-year__button').forEach(function(el) {
                    el.remove();
                });
            }, 100);
        }
    });
})();
