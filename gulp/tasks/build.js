var gulp = require('gulp'),
del = require('del'),
config = require('../config.json');

gulp.task('build', ['clearCompiled', 'clearCache', 'scripts', 'styles']);