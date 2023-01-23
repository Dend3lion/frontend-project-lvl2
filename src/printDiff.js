import _ from 'lodash';

const printValue = (data, indent) => {
  const { key, value, status } = data;

  switch (status) {
    case 'added':
      return `+ ${key}: ${value}`;
    case 'deleted':
      return `- ${key}: ${value}`;
    case 'unchanged':
      return `  ${key}: ${value}`;
    case 'changed': {
      const [oldVal, newVal] = value;
      return `- ${key}: ${oldVal}\n${indent}+ ${key}: ${newVal}`;
    }
    default:
  }

  return '';
};

const stringify = (value, replacer = ' ', spacesCount = 2) => {
  const iter = (currentValue, depth) => {
    const indentSize = depth * spacesCount;
    const innerIndent = replacer.repeat(indentSize);
    const currentIndent = replacer.repeat(indentSize - spacesCount);

    if (!Array.isArray(currentValue)) {
      return printValue(currentValue, currentIndent);
    }

    const lines = _.sortBy(currentValue, ['key']).map(
      (entry) => `${innerIndent}${iter(entry, depth + 1)}`,
    );

    return ['{', ...lines, `${currentIndent}}`].join('\n');
  };

  return iter(value, 1);
};

export default stringify;
