var gulp = require("gulp"),
critical = require('critical'),
concat = require('gulp-concat'),
config = require("../config.json");

function criticalCssConcat (done){
    setTimeout(function(){
        gulp.src('./user/themes/' + config.theme + '/assets/compiled/styles/critical/*.css')
        .pipe(concat('./user/themes/' + config.theme + '/assets/compiled/styles/main.critical.css'))
        .pipe(gulp.dest('.'))
        done();
    }, 20000)
};

// function criticalCss (done) {
//     Object.keys(config.criticalCSSPath).forEach(function (obj) {
//         critical.generate({
//             src: config.criticalCSSPath[obj],
//             width: 1920,
//             height: 1080,
//             dest: './user/themes/' + config.theme + '/assets/compiled/styles/critical/critical.' + obj + '.css'
//         })
//     })
//     done();
// };

function criticalCss (done) {
    critical.generate({
        src: config.criticalCSSPath.home,
        width: 1920,
        height: 1080,
        dest: './user/themes/' + config.theme + '/assets/compiled/styles/main.critical.css',
        include: ['.content__img-container', '.content__img', '.content__img--glide', '.glide', '.glide__slides', '.glide__track', '.glide__slide', '.glide--ltr', '.glide--carousel', '.glide--swipeable', '.glide__slide--clone']
    })
    done();
};

gulp.task('criticalCssLocal', function () {
    return critical.generate({
        src: 'http://localhost:8080/',
        width: 1920,
        height: 1080,
        dest: './user/themes/' + config.theme + '/assets/compiled/styles/main.critical.css'
    })
});

// gulp.task('criticalCssConcat', criticalCssConcat);
gulp.task('criticalCss', criticalCss);