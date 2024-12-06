import reverse from '../src/index.js';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('reverse', () => {
  const text = fs.readFileSync(
    `${__dirname}/../__fixtures__/longText.txt`,
    'utf-8',
  );
  const resultText = fs.readFileSync(
    `${__dirname}/../__fixtures__/resultText.txt`,
    'utf-8',
  );
  const result = reverse(text);
  expect(result).toEqual(resultText);
});
