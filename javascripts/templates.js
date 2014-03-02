ChromedHipchatExtension.Templates = {
  emoticonChooser: _.template([
    '<div class="chromed-hipchat-emoticons">',
    '  <input class="emoticon-filter" type="text" placeholder="Filter">',
    '</div>'
  ].join("\n")),

  emoticonList: _.template([
    '<ul>',
    '  <% _.each(emoticons, function(emoticon) { %>',
    '    <li>',
    '      <a href="#" class="chromed-hipchat-emoticon" title="<%= emoticon.shortcut %>">',
    '        <img src="<%= emoticon.url %>">',
    '      </a>',
    '    </li>',
    '  <% }); %>',
    '</ul>'
  ].join("\n"))
};

