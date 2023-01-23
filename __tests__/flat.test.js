import flat from "../src/flat.js"
import path from 'path';

const getFixturePath = (filename) => path.join(process.cwd(), '__fixtures__', filename);

test('flat file', () => {
  const filepath1 = getFixturePath('file1.json')
  const filepath2 = getFixturePath('file2.json')
  const result = ['{',
    '  - follow: false',
    '    host: hexlet.io',
    '  - proxy: 123.234.53.22',
    '  - timeout: 50',
    '  + timeout: 20',
    '  + verbose: true',
    '}'].join('\n')

  expect(flat(filepath1, filepath2)).toBe(result)
})
