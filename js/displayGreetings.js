var displayGreetings = function() {
  var selectedRadBtn = document.querySelector("input[name='lang']:checked");
  var li = sayGreetings(selectedRadBtn.value, theName.value); //calling function to generate greeting massage

  if ((theName.value).length > 0) { //condition to check if text box value is typed in then display greeting
    myList.innerHTML = li;
  }
}
