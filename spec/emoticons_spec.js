describe('Emoticons', function() {
  it('gives you a list of static emoticons', function(done) {
    new Emoticons().fetchAll(function(emoticons) {
      expect(emoticons.length).toEqual(146);
      done();
    });
  });
});

