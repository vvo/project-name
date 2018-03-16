const privateModule = require('private-module');

module.exports = function publicModule() {
  // eslint-disable-next-line no-console
  console.log(privateModule('library'));
};
