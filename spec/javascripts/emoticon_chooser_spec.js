describe('EmoticonChooser', function() {
  var chooser = null;

  beforeEach(function() {
    chooser = new ChromedHipchatExtension.EmoticonChooser();
  });

  it('shows chooser as being immediately closed', function () {
    chooser.show();
    chooser.filter(27); //escape key
    chooser.hide();
    expect(chooser.wasImmediatelyClosed()).toBe(true);
  });

  it('resets the immediately closed indicator after a rset', function () {
    chooser.show();
    chooser.filter(27); //escape key
    chooser.hide();
    expect(chooser.wasImmediatelyClosed()).toBe(true);
    chooser.reset();
    expect(chooser.wasImmediatelyClosed()).toBe(false);
  });

  it('shows chooser as not being immediately closed if it was used', function () {
    chooser.show();
    chooser.filter(57);
    chooser.hide();
    expect(chooser.wasImmediatelyClosed()).toBe(false);
  });
});
