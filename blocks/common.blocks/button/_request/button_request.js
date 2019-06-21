/**
 * @module button
 */
modules.define('button',
    ['request', 'validation-handler', 'vow'],
    function(provide, Request, Validation, Vow, Button) {

    /**
     * @exports
     * @class button
     * @bem
     */
    provide(Button.declMod({ modName: 'request', modVal: true }, /** @lends button.prototype */{
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    this._form = null;

                    if( this.hasMod('disabled') === false ) {
                        this._request = Request.create();
                        this._request.initialize(this.params.uri, {}, { method : "POST" });
                        this._request.extendData({ action : 'validation' });
                        this._events().on('click', this._clickHandler, this);
                    }
                }
            },
            'disabled' : {
                'true' : function() {
                    this.__base.apply(this, arguments);
                    this._events().un('click', this._clickHandler, this);
                },

                '' : function() {
                    this.__base.apply(this, arguments);
                    this._events().on('click', this._clickHandler, this);
                }
            }
        },

        /**
         * Событие клика по кнопке
         * @param {*} e
         * @private
         */
        _clickHandler : function (e) {
            e.preventDefault();

            this.setMod('loading');

            let $target = e.bemTarget,
                data = [];

            if( $target.domElem.attr('name') ) {
                data[$target.domElem.attr('name')] = 1;
            }

            if( this.getForm() && this.getForm().getCaptcha() ) {

                this.getForm().getCaptcha().execute(() => {
                    data[this.getForm().getCaptcha().getName()] = this.getForm().getCaptcha().getVal();

                    this._sendRequest(data).then(
                        (response) => this.handleRequestSuccess(response),
                        (response) => this.handleRequestError(response)
                    );

                    this.getForm().getCaptcha().reset();

                }, ()=> { this.handleRequestError() });
            }
            else
            {
                this._sendRequest(data).then(
                    (response) => this.handleRequestSuccess(response),
                    (response) => this.handleRequestError(response)
                );
            }

            this.delMod('focused');
        },

        /**
         * Оброботка полученого ответа
         * @param response
         */
        handleRequestSuccess : function(response) {
            this.delMod('loading');

            if( typeof response.action !== "undefined" && response.action === 'validation' ) {
                this._callbackSuccess(response);
            }
        },

        /**
         *
         * @param response
         */
        handleRequestError : function(response) {
            console.warn(response);
            this.delMod('loading');
        },

        /**
         * Ответ от сервера
         * @param {object} json
         * @private
         */
        _callbackSuccess : function (json) {
            Validation.process(json);

            if( typeof json.response === "undefined" ) {
                return 0;
            }

            if( typeof json.response.countdown !== "undefined" ) {
                this.createTimer(json.response.countdown);
            }
        },

        /**
         * Make request
         * @param {object} objectData
         * @return {*}
         * @private
         */
        _sendRequest : function (objectData) {
            var defer = Vow.defer(),
                promise = defer.promise();

            this._request.makeRequest(objectData, {}).then((response) => {
                defer.resolve(response);
            }, (response) => {
                defer.reject(response);
            });

            return promise;
        },

        /**
         * Return form or null
         * @return {*|Block}
         */
        getForm : function () {

            if( !this._form )
            {
                this._form = this.findParentBlock({
                    block : {
                        getEntityName : function () {
                            return 'form';
                        }
                    }
                });
            }

            return this._form;
        }

    }, /** @lends button */{
        lazyInit : false,
        onInit : function() {
            return this.__base.apply(this, arguments);
        }
    }));

});
