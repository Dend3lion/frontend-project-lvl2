import fs from 'fs';
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
  const data = fs.readFileSync(filename, 'utf-8');
  const type = path.extname(filename);
  const parser = getParser(type);

  return parser(data);
};

export default parse;
