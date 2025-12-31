(function () {
    'use strict';
    
    // Удаляем кнопку при добавлении плагина
    // document.querySelectorAll('.new-year__button').forEach(e => e.remove());
    
    // Ставим флаг, что плагин якобы уже запущен. 
    // Настоящий новогодний плагин увидит это и сразу выключится.
    window.new_year = true;
})();
