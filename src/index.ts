import _pick from 'lodash.pick';
import dotenv from 'dotenv';

dotenv.config();

function pick(variables: string[]) {
  return _pick(process.env, variables);
}

function get(): NodeJS.ProcessEnv;
function get(variable: string): string;
function get(variable?: string): any {
  if (variable == undefined) {
    return process.env;
  } else {
    return process.env[variable];
  }
}

export { pick, get };

export default { pick, get };
