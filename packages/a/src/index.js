const b = require("@ignored/prerelease-spike-b");
const c = require("@ignored/prerelease-spike-c");

module.exports = function a() {
  b();
  c();
  console.log("from a");
};
