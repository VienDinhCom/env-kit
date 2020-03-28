import _ from 'lodash';
import dotenv from 'dotenv';

dotenv.config();

export function pick(variables: string[]) {
  return _.pick(process.env, variables);
}

export function get(variable: string) {
  if (variable === undefined) {
    return process.env;
  }

  return process.env[variable];
}

export default { pick, get };
