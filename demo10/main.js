var b = require("./b");
require.ensure(['./a'], function(require) {
  var content = require('./a');
  document.open();
  content = content + b;
  document.write('<h1>' + content + '</h1>');
  document.close();
});
