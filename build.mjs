import { copyFileSync, mkdirSync } from 'node:fs';

mkdirSync('public', { recursive: true });
copyFileSync('index.html', 'public/index.html');

console.log('FootPredict build completed.');
