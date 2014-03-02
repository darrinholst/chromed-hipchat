chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.command === 'getOptions') {
    var options = JSON.parse(localStorage['options'] || '{}');
    options.optionsPage = chrome.extension.getURL('html/options.html');
    sendResponse(options);
  }

  if(request.command === 'setOptions') {
    localStorage['options'] = JSON.stringify(request.options);
    sendResponse();
  }
})

if(!localStorage['installed_at']) {
  chrome.tabs.create({url: 'html/options.html'});
  localStorage['installed_at'] = new Date().getTime();
}

