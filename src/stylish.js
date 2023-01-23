import _ from 'lodash';

// prints plain objects
const printPlainObj = (value, replacer, spacesCount, initialDepth) => {
  if (!_.isObject(value)) return value;

  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }

    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount * 2);
    const lines = Object.entries(currentValue).map(
      ([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 2)}`,
    );

    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(value, initialDepth);
};

// Prints complex objects
const stylish = (value, replacer = ' ', spacesCount = 2) => {
  const iter = (currentValue, depth) => {
    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);

    if (!Array.isArray(currentValue)) {
      switch (currentValue.type) {
        case 'added':
          return `+ ${currentValue.key}: ${printPlainObj(
            currentValue.newValue,
            replacer,
            spacesCount,
            depth + 2,
          )}`;
        case 'deleted':
          return `- ${currentValue.key}: ${printPlainObj(
            currentValue.oldValue,
            replacer,
            spacesCount,
            depth + 2,
          )}`;
        case 'unchanged':
          return `  ${currentValue.key}: ${printPlainObj(
            currentValue.oldValue,
            replacer,
            spacesCount,
            depth + 2,
          )}`;
        case 'changed':
          return `- ${currentValue.key}: ${printPlainObj(
            currentValue.oldValue,
            replacer,
            spacesCount,
            depth + 2,
          )}\n${bracketIndent}+ ${currentValue.key}: ${printPlainObj(
            currentValue.newValue,
            replacer,
            spacesCount,
            depth + 2,
          )}`;
        case 'nested':
          return `  ${currentValue.key}: ${iter(
            currentValue.children,
            depth + 1,
          )}`;
        default:
      }
    }

    const lines = _.sortBy(currentValue, ['key']).map(
      (entry) => `${currentIndent}${iter(entry, depth + 1)}`,
    );

    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(value, 1);
};

export default stylish;
