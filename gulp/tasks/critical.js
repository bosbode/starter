var gulp = require("gulp"),
critical = require('critical'),
concat = require('gulp-concat'),
config = require("../config.json");

function criticalCssConcat (){
	return gulp.src('./user/themes/' + config.theme + '/assets/compiled/styles/critical/*.css')
		.pipe(concat('./user/themes/' + config.theme + '/assets/compiled/styles/main.critical.css'))
		.pipe(gulp.dest('.'));
};

function criticalCss (cb) {
    return Object.keys(config.criticalCSSPath).forEach(function (obj, index) {
        critical.generate({
            src: config.criticalCSSPath[obj],
            width: 1920,
            height: 1080,
            dest: './user/themes/' + config.theme + '/assets/compiled/styles/critical/critical.' + obj + '.css'
        })
        cb();
    })
};

gulp.task('criticalLocal', function () {
    return critical.generate({
        src: 'http://localhost:8080/',
        width: 1920,
        height: 1080,
        dest: './user/themes/' + config.theme + '/assets/compiled/styles/main.critical.css'
    })
});

gulp.task('criticalCssConcat', criticalCssConcat);
gulp.task('criticalCss', criticalCss);