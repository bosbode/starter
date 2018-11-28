var gulp = require('gulp');

gulp.task('build', ['clearCompiled', 'clearCache', 'scripts', 'concatCritical']);