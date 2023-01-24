import path from 'path';
import flat from '../src/gendiff.js';
import { stylishResult, plainResult } from '../__fixtures__/results.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

test('stylish json diff', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  expect(flat(filepath1, filepath2, 'stylish')).toBe(stylishResult);
});

test('stylish yaml diff', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');

  expect(flat(filepath1, filepath2, 'stylish')).toBe(stylishResult);
});

test('plain json diff', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  expect(flat(filepath1, filepath2, 'plain')).toBe(plainResult);
});

test('plain yaml diff', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');

  expect(flat(filepath1, filepath2, 'plain')).toBe(plainResult);
});
