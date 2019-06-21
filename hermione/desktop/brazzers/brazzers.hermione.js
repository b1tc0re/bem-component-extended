/* global describe, beforeEach, it */

describe('brazzers', function() {

    const cls = '.brazzers-test-enabled';

    beforeEach(function() {
        return this.browser.url('bundles/desktop.tests/brazzers/hermione/hermione.html').waitForVisible(cls);
    });

    // tests for enabled button
    it(`brazzers-enabled`, function() {
        return this.browser
            .assertView(`plain`, cls)
            .moveToObject(cls)
            .assertView(`hovered`, cls)
            .buttonDown(cls);
    });
});

