import path from 'path';
import fs from 'fs';

const getFilePath = (filename) => path.join(process.cwd(), filename);

const readData = (filename) => {
  const data = fs.readFileSync(getFilePath(filename), 'utf-8');
  const type = filename.split('.').at(-1);

  switch (type) {
    case 'json':
      return JSON.parse(data);
    default:
  }
};

export default readData;
