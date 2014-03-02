ChromedHipchatExtension.EmoticonChooser = function() {
  var $container = $(ChromedHipchatExtension.Templates.emoticonChooser()).hide().appendTo($('#chats')),
      justShown = false;

      chrome.extension.sendMessage({command: 'getOptions'}, function(options) {
        new ChromedHipchatExtension.Emoticons().fetchAll(options.auth_token, function(emoticons, isStatic) {
          $container.append(ChromedHipchatExtension.Templates.emoticonList({
            emoticons: emoticons,
            isStatic: isStatic,
            optionsUrl: options.optionsPage
          }));
        });
      });

      show = function() {
        $container.find('li').show().removeClass('selected')
        $container.show().find('input').val('');
        setTimeout(function() {$container.find('input').focus();}, 200);
        filter();
        justShown = true;
      },

      hide = function() {
        $container.hide();
        $('textarea').focus();
      },

      wasImmediatelyClosed = function() {
        return justShown;
      },

      reset = function() {
        justShown = false;
      },

      filter = function(keyCode) {
        switch(keyCode) {
          case 13: return $container.find('li.selected a').attr('title'); //return
          case 27: return; //escape
          case 37: $container.find('li.selected').removeClass('selected').prevOrCurrent(':visible').addClass('selected');return; //left
          case 39: $container.find('li.selected').removeClass('selected').nextOrCurrent(':visible').addClass('selected');return; //right
        }

        justShown = false;
        var currentValue = $container.find('input').val();

        $container.find('li').each(function() {
          match = $(this).find('a').attr('title').toLowerCase().indexOf(currentValue.toLowerCase()) >= 0
          $(this)[match ? 'show' : 'hide']();
        });

        $container.find('li').removeClass('selected')
        $container.find('li:visible:first').addClass('selected')
      };

  return {
    hide: hide,
    show: show,
    filter: filter,
    wasImmediatelyClosed: wasImmediatelyClosed,
    reset: reset
  }
};
