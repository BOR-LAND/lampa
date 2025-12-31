(function () {
    'use strict';
    
    // Создаем стиль, который скрывает элемент
    var css = '.new-year_button { display: none !important; }';
    
    // Добавляем этот стиль на страницу
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    document.head.appendChild(style);
    
    console.log('Plugin: New Year button hidden');
})();
