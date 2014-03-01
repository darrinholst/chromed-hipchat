(function() {
  var chooser = new EmoticonChooser(),

      showEmoticonChooser = function(e) {
        e.preventDefault();
        e.stopPropagation();
        chooser.show();
      },

      abort = function() {
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
        $(document).bind('keydown', '(', showEmoticonChooser);
        $(document).bind('keydown', 'esc', abort);
        $(document).on('keyup', '.chromed-hipchat-emoticons input', filterEmoticons);
        $(document).on('click', '.chromed-hipchat-emoticon', emoticonClicked);

        chrome.extension.sendMessage({command: 'getOptions'}, function(options) {
          if(options.probably_nsfw) {
            $('body').addClass('probably-nsfw');
          }
        });
      };

  initialize();
})();

