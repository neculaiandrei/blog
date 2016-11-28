import gulp from 'gulp';
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

const config = {
  src: './src/app',
  dist: './src/public',
  js: {
    entry: 'main.js',
    folder: '/scripts/',
  },
  sass: {
    entry: '*.scss',
    folder: '/styles/',
  },
  fonts: {
    folder: '/fonts/',
  },
  port: 11921,
};

const bundler = browserify({
  entries: config.src + config.js.folder + config.js.entry,
  debug: true,
  cache: {},
  packageCache: {},
}).plugin(watchify, { ignoreWatch: ['**/node_modules/**'] })
  .transform('babelify', { presets: ['es2015', 'react'] });

const bundle = () => {
  util.log(util.colors.blue('Started js'));
  return bundler
    .bundle()
    .on('error', util.log)
    .pipe(source(config.js.entry))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dist + config.js.folder))
    .on('end', () => {
      util.log(util.colors.blue('Finished js'));
    });
};

gulp.task('compile-js', bundle);

gulp.task('watch-js', () => bundler.on('update', bundle));

const compileSass = () =>
  gulp.src(config.src + config.sass.folder + config.sass.entry)
    .pipe(sourcemaps.init(true))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dist + config.sass.folder))
    .on('end', () => {
      util.log(util.colors.blue('Finished sass'));
    });

gulp.task('compile-sass', compileSass);

gulp.task('watch-sass', () => {
  watch(config.src + config.sass.folder + config.sass.entry, compileSass);
});

gulp.task('copy-3rdParty-styles', () => {
  gulp.src('node_modules/font-awesome/css/font-awesome.css')
    .pipe(gulp.dest(config.dist + config.sass.folder));
  gulp.src('node_modules/font-awesome/fonts/*.*')
    .pipe(gulp.dest(config.dist + config.fonts.folder));
});

gulp.task('build', [
  'compile-js',
  'compile-sass',
  'copy-3rdParty-styles',
]);

gulp.task('watch', [
  'watch-js',
  'watch-sass',
]);

gulp.task('default', (done) => {
  runSequence('build', 'watch', () => {
    done();
    util.log(util.colors.blue('Finished'));
  });
});
