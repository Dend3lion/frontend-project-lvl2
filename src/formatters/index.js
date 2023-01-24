import stylish from './stylish.js';
import plain from './plain.js';

const getFormatter = (format) => {
  switch (format) {
    case 'stylish':
      return stylish;
    case 'plain':
      return plain;
    default:
  }

  return null;
};

export default getFormatter;
