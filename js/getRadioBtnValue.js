//function
var getRadioBtnValue = function(lulimi) {
  // module.exports = function(lulimi) {
  // if (lulimi == "English") {
  //   var English = "Hello, ";
  //   return English;
  // } else if (lulimi == "TshiVenda") {
  //   var TshiVenda = "Ndaa/Aa, ";
  //   return TshiVenda;
  // } else if (lulimi == "Afrikaans") {
  //   var Afrikaans = "Hallo, ";
  //   return Afrikaans
  // } else {
  //   var isiXhosa = "Molo, ";
  //   return isiXhosa;
  // }
  switch (lulimi) {
    case 'English':
      return "Hello, "
    case 'TshiVenda':
      return "Ndaa/Aa, ";
    case 'Afrikaans':
      return "Hallo, ";
    case 'isiXhosa':
      return "Molo, ";
    default:
      return 'no radio button selected';
  }
};
