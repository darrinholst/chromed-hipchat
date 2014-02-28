Templates = {
  emoticonChooser: _.template([
    '<div class="chromed-hipchat-emoticons">',
    '  <input class="emoticon-filter" type="text">',
    '</div>'
  ].join("\n")),

  emoticonList: _.template([
    '<ul>',
    '  <% _.each(emoticons, function(emoticon) { %>',
    '    <li>',
    '      <a href="#" class="chromed-hipchat-emoticon" title="<%= emoticon[0] %>">',
    '        <img src="<%= emoticon[1] %>">',
    '      </a>',
    '    </li>',
    '  <% }); %>',
    '</ul>'
  ].join("\n"))
};

