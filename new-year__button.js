(function () {
    'use strict';

    // Функция удаления
    function killButton() {
        // Ищем элемент. Я указал оба варианта написания класса (с одним _ и двумя __), 
        // так как на скрине было одно, а у вас в коде два.
        var targets = document.querySelectorAll('.new-year_button, .new-year__button');
        
        if (targets.length > 0) {
            targets.forEach(function (el) {
                el.remove();
            });
            // console.log('Носок уничтожен'); 
        }
    }

    // 1. Запускаем "слежку" за изменениями на странице
    var observer = new MutationObserver(function (mutations) {
        killButton();
    });

    // Начинаем наблюдение за всем телом документа
    observer.observe(document.body, {
        childList: true, // следить за добавлением новых элементов
        subtree: true    // следить во всех вложенных элементах
    });

    // 2. Пробуем удалить сразу при старте (на всякий случай)
    killButton();
})();
