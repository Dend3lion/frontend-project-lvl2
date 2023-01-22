import _ from 'lodash';
import stringify from './printDiff.js';
import { readData } from './readData.js';

const flat = (filepath1, filepath2) => {
  const data1 = readData(filepath1);
  const data2 = readData(filepath2);

  const iter = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const keys = _.union(keys1, keys2);

    const result = keys.reduce((acc, key) => {
      if (!Object.hasOwn(obj1, key)) {
        return [...acc, { key, value: obj2[key], status: 'added' }];
      }
      if (!Object.hasOwn(obj2, key)) {
        return [...acc, { key, value: obj1[key], status: 'deleted' }];
      }
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return [
          ...acc,
          { key, value: iter(obj1[key], obj2[key]), status: 'inner' },
        ];
      }
      if (obj1[key] !== obj2[key]) {
        return [
          ...acc,
          { key, value: [obj1[key], obj2[key]], status: 'changed' },
        ];
      }
      return [...acc, { key, value: obj1[key], status: 'unchanged' }];
    }, []);

    return result;
  };

  const diff = iter(data1, data2);

  console.log(diff);
  console.log(stringify(diff));
  return diff;
};

export default flat;
