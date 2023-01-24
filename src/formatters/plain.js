import _ from 'lodash';

const formatValue = (value) => {
  if (value === null) return 'null';

  switch (typeof value) {
    case 'string':
      return `'${value}'`;
    case 'object':
      return '[complex value]';
    default:
      return `${value}`;
  }
};

const plain = (diff) => {
  const iter = (currentValue, path = '') => {
    if (!Array.isArray(currentValue)) {
      const currentPath = [...path, currentValue.key];
      const prefix = `Property '${currentPath.join('.')}'`;

      switch (currentValue.type) {
        case 'added':
          return `${prefix} was added with value: ${formatValue(
            currentValue.newValue,
          )}`;
        case 'deleted':
          return `${prefix} was removed`;
        case 'changed':
          return `${prefix} was updated. From ${formatValue(
            currentValue.oldValue,
          )} to ${formatValue(currentValue.newValue)}`;
        case 'nested':
          return iter(currentValue.children, currentPath);
        default:
          return undefined;
      }
    }

    const lines = _.sortBy(currentValue, ['key'])
      .filter((el) => el.type !== 'unchanged')
      .map((entry) => `${iter(entry, path)}`);

    return [...lines].join('\n');
  };

  return iter(diff);
};

export default plain;
