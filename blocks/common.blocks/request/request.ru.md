# request

Используется для отправки запросов к серверу. Базируется на ([ajax](http://jquery.page2page.ru/index.php5/Ajax-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81))

## Обзор блока

Этот блок используется без dom представление чтобы использовать методы блока нужно его создать.

```js
/**
 * @module example-block
 */

modules.define('example-block', 
    ['i-bem-dom', 'request'], 
    function(provide, bemDom, Request) {

    /**
     * @exports
     * @class example-block
     * @bem
     */
    provide(bemDom.declBlock(this.name, /** @lends example-block.prototype */{
       onSetMod: {
           js: {
               inited: function() {
                   this._request = Request.create();
                   this._request.initialize('/path/to/api', { format : 'json' }, {
                       type : 'GET',
                       beforeSend : function(jqXHR, settings) {
                           //...
                       }
                   });
                   
                   
                   this._request.makeRequest().then(function() {
                     
                   });
               }
           }
       }
    
    }));
});
```
