module.exports = {
    block: 'page',
    title: 'Buttons tests',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'hermione.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'hermione.min.js' }],
    content: [
        {
           tag: 'h3',
            attrs: { style : 'text-align: center' },
           content : 'Tests button size'
        },
        {
            block : 'row',
            attrs: { style : 'margin-bottom: 50px; display: flex;align-items: center;justify-content: center;' },
            content : ['s', 'm', 'l', 'xl'].map( (size) => {
                let cls = 'sky-button-size-' + size + '-enabled';

                return [
                    {
                        block : 'button',
                        cls: cls,
                        mods : { theme : 'sky', size: size, color: 'blue' },
                        text: 'button'
                    },
                    {
                        html : '&nbsp;&nbsp;&nbsp;'
                    }
                ];
            } )
        },
        {
            tag: 'h3',
            attrs: { style : 'text-align: center' },
            content : 'Tests button size disabled'
        },
        {
            block : 'row',
            attrs: { style : 'margin-bottom: 50px; display: flex;align-items: center;justify-content: center;' },
            content : ['s', 'm', 'l', 'xl'].map( (size) => {
                let cls = 'sky-button-disabled-size-' + size + '-enabled';

                return [
                    {
                        block : 'button',
                        cls: cls,
                        mods : { theme : 'sky', size: size, color: 'blue', disabled: true },
                        text: 'button'
                    },
                    {
                        html : '&nbsp;&nbsp;&nbsp;'
                    }
                ];
            } )
        },
        {
            tag: 'h3',
            attrs: { style : 'text-align: center' },
            content : 'Tests button size icon'
        },
        {
            block : 'row',
            attrs: { style : 'margin-bottom: 50px; display: flex;align-items: center;justify-content: center;' },
            content : ['s', 'm', 'l', 'xl'].map( (size) => {
                let cls = 'sky-button-icon-size-' + size + '-enabled';

                return [
                    {
                        block : 'button',
                        cls: cls,
                        mods : { theme : 'sky', size: size, color: 'blue' },
                        icon : {
                            block : 'icon',
                            position : 'left',
                            mods : { glyph: '500px' }
                        },
                        text: 'button'
                    },
                    {
                        html : '&nbsp;&nbsp;&nbsp;'
                    }
                ];
            } )
        },
        {
            tag: 'h3',
            attrs: { style : 'text-align: center' },
            content : 'Tests button size icon right'
        },
        {
            block : 'row',
            attrs: { style : 'margin-bottom: 50px; display: flex;align-items: center;justify-content: center;' },
            content : ['s', 'm', 'l', 'xl'].map( (size) => {
                let cls = 'sky-button-icon-right-size-' + size + '-enabled';

                return [
                    {
                        block : 'button',
                        cls: cls,
                        mods : { theme : 'sky', size: size, color: 'blue' },
                        icon : {
                            block : 'icon',
                            position : 'right',
                            mods : { glyph: '500px' }
                        },
                        text: 'button'
                    },
                    {
                        html : '&nbsp;&nbsp;&nbsp;'
                    }
                ];
            } )
        },
        {
            tag: 'h3',
            attrs: { style : 'text-align: center' },
            content : 'Tests button size link'
        },
        {
            block : 'row',
            attrs: { style : 'margin-bottom: 50px; display: flex;align-items: center;justify-content: center;' },
            content : ['s', 'm', 'l', 'xl'].map( (size) => {
                let cls = 'sky-button-link-size-' + size + '-enabled';

                return [
                    {
                        block : 'button',
                        cls: cls,
                        mods : { theme : 'sky', size: size, color: 'blue', type : 'link' },
                        url : '#',
                        text: 'button link'
                    },
                    {
                        html : '&nbsp;&nbsp;&nbsp;'
                    }
                ];
            } )
        },
        {
            tag: 'h3',
            attrs: { style : 'text-align: center' },
            content : 'Tests button size togglable check'
        },
        {
            block : 'row',
            attrs: { style : 'margin-bottom: 50px; display: flex;align-items: center;justify-content: center;' },
            content : ['s', 'm', 'l', 'xl'].map( (size) => {
                let cls = 'sky-button-togglable-check-size-' + size + '-enabled';

                return [
                    {
                        block : 'button',
                        cls: cls,
                        mods : { theme : 'sky', size: size, color: 'blue', togglable : 'check' },
                        url : '#',
                        text: 'button link'
                    },
                    {
                        html : '&nbsp;&nbsp;&nbsp;'
                    }
                ];
            } )
        },
        {
            tag: 'h3',
            attrs: { style : 'text-align: center' },
            content : 'Tests button size togglable radio'
        },
        {
            block : 'row',
            attrs: { style : 'margin-bottom: 50px; display: flex;align-items: center;justify-content: center;' },
            content : ['s', 'm', 'l', 'xl'].map( (size) => {
                let cls = 'sky-button-togglable-radio-size-' + size + '-enabled';

                return [
                    {
                        block : 'button',
                        cls: cls,
                        mods : { theme : 'sky', size: size, color: 'blue', togglable : 'radio' },
                        url : '#',
                        text: 'button link'
                    },
                    {
                        html : '&nbsp;&nbsp;&nbsp;'
                    }
                ];
            } )
        },
        {
            tag : 'h3',
            attrs: { style : 'text-align: center' },
            content : 'Button tests mods',
        },
        {
            block : 'row',
            attrs: { style : 'margin-bottom: 50px; display: flex;align-items: center;justify-content: center;' },
            content : [
                {
                    block : 'button',
                    cls: 'sky-button-countdown-enabled',
                    mods : { size : 'm', theme : 'sky', 'has-countdown': true, color : 'blue' },
                    js: { countdown : 120 },
                    text : 'Button countdown'
                }
            ]
        },
    ]
};
