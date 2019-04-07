(function () {
var hr = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var register = function (editor) {
    editor.addCommand('InsertHorizontalRule', function () {
      editor.execCommand('mceInsertContent', false, '<hr />');
    });
  };
  var $_dnegzf92jnsufoxr = { register: register };

  var register$1 = function (editor) {
    editor.addButton('hr', {
      icon: 'hr',
      tooltip: 'Horizontal line',
      cmd: 'InsertHorizontalRule'
    });
    editor.addMenuItem('hr', {
      icon: 'hr',
      text: 'Horizontal line',
      cmd: 'InsertHorizontalRule',
      context: 'insert'
    });
  };
  var $_fvulgu93jnsufoxs = { register: register$1 };

  global.add('hr', function (editor) {
    $_dnegzf92jnsufoxr.register(editor);
    $_fvulgu93jnsufoxs.register(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
