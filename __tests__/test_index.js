import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import reverse from '../src/index.js';

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8');

test('reverse', () => {
  const text = readFixtureFile(longText.txt);
  const resultText = readFixtureFile(resultText.txt);

  expect(reverse(text)).toEqual(resultText);
});
