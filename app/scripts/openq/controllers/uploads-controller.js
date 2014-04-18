/*global define*/
define(function (require) {
    'use strict';

    var UploadsController, IndexView;

    IndexView = require('openq/views/uploads/index-view');

    UploadsController = function () {};

    UploadsController.prototype = {

        index: function () {
            this.view = new IndexView();

            this.view.trigger('start');
        }

    };

    return UploadsController;

});