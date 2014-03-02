ChromedHipchatExtension.Chromed = function(chooser) {
  var chooser = chooser || new ChromedHipchatExtension.EmoticonChooser(),
      showEmoticonChooser = function(e) {
        if(chooser.wasImmediatelyClosed()) {
          chooser.reset();
        } else {
          e.preventDefault();
          e.stopPropagation();
          chooser.show();
        }
      },

      abort = function(e) {
        chooser.hide();
      },

      filterEmoticons = function(e) {
        var chosen = chooser.filter(e.keyCode);

        if(chosen) {
          pasteEmoticon(chosen);
        }
      },

      emoticonClicked = function() {
        pasteEmoticon($(this).attr('title'));
      },

      pasteEmoticon = function(emoticon) {
        var messageInput = $('#message_input');
        messageInput.val(messageInput.val() + '(' + emoticon + ')').putCursorAtEnd();
        chooser.hide();
      },

      initialize = function() {
        $(document).bind('keydown', 'esc', abort);
        $(document).on('keyup', '.chromed-hipchat-emoticons input', filterEmoticons);
        $(document).on('click', '.chromed-hipchat-emoticon', emoticonClicked);

        chrome.extension.sendMessage({command: 'getOptions'}, function(options) {
          $(document).bind('keydown', options.emoticons_hotkey || '(', showEmoticonChooser);

          if(options.probably_nsfw) {
            $('body').addClass('probably-nsfw');
          }
        });
      };

  return {
    initialize: initialize
  }
};

$(function() {
  if(typeof jasmine === 'undefined') {
    new ChromedHipchatExtension.Chromed().initialize();
  }
});

