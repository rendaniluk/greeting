// const getRadioBtnValue = require('./getRadioBtnValue');
// const getInputMsg = require('./getInputMsg');

var sayGreetings = function(language, theName) {
  // module.exports = function(language, theName) {
  var greetings = getRadioBtnValue(language) + getInputMsg(theName);
  return greetings;
}
