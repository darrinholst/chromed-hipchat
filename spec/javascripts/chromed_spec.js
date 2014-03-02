describe('Chromed', function() {
  beforeEach(function() {
    loadFixtures('chromed.html');
    this.chooser = jasmine.createSpyObj('chooser', ['show', 'hide', 'wasImmediatelyClosed', 'reset'])
    this.chooser.wasImmediatelyClosed.and.returnValue(false);
  });

  describe('with default options', function() {
    beforeEach(function() {
      new ChromedHipchatExtension.Chromed(this.chooser).initialize();
    });

    it('hides emoticon chooser when escape is pressed', function() {
      pressEscapeKey();
      expect(this.chooser.hide).toHaveBeenCalled();
    });

    it('shows emoticon chooser when hotkey is pressed', function() {
      pressEmoticonChooserHotkey();
      expect(this.chooser.show).toHaveBeenCalled();
    });

    it('ignores the emoticon chooser hotkey if it was immediately closed the last time it was shown', function() {
      this.chooser.wasImmediatelyClosed.and.returnValue(true);
      pressEmoticonChooserHotkey()
      expect(this.chooser.show).not.toHaveBeenCalled();
      expect(this.chooser.reset).toHaveBeenCalled();
    });

    function pressEscapeKey() {
      triggerKeydown(27);
    }

    function pressEmoticonChooserHotkey() {
      triggerKeydown(57, true);
    }
  });

  it('allows changing of the emoticons hotkey', function() {
    spyOn(chrome.extension, 'sendMessage').and.callFake(function(message, callback) {
      callback({emoticons_hotkey: 'e'});
    });

    new ChromedHipchatExtension.Chromed(this.chooser).initialize();
    triggerKeydown(101)
    expect(this.chooser.show).toHaveBeenCalled();
  });

  function triggerKeydown(keyCode, shiftKey) {
    var e = $.Event('keydown');
    e.which = keyCode;
    e.keyCode = keyCode;
    e.shiftKey = shiftKey;
    $('#message_input').trigger(e);
  }
});
