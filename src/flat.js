import _ from 'lodash';
import stylish from './stylish.js';
import parse from './parsers.js';

const getFormatter = (format) => {
  switch (format) {
    case 'stylish':
      return stylish;
    default:
  }

  return null;
};

const flat = (filepath1, filepath2, { format }) => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);

  const iter = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const keys = _.union(keys1, keys2);

    const result = keys.reduce((acc, key) => {
      if (!Object.hasOwn(obj1, key)) {
        return [...acc, { key, newValue: obj2[key], type: 'added' }];
      }
      if (!Object.hasOwn(obj2, key)) {
        return [...acc, { key, oldValue: obj1[key], type: 'deleted' }];
      }
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return [
          ...acc,
          { key, children: iter(obj1[key], obj2[key]), type: 'nested' },
        ];
      }
      if (obj1[key] !== obj2[key]) {
        return [
          ...acc,
          {
            key,
            oldValue: obj1[key],
            newValue: obj2[key],
            type: 'changed',
          },
        ];
      }
      return [...acc, { key, oldValue: obj1[key], type: 'unchanged' }];
    }, []);

    return _.sortBy(result, ['key']);
  };

  const diff = iter(data1, data2);
  const formatter = getFormatter(format);
  return formatter(diff);
};

export default flat;
