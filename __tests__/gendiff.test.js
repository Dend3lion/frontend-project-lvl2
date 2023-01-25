import path from 'path';
import flat from '../src/gendiff.js';
import {
  stylishResult,
  plainResult,
  jsonResult,
} from '../__fixtures__/results.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);
describe('gendiff', () => {
  test('stylish json diff', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');

    expect(flat(filepath1, filepath2, 'stylish')).toBe(stylishResult);
  });

  test('stylish format yaml file diff', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');

    expect(flat(filepath1, filepath2, 'stylish')).toBe(stylishResult);
  });

  test('plain format json file diff', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');

    expect(flat(filepath1, filepath2, 'plain')).toBe(plainResult);
  });

  test('plain format yaml file diff', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');

    expect(flat(filepath1, filepath2, 'plain')).toBe(plainResult);
  });

  test('json format json file diff', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');

    expect(flat(filepath1, filepath2, 'plain')).toBe(plainResult);
  });

  test('json format yaml file diff', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');

    expect(flat(filepath1, filepath2, 'json')).toBe(jsonResult);
  });
});
