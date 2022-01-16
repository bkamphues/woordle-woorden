// Imports
const { src, dest, watch, series, parallel } = require("gulp");

// HTML Task
function HTMLTask(): NodeJS.ReadWriteStream {
  return src("src/html/**/*.html").pipe(dest("dist"));
}

// Export Tasks
exports.HTMLTask = HTMLTask;
exports.default = series(HTMLTask);
