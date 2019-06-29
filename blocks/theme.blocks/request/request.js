/**
 * @module request
 */
modules.define('request', ['i-bem', 'jquery', 'config'], function(provide, bem, $, Config) {

    /**
    * @exports
    * @class request
    * @bem
    */
    provide(bem.declBlock(this.name, /** @lends request.prototype */ {

        /**
         * @var {object}
         * @protected
         */
        _requestData : {},

        /**
         * @var {object}
         * @protected
         */
        _requestOption : {},

        onSetMod: {
            js: {
                inited: function() {
                    let $config = $('.config');
                    this._config = $config.length && $config.bem(Config);
                }
            }
        },

        /**
         * Initialize request block
         *
         * @param {String} url
         * @param {object} data
         * @param {object} options
         * @returns {request}
         */
        initialize : function(url, data, options) {
            this.setData(data).setOptions(options).extendOptions({ url : url });
            return this;
        },

        // region Data request

        /**
         * Set request data
         *
         * @param {object} data
         * @returns {request}
         */
        setData : function(data) {
            this._requestData = data;
            return this;
        },

        /**
         * Extend request data
         * @param {{}} data
         * @returns {request}
         */
        extendData : function(data) {
            this._requestData =  $.extend({}, this._requestData, data);
            return this;
        },

        /**
         *
         * @returns {{}|request._requestData}
         */
        getData : function() {
            return this._requestData;
        },

        // endregion

        // region Option methods

        /**
         * Set ajax request options
         *
         * @param {object} options
         * @returns {request}
         */
        setOptions : function(options) {
            this._requestOption = options;
            return this;
        },

        /**
         * Extend ajax request option
         * @param options
         * @returns {request}
         */
        extendOptions : function(options) {
            this._requestOption =  $.extend({}, this._requestOption, options);
            return this;
        },

        //endregion

        /**
         * Send request
         *
         * @param {object} data
         * @param {object} options
         * @returns {*}
         */
        makeRequest : function (data, options) {

            if( this._config && typeof this._config.params.token === 'object' ) {
                let _params = this._config.params;

                this.extendOptions({
                    headers: {
                        [_params.token.name] : _params.token.value,
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                });
            }

            data && this.extendData(data);
            options && this.extendOptions(options);

            return $.ajax($.extend({}, { data : this._requestData }, this._requestOption));
        }

    }));
});
