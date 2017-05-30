describe('Counter for greetings', function() {

  it('should count the greeted person once', function() {
    var theCounter = TheCounter();
    theCounter.mapGreetingCount("rendani");
    theCounter.mapGreetingCount("anele");
    theCounter.mapGreetingCount("rendani");
    assert.equal(2, theCounter.countGreetings());
  });
  it('should count how many times people were greeted', function() {
    var theCounter = TheCounter();
    theCounter.mapGreetingCount("rendani");
    theCounter.mapGreetingCount("anele");
    theCounter.mapGreetingCount("rendani");
    assert.equal(3, theCounter.mapGreetingCount());
  });
});
