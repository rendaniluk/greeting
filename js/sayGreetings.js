// const getRadioBtnValue = require('./getRadioBtnValue');
// const getInputMsg = require('./getInputMsg');

var sayGreetings = function(lulimi, theName) {
  // module.exports = function(language, theName) {
  var greetings = getRadioBtnValue(lulimi) + getInputMsg(theName);
  return greetings;
}
