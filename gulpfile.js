const gulp = require('gulp');
const pug = require('gulp-pug');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require("gulp-autoprefixer");
const plumber = require('gulp-plumber');
const  gutil = require('gulp-util');

const del = require('del');

const browserSync = require('browser-sync').create();

const gulpWebpack = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
//конфиг сборщика свг
const config = {
    mode: {
        symbol: {
            sprite: "../sprite.svg",
            render: {
                scss: {
                    dest: '../../../scss/_sprite.scss'
                }
            },
            example: {
                dest: '../../../tmp/spriteSvgDemo.html' // демо html
            }
        }
    }
};
const paths = {
    root: './build',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug'
    },
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'build/assets/styles/'
    },    
    images: {
        src: 'src/images/**/*.*',
        dest: 'build/assets/images/'
    },
    fonts:{
        src: "src/fonts/*.*",
        dest: "build/assets/fonts/"
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'build/assets/scripts/'
    }
};
//сборка свг
 function svgBuild () {
    return gulp.src('src/images/svg/*.svg')
    // минифицируем svg
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        // удалить все атрибуты fill, style and stroke в фигурах
        .pipe(cheerio({
            run: function($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        // cheerio плагин заменит, если появилась, скобка '&gt;', на нормальную.
        .pipe(replace('&gt;', '>'))
        // build svg sprite
        .pipe(svgSprite(config))
        .pipe(gulp.dest('src/images/svg/'));
}
// pug
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(plumber(function (error) {
            gutil.log(error.message);
            this.emit('end');
        }))
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.root));
}

// scss
function styles() {
    return gulp.src('./src/styles/style.scss')
        .pipe(plumber(function (error) {
            gutil.log(error.message);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(sass(/*{outputStyle: 'compressed'}*/))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
            }))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest))
}

// очистка
function clean() {
    return del(paths.root);
}

// webpack
function scripts() {
    return gulp.src('src/scripts/main.js')
        .pipe(plumber(function (error) {
            gutil.log(error.message);
            this.emit('end');
        }))
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(babel())
        .pipe(gulp.dest(paths.scripts.dest))


}

// галповский вотчер
function watch() {
    gulp.watch(paths.styles.src, gulp.series(styles,reload));
    gulp.watch(paths.templates.src, gulp.series(templates,reload));
    gulp.watch(paths.images.src, gulp.series(images,reload));
    gulp.watch(paths.scripts.src, gulp.series(scripts,reload));
}

// локальный сервер + livereload
function server() {
    browserSync.init({
        server: paths.root
    });
}
function reload(done) {
     browserSync.reload();
     done()

}
// просто переносим картинки
function images() {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
}
// просто переносим шрифты
function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
}
exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.images = images;
exports.fonts = fonts;
exports.svgBuild = svgBuild;
exports.watch = scripts;
gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, templates, images, scripts,fonts),
    gulp.parallel(watch, server)
));