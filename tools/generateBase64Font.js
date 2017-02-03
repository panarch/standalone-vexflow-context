const fs = require('fs');
const process = require('process');

const inputFileName = process.argv[2];
const inputNodeBuffer = fs.readFileSync(inputFileName);

fs.writeFileSync(
  `${inputFileName}.js`,
  `const base64Font = "${inputNodeBuffer.toString('base64')}"; export default base64Font;`
);
