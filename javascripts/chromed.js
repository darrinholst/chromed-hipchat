(function() {
  var chooser = new EmoticonChooser(),

      leftParenPressed = function() {
        chooser.show();
      },

      rightParenPressed = function() {
        chooser.hide();
      },

      spacePressed = function() {
        chooser.hide();
      },

      enterPressed = function() {
        chooser.hide();
      },

      escapePressed = function() {
        chooser.hide();
      },

      handleKeyPress = function(e) {
        switch(e.keyCode) {
          case 13: enterPressed(); break;
          case 32: spacePressed(); break;
          case 40: leftParenPressed(); break;
          case 41: rightParenPressed(); break;
        }
      },

      handleKeyUp = function(e) {
        switch(e.keyCode) {
          case 27: escapePressed(); break;
        }
      },

      initialize = function() {
        $(document).on('keypress', handleKeyPress);
        $(document).on('keyup', handleKeyUp);
      };

  initialize();
})();

