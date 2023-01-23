import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const getReader = (type) => {
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

const readData = (filename) => {
  const data = fs.readFileSync(filename, 'utf-8');
  const type = path.extname(filename);
  const reader = getReader(type);

  return reader(data);
};

export default readData;
