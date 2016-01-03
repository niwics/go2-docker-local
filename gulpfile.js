var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('build-compose', function() {

    gulp.src(['docker-compose-base.yml', '../niwi.cz/docker/docker-compose.yml'])
        .pipe(concat("docker-compose.yml"))
        .pipe(gulp.dest('.'));
});
