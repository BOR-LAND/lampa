(function() {
    console.log('--- ТЕСТ ЗАПУЩЕН ---');

    Lampa.Listener.follow('all', function (e) {
        var btn = document.querySelector('.new-year_button, .new-year__button');
        var status = btn ? '✅ НАЙДЕНА' : '❌ НЕТУ';
        
        console.log('Событие: [' + e.event + '] тип: [' + e.type + '] | Кнопка: ' + status);
        
        // Если кнопка нашлась именно в этот момент - мы поймали событие
        if (btn) {
            console.warn('!!! Кнопку можно резать на событии: ' + e.event + ' (' + e.type + ')');
        }
    });
})();
