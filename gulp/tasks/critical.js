var gulp = require("gulp"),
critical = require('critical'),
concat = require('gulp-concat'),
config = require("../config.json");

gulp.task('concatCritical', ['critical'], function() {
    return gulp.src('user/themes/' + config.theme + '/assets/compiled/styles/critical/*.css')
      .pipe(concat('main.critical.css'))
      .pipe(gulp.dest('user/themes/' + config.theme + '/assets/compiled/styles/main.critical.css'));
  });

gulp.task('critical', ['styles'], function () {
    return Object.keys(config.criticalCSSPath).forEach(function (obj, index) {
        return critical.generate({
            src: config.criticalCSSPath[obj],
            width: 1920,
            height: 1080,
            dest: 'user/themes/' + config.theme + '/assets/compiled/styles/critical/critical.' + obj + '.css'
        });
    })
});

gulp.task('criticalLocal', function () {
    return critical.generate({
        src: 'http://localhost:8080/',
        width: 1920,
        height: 1080,
        dest: 'user/themes/' + config.theme + '/assets/compiled/styles/main.critical.css'
    });
});
