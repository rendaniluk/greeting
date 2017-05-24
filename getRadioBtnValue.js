//function
var getRadioBtnValue = function(lulimi) {
  if (lulimi === "English") {
    var English = "Hello, ";
    return English;
  } else if (lulimi === "TshiVenda") {
    var TshiVenda = "Ndaa/Aa, ";
    return TshiVenda;
  } else if (lulimi === "Afrikaans") {
    var Afrikaans = "Hallo, ";
    return Afrikaans
  } else {
    var isiXhosa = "Molo, ";
    return isiXhosa;
  }
}
