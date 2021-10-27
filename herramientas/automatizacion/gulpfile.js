const gulp = require("gulp");
const server = require("gulp-server-livereload");

gulp.task("build", function (cb) {
  console.log("Construyendo el sitio");
  setTimeout(cb, 1200);
});

gulp.task("serve", function (cb) {
  console.log("Abrí la web");
  gulp.src("www").pipe(
    server({
      livereload: false,
      open: true,
    })
  );
});