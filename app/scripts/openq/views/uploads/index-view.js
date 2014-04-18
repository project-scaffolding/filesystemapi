/*global define*/
define(function (require) {
    'use strict';

    var Backbone, JST;

    Backbone = require('backbone');
    JST = require('templates');

    return Backbone.View.extend({

        template: JST['app/scripts/openq/templates/uploads/index-template.ejs'],

        events: {
            'change #upload': 'uploadFile'
        },

        initialize: function () {
            this.on('start', this.start, this);
            this.on('stop', this.start, this);
        },

        start: function () {
            console.info('UploadIndexView: method "start" was called');
            $('body').append(this.render().el);
        },

        stop: function () {
            console.info('UploadIndexView: method "stop" was called');
        },
        
        render: function () {
            this.$el.html(this.template());
            return this;
        },

        uploadFile: function (e) {
            console.log(e);
            var files = e.files;
            window.requestFileSystem(window.TEMPORARY, 1024*1024, function(fs) {
            // Duplicate each file the user selected to the app's fs.
            for (var i = 0, file; file = files[i]; ++i) {

              // Capture current iteration's file in local scope for the getFile() callback.
              (function(f) {
                fs.root.getFile(file.name, {create: true, exclusive: true}, function(fileEntry) {
                  fileEntry.createWriter(function(fileWriter) {
                    fileWriter.write(f); // Note: write() can take a File or Blob object.
                  }, function () {});
                }, function () {});
              })(file);

            }
          }, errorHandler);
        }

    });

});