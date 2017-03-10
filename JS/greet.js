//The DOM - document objec model -selecting HTML elements.
var radBtn = document.querySelector('.radioBtn');
var greetBtn = document.querySelector('.theButton');
var reset = document.querySelector('.reset');
var nextPerson = document.querySelector('.next');
var myList = document.querySelector('.myList');
var theName = document.querySelector('.theName')
var counter = document.querySelector('#counter')
//declaring empty variable namesGreeted to store names already greeted

//setting counter to zero
if (localStorage.count === undefined) {
    localStorage.setItem("count", 0);
}
if (localStorage.getItem('greeted') ===undefined) {
  localStorage.setItem('greeted', JSON.stringify({}));

}
//showing user the last session greetings count using localStorage
counter.innerHTML = localStorage.count;
//localStorage.setItem('greeted', JSON.stringify({}));
//function for greetings including counter
function clickMe() {
    //storing theName.value into variable x
    var x = theName.value;
    //selecting radio button using querySelector and store them into selectedRadBtn
    var selectedRadBtn = document.querySelector("input[name='lang']:checked");
    var li = selectedRadBtn.value + ',' + ' ' + x.substr(0,1).toUpperCase() + x.substr(1).toLowerCase();
    //check if name already greeted to increase counter and print massage using innerHTML.
    if (x.length > 0) {
        myList.innerHTML = li;

    }

    var greeted = JSON.parse(localStorage.getItem('greeted'));

    if (greeted[x] === undefined && x.length > 0) {
        greeted[x] = 1;
        localStorage.count++;
        counter.innerHTML = localStorage.count;
        localStorage.setItem('greeted', JSON.stringify(greeted));

	}
};
//adding eventlisteners to greetBtn and reset
greetBtn.addEventListener('click', clickMe);
//greet next person eventlisteners
nextPerson.addEventListener('click', function() {
    theName.value = '';
    myList.innerHTML = '';
});
//reset counter eventlisteners
reset.addEventListener('click', function() {
    localStorage.count = 0;
    counter.innerHTML = localStorage.count;
});
