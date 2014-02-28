(function() {
  var reloadOptions = function() {
        chrome.extension.sendMessage({command: "getOption", name: "auth_token"}, function(response) {
          document.getElementById("auth_token").value = response;
        });
      },

      showMessage = function(text) {
        var message = document.getElementById("message");
        message.innerHTML = text;

        setTimeout(function() {
          message.innerHTML = "";
        }, 2000);
      },

      saveOptions = function() {
        var authToken = document.getElementById("auth_token").value;

        chrome.extension.sendMessage({command: "setOption", name: "auth_token", value: authToken}, function() {
          showMessage("Options Saved");
        });
      },

      bindSaveButton = function() {
        document.getElementById("save").addEventListener('click', saveOptions, false);
      };

  reloadOptions();
  bindSaveButton();
})();


