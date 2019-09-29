const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            versions: ['last 2 browsers']
        }))
        .pipe(gulp.dest('docs/css'))
});

gulp.task('default', () => {
    gulp.watch('scss/*.scss', (done) => {
        gulp.series(['sass'])(done);
    });
});