const dotenv = require("dotenv");

let mode_env = process.env.NODE_ENV, path_env;

console.log(mode_env, "mode_envmode_env");
if (mode_env === "production" || mode_env === "prod") {
  path_env = `${__dirname}/.env.prod`;
} else if (mode_env === "development" || mode_env === "dev") {
  path_env = `${__dirname}/.env.dev`;
} else {
  path_env = `${__dirname}/.env.prod`;
}

const result = dotenv.config({ path: path_env });

if (result.error) throw result.error;
const { parsed: envs } = result;
process.env.PORT =
  process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "dev"
    ? envs.relase_port
    : envs.port;
module.exports = envs;
