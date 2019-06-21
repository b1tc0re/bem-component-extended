/**
 * @module button
 */
modules.define('button', ['i-bem-dom'], function(provide, bemDom, Button) {

    /**
     * @exports
     * @class button
     * @bem
     */
    provide(Button.declMod({ modName: 'has-countdown', modVal: true }, /** @lends button.prototype */{
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);
                    this._time = this.params.countdown;
                    this._text = this._elem('text').domElem.text();
                    this._time !== 0 && ( this.createTimer(this._time) );
                }
            }
        },

        /**
         * Create timer
         * @param {int} time
         */
        createTimer : function(time) {
            this._time = time;

            this.interval = setInterval(function () {
                this.setMod('disabled');
                this.updateTimer();
            }.bind(this), 1000);
        },

        /**
         * Обновления таймра
         */
        updateTimer : function() {

            if( this._time <= 0 || isNaN(this._time)) {
                this.updateTextElem(this._text).delMod('disabled');
                clearInterval(this.interval);
                return;
            }

            this.updateTextElem(this._text + ' ' + this.getFormattedTime(this._time) );
            this._time--;
        },

        /**
         * Обновить текст кнопки
         * @param {string} content
         * @return this
         */
        updateTextElem : function(content) {
            bemDom.update(this._elem('text').domElem, content);
            return this;
        },

        /**
         * Отформатировать секунды в время 00:00
         * @param {int} time Время в секундах
         * @return {string}
         */
        getFormattedTime : function (time) {
            // Hours, minutes and seconds
            let hrs  = ~~(time / 3600),
                mins = ~~((time % 3600) / 60),
                secs = ~~time % 60,
                ret = "";

            if (hrs > 0) {
                ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
            }

            ret += "" + mins + ":" + (secs < 10 ? "0" : "");
            ret += "" + secs;
            return ret;
        }

    }, /** @lends button */{
        lazyInit : false,
        onInit : function() {
            return this.__base.apply(this, arguments);
        }
    }));

});

