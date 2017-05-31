var fs = require('fs');

fs.writeFile('ukinode.txt', ' This is the second paragraph of Uki.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
