chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.command === 'getOptions') {
    sendResponse(JSON.parse(localStorage['options'] || "{}"));
  }

  if(request.command === 'setOptions') {
    localStorage['options'] = JSON.stringify(request.options);
    sendResponse();
  }
})

