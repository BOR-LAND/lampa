(function () {
    'use strict';

    // 1. Создаем функцию "снайпера"
    var killSock = function() {
        var btn = document.querySelector('.new-year__button');
        if (btn) {
            btn.remove();
        }
    };

    // 2. Используем MutationObserver — он следит за появлением элементов в реальном времени.
    // Это работает быстрее и надежнее любых событий Lampa.
    var observer = new MutationObserver(function(mutations) {
        killSock();
    });

    // Запускаем слежку за всем документом
    observer.observe(document.documentElement, {
        childList: true,
        // subtree: true
    });

    // 3. И на всякий случай запускаем проверку сразу при старте скрипта
    killSock();

})();

