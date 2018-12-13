var gulp = require('gulp'),
phpConnect = require('gulp-connect-php'),
del = require('del'),
browserSync = require('browser-sync').create(),
config = require('../config.json'),
styles = require('./styles'),
scripts = require('./scripts');

function watch (){

	browserSync.init({
        proxy: '127.0.0.1:8010',
        port: 8080,
        open: true,
        notify: false
	});
	
	phpConnect.server({ 
		base: '.', 
		router: './system/router.php', 
		port: 8010, 
		keepalive: true
	});

	gulp.watch('./user/pages/**/**/*.md', gulp.series('browserRefresh'));

	gulp.watch('./user/themes/' + config.theme + '/assets/styles/**/*.scss', gulp.series(styles.sass, styles.styles, cssInject));
    
    gulp.watch('./user/themes/' + config.theme + '/assets/scripts/**/*.js', gulp.series(scripts.scripts, browserRefresh));
   
    gulp.watch('./user/themes/' + config.theme + '/templates/**/*.twig', gulp.series(clearCache, browserRefresh));
    
    gulp.watch('./user/pages/**/*', gulp.series(clearCache, browserRefresh));
	
};

function cssInject (){
	return gulp.src('./user/themes/' + config.theme + '/assets/compiled/styles/main.css')
		.pipe(browserSync.stream());
};

function browserRefresh(cb){
	browserSync.reload();
	cb();
};

function clearCache (){
	return del(['./cache/*', './assets/*', './images/*']);
};

function clearCompiled (){
	return del(['./user/themes/' + config.theme + '/assets/compiled']);
};

gulp.task('cssInject', cssInject);
gulp.task('clearCache', clearCache);
gulp.task('clearCompiled', clearCompiled);
gulp.task('browserRefresh', browserRefresh);
gulp.task('watch', watch);
