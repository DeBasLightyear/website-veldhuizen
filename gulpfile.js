// Defining plugins
const gulp = require('gulp')
const sass = require('gulp-sass')
const minify = require('gulp-cssnano')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const prefix = require('autoprefixer')
const cache = require('gulp-cache')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

// Paths
const PATHS = {
    scss: {
        src: "src/scss/*.scss",
        dest: "src/css",
    },
    css: {
        src: "src/css/*.css",
        dest: "dist/css"
    },
    images: {
        src: "src/img",
        dest: "dist/img"
    }
}

///////////
// Tasks //
///////////
// Compile sass
function compileSass(){
    return gulp.src('src/scss/*.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(sourcemaps.init())
        .pipe(concat('styles.css'))
        .pipe(rename({
            basename: 'styles',
            suffix: '.min',
            extname: ".css"
        }))
        .pipe(postcss([prefix(), minify]))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(PATHS.scss.dest))
}

// Watch the Sass directory for changes
function watchSass(){
    const log = msg => console.log(`--${msg}`)
    const sw = gulp.watch([PATHS.scss.src], compileSass)
    sw.on('change', path => log(`File ${path} changed`))
    sw.on('add', path => log(`File ${path} was added`))
    sw.on('unlink', path => log(`File ${path} was removed`))
}

function clearCache(done) {
    return cache.clearAll(done)
}

// EXPORTS
exports.watch = gulp.series(
    compileSass,
    watchSass
)

exports.clear = clearCache

exports.default = exports.watch