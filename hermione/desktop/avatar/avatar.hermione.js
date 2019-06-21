/* global describe, beforeEach, it */

describe('avatar', function() {

    beforeEach(function() {
        return this.browser.url('bundles/desktop.tests/avatar/hermione/hermione.html').waitForVisible('.sky-size-avatar-login-S-enabled');
    });

    [
        'sky-size-avatar-login-XS',
        'sky-size-avatar-login-S',
        'sky-size-avatar-login-M',
        'sky-size-avatar-login-L',
        'sky-size-avatar-login-XL'
    ].forEach((test) => {

        it(`${test}-enabled`, function() {
            const cls = `.${test}-enabled`;

            return this.browser
                .assertView('plain', cls);
        });
    });

    [
        'sky-size-avatar-comment-XS',
        'sky-size-avatar-comment-S',
        'sky-size-avatar-comment-M',
        'sky-size-avatar-comment-L',
        'sky-size-avatar-comment-XL'
    ].forEach((test) => {

        it(`${test}-enabled`, function() {
            const cls = `.${test}-enabled`;

            return this.browser
                .assertView('plain', cls);
        });
    });
});

