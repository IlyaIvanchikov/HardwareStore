const path = require('path');
const fs = require('fs');


fs.readFile(
  path.join(__dirname, '..', 'data', 'users.json'),
);
