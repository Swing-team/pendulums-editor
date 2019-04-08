(function () {
var hr = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var register = function (editor) {
    editor.addCommand('InsertHorizontalRule', function () {
      editor.execCommand('mceInsertContent', false, '<hr />');
    });
  };
  var $_8il24a92ju8gpn1f = { register: register };

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
  var $_5i1pwe93ju8gpn1g = { register: register$1 };

  global.add('hr', function (editor) {
    $_8il24a92ju8gpn1f.register(editor);
    $_5i1pwe93ju8gpn1g.register(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
