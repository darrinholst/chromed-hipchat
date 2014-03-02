describe('Chromed', function() {
  var chooser = null;

  beforeEach(function() {
    loadFixtures('chromed.html');
    chooser = jasmine.createSpyObj('chooser', ['show', 'hide', 'wasImmediatelyClosed', 'reset'])
    chooser.wasImmediatelyClosed.and.returnValue(false);
    new ChromedHipchatExtension.Chromed(chooser).initialize();
  });

  it('hides emoticon chooser when escape is pressed', function() {
    pressEscapeKey();
    expect(chooser.hide).toHaveBeenCalled();
  });

  it('shows emoticon chooser when hotkey is pressed', function() {
    pressEmoticonChooserHotkey();
    expect(chooser.show).toHaveBeenCalled();
  });

  it('ignores the emoticon chooser hotkey if it was immediately closed the last time it was shown', function() {
    chooser.wasImmediatelyClosed.and.returnValue(true);
    pressEmoticonChooserHotkey()
    expect(chooser.show).not.toHaveBeenCalled();
    expect(chooser.reset).toHaveBeenCalled();
  });

  function pressEscapeKey() {
    triggerKeydown(27);
  }

  function pressEmoticonChooserHotkey() {
    triggerKeydown(57, true);
  }

  function triggerKeydown(keyCode, shiftKey) {
    var e = $.Event('keydown');
    e.which = keyCode;
    e.keyCode = keyCode;
    e.shiftKey = shiftKey;
    $('#message_input').trigger(e);
  }
});
