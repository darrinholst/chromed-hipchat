(function() {
  var reloadOptions = function() {
        chrome.extension.sendMessage({command: "getOptions"}, function(response) {
          document.getElementById("auth_token").value = response.auth_token || '';
          document.getElementById("probably_nsfw").checked = response.probably_nsfw;
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
        var options = {
          auth_token: document.getElementById("auth_token").value,
          probably_nsfw: document.getElementById("probably_nsfw").checked
        }

        chrome.extension.sendMessage({command: "setOptions", options: options}, function() {
          showMessage("Options Saved");
        });
      },

      bindSaveButton = function() {
        document.getElementById("save").addEventListener('click', saveOptions, false);
      };

  reloadOptions();
  bindSaveButton();
})();


