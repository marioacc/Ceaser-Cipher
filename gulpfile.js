var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
gulp.task('start', function () {
  nodemon({
    script: 'index.html'
  , ext: 'js html jade'
  , env: { 'NODE_ENV': 'development' }
  })
})
