//The DOM - document objec model -selecting HTML elements.
var radBtn = document.querySelector('.radioBtn');
var greetBtn = document.querySelector('.theButton');
var reset = document.querySelector('.reset');
var nextPerson = document.querySelector('.next');
var myList = document.querySelector('.myList');
var theName = document.querySelector('.theName')
var counter = document.querySelector('#counter')
//declaring empty variable namesGreeted to store names already greeted
var namesGreeted = {};
//setting counter to zero
if (typeof(localStorage.count) === 'undefined') {
    localStorage.setItem("count", 0);
}
//showing user the last session greetings count using localStorage
counter.innerHTML = localStorage.count;
//function for greetings including counter
function clickMe() {
    //storing theName.value into variable x
    var x = theName.value;
    //selecting radio button using querySelector and store them into selectedRadBtn
    var selectedRadBtn = document.querySelector("input[name='lang']:checked");
    var li = selectedRadBtn.value + ',' + ' ' + x.toUpperCase();
    //check if name already greeted and print massage using innerHTML.
    if (x.length > 0) {
        myList.innerHTML = li;

    }
    if (namesGreeted[x] === undefined && x.length > 0) {
        namesGreeted[x] = 1;
        localStorage.count++;
        counter.innerHTML = localStorage.count;
        return;
    }
    //counter for x value greater than zero if less no count
    //namesGreeted[x] = 1;
    //localStorage.count++;
    //counter.innerHTML = localStorage.count;


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
    namesGreeted = {};
    counter.innerHTML = localStorage.count;
});
