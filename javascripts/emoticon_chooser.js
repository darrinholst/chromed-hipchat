EmoticonChooser = function() {
  var $container = $(Templates.emoticonChooser()).hide().appendTo($('#chats'));

      chrome.extension.sendMessage({command: 'getOptions'}, function(options) {
        new Emoticons().fetchAll(options.auth_token, function(emoticons) {
          $container.append(Templates.emoticonList({emoticons: emoticons}));
        });
      });

      show = function() {
        $container.show().find('input').val('').focus();
      },

      hide = function() {
        $container.hide();
        $('textarea').focus();
      },

      filter = function(keyCode) {
        switch(keyCode) {
          case 13: return $container.find('li.selected a').attr('title'); //return
          case 37: $container.find('li.selected').removeClass('selected').prevOrCurrent(':visible').addClass('selected');return; //left
          case 39: $container.find('li.selected').removeClass('selected').nextOrCurrent(':visible').addClass('selected');return; //right
        }

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
    filter: filter
  }
};
