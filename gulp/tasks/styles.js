var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
hexrgba = require('postcss-hexrgba'),
cssnano = require('cssnano'),
config = require('../config.json'),
sassGulp = require('gulp-sass');


function styles (cb){
	var plugins = [
		hexrgba(),
        autoprefixer({grid: true}),
		cssnano()
    ];
	return gulp.src('./user/themes/' + config.theme + '/assets/compiled/styles/main.css')
		.pipe(postcss(plugins))
		.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./user/themes/' + config.theme + '/assets/compiled/styles'))
		cb();
};

function sass (cb){
	return gulp.src('./user/themes/' + config.theme + '/assets/styles/main.scss')
		.pipe(sassGulp({
			includePaths: ['node_modules/rfs/scss/', 'node_modules/slick-carousel/slick/', 'node_modules/fullpage.js/dist/', 'node_modules/normalize.css/']
		}))
		.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./user/themes/' + config.theme + '/assets/compiled/styles'));
		cb();
};

// gulp.task('styles', gulp.series(sass, styles));
gulp.task('styles', styles);
gulp.task('sass', sass);

module.exports = {
	styles,
	sass
}
