import * as fs from 'fs';

let converted = fs.readFileSync('src/index.lua').toString();

converted = converted.replace(/local /g, 'let ');
converted = converted.replace(/--\s+\[(.*)\]/g, '// $1');
converted = converted.replace(/--/g, '//');
converted = converted.replace(/nil/g, 'null');
converted = converted.replace(/if (.*)\s+then/g, 'if ($1) {');
converted = converted.replace(/\n(\s+)else\s+\n/g, '\n$1} else {\n');

// if regex is found
// while regex is found

while (converted.match(/\n(\s*)end(\s*)\n/g)) {
  converted = converted.replace(/\n(\s*)end(\s*)\n/g, '\n$1}$2\n');
}
converted = converted.replace(/(\s+)end\)/g, '$1})');
converted = converted.replace(/#([^\s]+)\s/g, '$1.length ');
converted = converted.replace(
  /for\s*([^\s]*)\s*=\s*([^\s]*), ([^\s]*) do/g,
  'for (let $1 = $2; $1 < $3; $1++) {'
);

converted = converted.replace(/~=/g, '!==');
converted = converted.replace(/\.\./g, '+').replace(/\+\./g, '...');

converted = converted.replace(/function\s*([^\s]*)\s*\((.*)\)/g, 'function $1($2) {');

converted = converted.replace(/(\s+)or(\s+)/g, '$1||$2');
converted = converted.replace(/(\s+)and(\s+)/g, '$1&&$2');
converted = converted.replace(/(\s+)not(\s+)/g, '$1!');
converted = converted.replace(/\(not(\s+)/g, '!');
converted = converted.replace(/\n(\s+)elseif/g, '$1} else if');

const output = fs.writeFileSync('src/converted.ts', converted);

console.log('test');
