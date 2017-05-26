//function
'use strict'
var getInputMsg = function(theName) {
  // module.exports = function(theName) {
  let upperCaseName = theName.substr(0, 1).toUpperCase() + theName.substr(1).toLowerCase();
  return upperCaseName;
}
