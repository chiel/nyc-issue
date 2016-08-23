const gulp = require('gulp');
const gutil = require('gulp-util');
const tasks = require('gulp-tasks-poki')(gulp, gutil);

gulp.task('babel', tasks.babel());
gulp.task('symlink', ['babel'], tasks.symlink());
gulp.task('default', ['babel', 'symlink']);
