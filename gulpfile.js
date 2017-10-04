'use strict';
// jshint node: true

var path = require('path'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    $ = require('gulp-load-plugins')(),
    del = require('del'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync'),
    wct = require('web-component-tester'),
    reload = browserSync.reload;

wct.gulp.init(gulp, ['default']);

gulp.task('serve', function () {
  browserSync({
    notify: false,
    server: {
      baseDir: ['target', 'components', 'node_modules']
    }
  });

  gulp.watch(['*.html', 'demo/*.html'], ['default', reload]);
});

gulp.task('default', $.shell.task(['make quickbuild']));


try { require('web-component-tester').gulp.init(gulp); } catch (err) {}
try { require('require-dir')('tasks'); } catch (err) {}
