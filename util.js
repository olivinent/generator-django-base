'use strict';
var cr = require('crypto');

function generateRandomString() {
  // generates a random 50 character string
  return cr.randomBytes(25).toString('hex');
}

module.exports = {
  generateRandomString: generateRandomString
};
