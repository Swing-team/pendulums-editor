(function () {
var hr = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var register = function (editor) {
    editor.addCommand('InsertHorizontalRule', function () {
      editor.execCommand('mceInsertContent', false, '<hr />');
    });
  };
  var $_6ce8up92jubz6nyh = { register: register };

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
  var $_fxz77z93jubz6nyi = { register: register$1 };

  global.add('hr', function (editor) {
    $_6ce8up92jubz6nyh.register(editor);
    $_fxz77z93jubz6nyi.register(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
