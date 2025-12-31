(function () {
    'use strict';
    
    // 1. Ставим флаг, что плагин якобы уже запущен. 
    // Настоящий новогодний плагин увидит это и сразу выключится.
    window.new_year = true;

    // 2. На случай, если он уже успел проскочить, блокируем загрузку скрипта
    var originalPut = Lampa.Utils.putScriptAsync;
    Lampa.Utils.putScriptAsync = function (scripts) {
        var filtered = scripts.filter(function (src) {
            return !src.includes('new-year') && !src.includes('snow');
        });
        return filtered.length > 0 ? originalPut.call(Lampa.Utils, filtered) : Promise.resolve();
    };

    // 3. Финальный удар: если кнопка всё же успела отрисоваться (мало ли)
    var kill = function() {
        var btn = document.querySelector('.new-year__button, .new-year_button');
        if (btn) btn.remove();
    };
    new MutationObserver(kill).observe(document.documentElement, {childList: true, subtree: true});
    kill();

    console.log('Plugin: New Year Blocked Forever');
})();
