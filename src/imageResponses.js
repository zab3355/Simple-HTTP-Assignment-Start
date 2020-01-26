const fs = require('fs');

const dankmeme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getDankmeme = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(dankmeme);
  response.end();
};

module.exports.getDankmeme = getDankmeme;
