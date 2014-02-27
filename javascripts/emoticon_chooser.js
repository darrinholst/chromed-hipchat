EmoticonChooser = function() {
  var emoticons = new Emoticons().all(),

      buildContainer = function() {
        var container = $('<div>').hide().addClass('chromed-hipchat-emoticons'),
            filter = $('<input class="emoticon-filter" type="text">').appendTo(container),
            list = $('<ul>').appendTo(container);

        for(var i = 0, j = emoticons.length; i < j; i++) {
          $('<li><a href="#" class="chromed-hipchat-emoticon" title="' + emoticons[i][0] + '"><img src="' + emoticons[i][1] + '"></a></li>').appendTo(list);
        }

        return container;
      },

      $container = buildContainer().appendTo($('body')),

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
