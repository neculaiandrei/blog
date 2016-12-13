import gulp from 'gulp';
import babel from 'gulp-babel';
import browserify from 'browserify';
import watchify from 'watchify';
import watch from 'gulp-watch';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sass from 'gulp-sass';
import runSequence from 'run-sequence';
import util from 'gulp-util';
import nodemon from 'gulp-nodemon';
import path from 'path';

const bundler = browserify({
  entries: './src/app/scripts/main.js',
  debug: true,
  cache: {},
  packageCache: {},
}).plugin(watchify, { ignoreWatch: ['**/node_modules/**'] })
  .ignore('unicode/category/So')
  .transform('babelify', { presets: ['es2015', 'react'] });

const bundle = () => {
  util.log(util.colors.blue('Started js'));
  return bundler
    .bundle()
    .on('error', util.log)
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/public/scripts'))
    .on('end', () => {
      util.log(util.colors.blue('Finished js'));
    });
};

gulp.task('compile-js', bundle);

gulp.task('watch-js', () => bundler.on('update', bundle));

const compileSass = () =>
  gulp.src('./src/app/styles/*.scss')
    .pipe(sourcemaps.init(true))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/public/styles'))
    .on('end', () => {
      util.log(util.colors.blue('Finished sass'));
    });

gulp.task('compile-sass', compileSass);

gulp.task('watch-sass', () => {
  watch('./src/app/styles/*.scss', compileSass);
});

gulp.task('copy-favicon', () => {
  gulp.src('./src/app/favicon.ico')
    .pipe(gulp.dest('./dist/public'));
});

gulp.task('copy-3rdParty-styles', () => {
  gulp.src('node_modules/font-awesome/css/font-awesome.css')
    .pipe(gulp.dest('./dist/public/styles'));
  gulp.src('node_modules/font-awesome/fonts/*.*')
    .pipe(gulp.dest('./dist/public/fonts'));
});

gulp.task('server-build', () => {
  gulp.src('./src/**/*.ejs')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: '../src',
    }))
    .pipe(gulp.dest('./dist'));

  const stream = gulp.src(['./src/**/*.js'])
                   .pipe(sourcemaps.init())
                   .pipe(babel({ presets: ['es2015'] }))
                    .pipe(sourcemaps.write('.', {
                      includeContent: false,
                      sourceRoot: '../src',
                    }))
                   .pipe(gulp.dest('./dist'))
                   .on('end', () => {
                     util.log(util.colors.blue('Finished building server.'));
                   });
  return stream;
});

gulp.task('server-watch', () =>
  nodemon({
    script: './dist/server.js',
    exec: 'node --debug',
    ext: 'js',
    watch: 'src',
    tasks: ['server-build'],
    ignore: ['node_modules/**', 'src/app/**'],
  })
);

gulp.task('build', [
  'compile-js',
  'compile-sass',
  'copy-favicon',
  'copy-3rdParty-styles',
  'server-build',
]);

gulp.task('watch', [
  'watch-js',
  'watch-sass',
  'server-watch',
]);


gulp.task('default', (done) => {
  runSequence('build', 'watch', () => {
    done();
    util.log(util.colors.blue('Finished'));
  });
});
