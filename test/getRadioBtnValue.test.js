describe('Get radio button value', function(){

  it('should get the radio button value', function(){
      assert.equal("Hello, ", getRadioBtnValue('English'));
  });
  it('should return massage if no radio button selected', function(){
      assert.equal("no radio button selected", getRadioBtnValue());
  });
});
