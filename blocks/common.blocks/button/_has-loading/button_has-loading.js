/**
 * @module button
 */
modules.define('button', ['spin'], function(provide, Spin, Button) {

    const TIMEOUT = 400;

    provide(Button.declMod({ modName: 'has-loading', modVal: true }, /** @lends button.prototype */{
        onSetMod: {

            'js': {
                'inited': function() {
                    this.__base.apply(this, arguments);

                    this._spin = this.findChildBlock(Spin);
                }
            },

            'loading' : {

                'true' : function () {
                    this._start = this.getUnixTimestamp();

                    this.setMod('loading-progress')
                        .setMod('disabled', true);

                    this._spin.setMod('visible', true);

                    this.__base.apply(this, arguments);
                },

                '' : function () {
                    setTimeout( () => {
                        this._spin.setMod('visible', false);
                        this.setMod('disabled', false);
                        this.delMod('loading-progress');
                    }, this.getTimeout(this._start) );

                    this.__base.apply(this, arguments);
                }
            },

            'disabled' : {
                '*' : function(modName, modVal) {
                    this.__base.apply(this, arguments);

                    this._spin.setMod(modName, modVal);
                },
            }
        },

        /**
         * Get unix timestamp
         * @return {number}
         */
        getUnixTimestamp : function () {
            return Math.round(new Date().getTime() / 1000);
        },

        /**
         * Calculate timeout
         * @param {number} start
         */
        getTimeout : function (start) {
            let passed = this.getUnixTimestamp() - start;
            return passed < TIMEOUT ? TIMEOUT - passed : 0;
        }

    }, /** @lends button */{
        lazyInit : false,
        onInit : function() {
            return this.__base.apply(this, arguments);
        }
    }));

});
