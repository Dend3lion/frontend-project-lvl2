import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

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

const parse = (filepath) => {
  const data = fs.readFileSync(filepath, 'utf-8');
  const type = path.extname(filepath);
  const parser = getParser(type);

  return parser(data);
};

export default parse;
