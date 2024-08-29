const process = require("node:process");

if (Object.hasOwn(process.env, "npm_command") && process.env.npm_command === "run-script") {
    process.exit(1);
}
process.exit(0);