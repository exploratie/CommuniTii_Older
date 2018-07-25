require = require("esm")(module, {"mode": "all", "await": true}) // eslint-disable-line
// require("@google-cloud/debug-agent").start({ allowExpressions: true })

module.exports = require("./fn")
