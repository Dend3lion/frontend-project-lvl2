import stylish from './stylish.js';

const getFormatter = (format) => {
  switch (format) {
    case 'stylish':
      return stylish;
    default:
  }

  return null;
};

export default getFormatter;
