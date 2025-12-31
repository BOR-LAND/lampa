(function () {
    'use strict';
    
    // Пишем в лог сразу при старте файла
    console.log('TEST: Скрипт запущен');

    Lampa.Listener.follow('all', function (e) {
        var btn = document.querySelector('.new-year_button, .new-year__button');
        
        if (btn) {
            // Если кнопка найдена, выскочит окно с названием события
            alert('Кнопка найдена! Событие: ' + e.event + ' | Тип: ' + e.type);
            console.log('!!! ЛОВУШКА СРАБОТАЛА на:', e.event, e.type);
        }
    });
})();
