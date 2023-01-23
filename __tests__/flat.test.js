import path from 'path';
import flat from '../src/flat.js';

const getFixturePath = (filename) =>
  path.join(process.cwd(), '__fixtures__', filename);

const result = [
  '{',
  '  - follow: false',
  '    host: hexlet.io',
  '  - proxy: 123.234.53.22',
  '  - timeout: 50',
  '  + timeout: 20',
  '  + verbose: true',
  '}',
].join('\n');

test('flat json diff', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  expect(flat(filepath1, filepath2)).toBe(result);
});

test('flat yaml diff', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');
  const result = [
    '{',
    '  - follow: false',
    '    host: hexlet.io',
    '  - proxy: 123.234.53.22',
    '  - timeout: 50',
    '  + timeout: 20',
    '  + verbose: true',
    '}',
  ].join('\n');

  expect(flat(filepath1, filepath2)).toBe(result);
});
