chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.command == "getOption") {
    sendResponse(localStorage[request.name]);
  }

  if(request.command == "setOption") {
    localStorage[request.name] = request.value;
    sendResponse();
  }
})

