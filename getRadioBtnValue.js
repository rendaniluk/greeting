//function
var getRadioBtnValue = function(lulimi) {
  var selectedRadBtn = [];
  var luambo = ["English", "TshiVenda", "isiXhosa", "Afrikaans"];

    if (luambo === "English") {
      selectedRadBtn.push(luambo)
      return selectedRadBtn;
    } else if (luambo === "TshiVenda") {
      selectedRadBtn.push(luambo)

      return selectedRadBtn;
    } else if (luambo === "isiXhosa") {
      selectedRadBtn.push(luambo)

    return selectedRadBtn;
    } else if (luambo === "Afrikaans") {
      selectedRadBtn.push(luambo)

    return selectedRadBtn;
    }
}
var English = getRadioBtnValue("English");
console.log(English);
