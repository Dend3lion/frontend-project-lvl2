import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import yaml from 'js-yaml';
import path from 'path';

const getParser = (type) => {
  switch (type) {
    case '.json':
      return JSON.parse;
    case '.yaml':
    case '.yml':
      return yaml.load;
    default:
  }

  return null;
};

const parse = (filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filepath = path.join(filename);
  console.log(filepath);

  const data = fs.readFileSync(filepath, 'utf-8');
  const type = path.extname(filepath);
  const parser = getParser(type);

  return parser(data);
};

export default parse;
