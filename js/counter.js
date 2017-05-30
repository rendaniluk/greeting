var TheCounter = function() {
  var count = 0;
  var greeted = {};

  function mapGreetingCount(currentName) {
    if (greeted[currentName] === undefined) { //condition to check if name exists and increament once if does'nt exists
      count++
      greeted[currentName] = +1;
    }
    return count;
  }

  function countGreetings() {
    return count;
  }

  return {
    mapGreetingCount,
    countGreetings

  }



}
