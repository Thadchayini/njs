var fs = require('fs');

fs.appendFile('ukinode.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
