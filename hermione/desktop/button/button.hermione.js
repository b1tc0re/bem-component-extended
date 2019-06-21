/* global describe, beforeEach, it */

describe('button', function() {

    beforeEach(function() {
        return this.browser.url('bundles/desktop.tests/button/hermione/hermione.html').waitForVisible('.sky-button-size-s-enabled');
    });

    // Тестирования размеров в браузере
    ['s', 'm', 'l', 'xl'].forEach( (test) => {
        let cls = `.sky-button-size-${test}-enabled`;

        it(`size-${test}-enabled`, function() {
            return this.browser
                .assertView(`size-${test}-enabled-plain`, cls)
                .moveToObject(cls)
                .assertView(`size-${test}-enabled-hovered`, cls)
                .buttonDown(cls)
                .assertView(`size-${test}-enabled-pressed`, cls)
                .buttonUp(cls)
                .assertView(`size-${test}-enabled-clicked`, cls);
        });

        cls = `sky-button-disabled-size-${test}-enabled`;

        it(`size-${test}-disabled`, function() {
            return this.browser
                .assertView(`size-${test}-disabled-plain`, cls);
        });

        cls = `sky-button-icon-size-${test}-enabled`;

        it(`size-${test}-icon`, function() {
            return this.browser
                .assertView(`size-${test}-icon-plain`, cls)
                .moveToObject(cls)
                .assertView(`size-${test}-icon-hovered`, cls)
                .buttonDown(cls)
                .assertView(`size-${test}-icon-pressed`, cls)
                .buttonUp(cls)
                .assertView(`size-${test}-icon-clicked`, cls);
        });
    } );


    it(`button-countdown`, function() {
        return this.browser
            .assertView(`countdown-plain`,  '.sky-button-countdown-enabled');
    });
});

