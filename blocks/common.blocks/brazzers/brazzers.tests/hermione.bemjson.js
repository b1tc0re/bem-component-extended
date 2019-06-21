module.exports = {
    block: 'page',
    title: 'Brazzers tests',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'hermione.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'hermione.min.js' }],
    content:  {
        attrs : { style: 'width : 200px; height : 180px; position : relative'  },
        content : [
            {
                block: 'brazzers',
                cls: 'brazzers-test-enabled',
                mods: { theme : 'sky' },
                images : [
                    'https://avatarko.ru/img/vkontakte/zhivotnye2.jpg',
                    'https://avatarko.ru/img/vkontakte/zhivotnye1.jpg',
                    'https://avatarko.ru/img/vkontakte/zhivotnye4.jpg'
                ]
            }
        ]
    }
};
