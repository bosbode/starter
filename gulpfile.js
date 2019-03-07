let gulp = require('gulp'), 
HubRegistry = require('gulp-hub');

let hub = new HubRegistry(['gulp/tasks/*.js']);

gulp.registry(hub);

gulp.task('build', gulp.series(gulp.series('clearCompiled', 'clearCache'), gulp.parallel('modernizr', 'sass'), gulp.parallel('scripts', 'styles'), 'criticalCss'));
gulp.task('default', gulp.series(gulp.series('clearCompiled', 'clearCache'), gulp.parallel('modernizr', 'sass'), gulp.parallel('scripts', 'styles'), 'watch'));
