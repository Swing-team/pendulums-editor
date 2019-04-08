(function () {
var hr = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var register = function (editor) {
    editor.addCommand('InsertHorizontalRule', function () {
      editor.execCommand('mceInsertContent', false, '<hr />');
    });
  };
  var $_3xrvyx92ju84ron7 = { register: register };

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
  var $_fw16oi93ju84ron8 = { register: register$1 };

  global.add('hr', function (editor) {
    $_3xrvyx92ju84ron7.register(editor);
    $_fw16oi93ju84ron8.register(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
