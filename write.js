var fs = require('fs');

fs.writeFile('ukinode.txt', 'Uki life.Hello uki', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
