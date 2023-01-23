import fs from 'fs';

const readData = (filename) => {
  const data = fs.readFileSync(filename, 'utf-8');
  const type = filename.split('.').at(-1);

  switch (type) {
    case 'json':
      return JSON.parse(data);
    default:
  }

  return '';
};

export default readData;
