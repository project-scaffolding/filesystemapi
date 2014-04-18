/* global define, describe, it, expect */
define(['openq/config/app'], function (appConfig) {
    'use strict';

    describe('Application Config', function () {
        it('should be actual', function() {
            expect(appConfig.version).to.equal('0.0.1');
        });
    });
});