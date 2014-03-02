ChromedHipchatExtension.Templates = {
  emoticonChooser: _.template([
    '<div class="chromed-hipchat-emoticons">',
    '  <input class="emoticon-filter" type="text" placeholder="Filter">',
    '</div>'
  ].join("\n")),

  emoticonList: _.template([
    '<% if(isStatic) {%><span class="warning">You\'re seeing a static list of emoticons, check your api key <a href="<%= optionsUrl %>" target="_blank">here</a>.</span><% } %>',
    '<ul>',
    '  <% _.each(emoticons, function(emoticon) { %>',
    '    <li>',
    '      <a href="#" class="chromed-hipchat-emoticon" title="<%= emoticon.shortcut %>">',
    '        <img src="<%= emoticon.url %>">',
    '        <span>(<%= emoticon.shortcut %>)</span>',
    '      </a>',
    '    </li>',
    '  <% }); %>',
    '</ul>'
  ].join("\n"))
};

