// Import src and dest from gulp.
const { src, dest } = require("gulp");

// Import gulp plugins.
const babel = require("gulp-babel");

exports.default = function (done) {
  return src("./src/components/**/*.tsx")
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
    .pipe(dest("./build/js"));
};
