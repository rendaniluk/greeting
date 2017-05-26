"use strict"
//The DOM - document objec model -selecting HTML elements.
var greetBtn = document.querySelector('.theButton');
var reset = document.querySelector('.reset');
var nextPerson = document.querySelector('.next');
var myList = document.querySelector('.myList');
var theName = document.querySelector('.theName');
var counter = document.querySelector('#counter')

var greeted = {}; //empty object to keep greeted names

if (localStorage.count === undefined) { //initializing counter
  localStorage.setItem("count", 0);
}

counter.innerHTML = localStorage.count; //showing user the last session greetings count using localStorage
localStorage.setItem('greeted', JSON.stringify({})); //setting up localStorage

greetBtn.addEventListener('click', function () {
   displayGreetings();
  if (greeted[theName.value] === undefined && (theName.value).length > 0) { //condition to check if name exists and increament once if does'nt exists
    greeted[theName.value] = 1;
    localStorage.count++;
    counter.innerHTML = localStorage.count;
    localStorage.setItem('greeted', JSON.stringify(greeted));
  }
}); //adding eventlisteners to greetBtn and reset

nextPerson.addEventListener('click', function() { //greet next person eventlisteners
  theName.value = '';
  myList.innerHTML = '';
});
reset.addEventListener('click', function() { //reset counter eventlisteners
  localStorage.count = 0;
  counter.innerHTML = localStorage.count;
});
