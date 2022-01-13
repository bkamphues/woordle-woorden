// Import src and dest from gulp.
const { src, dest } = require("gulp");

// Import gulp plugins.
const babel = require("gulp-babel");

exports.default = function (done) {
  return src("./src/components/**/*.js")
    .pipe(
      babel({
        presets: [
          [
            "@babel/env",
            {
              modules: false,
            },
          ],
        ],
      })
    )
    .pipe(dest("./dist"));
};
