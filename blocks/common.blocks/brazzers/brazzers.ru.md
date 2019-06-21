# brazzers

Используется для создания миниатюрной карусели.

![Alt Text](brazzers.ex.gif)

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#brazzersImages">images</a> | <code>Array</code> | Список картинок. |
| <a href='#brazzersTheme'>theme</a> | <code>'sky'</code> | <code>BEMJSON</code> | Стилевое оформление. |
## Описание блока

Блок `brazzers` предоставляет возможность быстро создавать галереи для товара.

### Пример использования
<a name="brazzersImages"></a>
<a name="brazzersTheme"></a>
```js
{
    block : 'brazzers',
    mods: { theme : 'sky' },
    images : [
        'https://avatarko.ru/img/vkontakte/zhivotnye2.jpg',
        'https://avatarko.ru/img/vkontakte/zhivotnye1.jpg',
        'https://avatarko.ru/img/vkontakte/zhivotnye4.jpg',
           
    ]
}
```
