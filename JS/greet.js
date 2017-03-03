//The DOM - document objec model
var theName = document.querySelector('.theName');
var btn = document.querySelector('.theButton');
var myList = document.querySelector('.myList');
var clearBtn = document.querySelector('.clear');
//
var clickMe = function(){
  if (theName.value.length > 0){
  var li = "Hello, "+ theName.value;
  myList.innerHTML = li;
  theName.value = '';
 }
}

btn.addEventListener('click', clickMe);

clearBtn.addEventListener('click', function(){
    myList.innerHTML = '';
});
