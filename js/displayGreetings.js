var displayGreetings = function() {
  var selectedRadBtn = document.querySelector("input[name='lang']:checked");
  if(!selectedRadBtn){
    myList.innerHTML = getRadioBtnValue();
  }
  if ((theName.value).length > 0 && selectedRadBtn) { //condition to check if text box value is typed in then display greeting
    var li = sayGreetings(selectedRadBtn.value, theName.value); //calling function to generate greeting massage
    myList.innerHTML = li;
  }
}
