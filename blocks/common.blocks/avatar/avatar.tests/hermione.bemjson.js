module.exports = {
    block: 'page',
    title: 'Avatar tests',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'hermione.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'hermione.min.js' }],
    content:  [
        {
            block : 'row',
            content : ['xs', 's', 'm', 'l', 'xl'].map(function (size) {
                let cls = 'sky-size-avatar-login-' + size.toUpperCase();
                return {
                    block : 'row',
                    attrs: { style : 'width: 980px; margin: 0 auto; margin-bottom: 15px;' },
                    content : [
                        {
                            tag : 'h2',
                            content : cls,
                        },
                        {
                            block : 'avatar',
                            cls: cls + '-enabled',
                            mods : { type : 'login', size : size, theme : 'sky' },
                        }
                    ],
                }
            })
        },

        {
            block : 'row',
            content : ['xs', 's', 'm', 'l', 'xl'].map(function (size) {
                let cls = 'sky-size-avatar-comment-' + size.toUpperCase();
                return {
                    block : 'row',
                    attrs: { style : 'width: 980px; margin: 0 auto; margin-bottom: 15px;' },
                    content : [
                        {
                            tag : 'h2',
                            content : cls,
                        },
                        {
                            block : 'avatar',
                            cls: cls + '-enabled',
                            mods : { type : 'comment', size : size, theme : 'sky' },
                        }
                    ],
                }
            })
        }
    ]
};
