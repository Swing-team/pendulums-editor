(function () {
var listwithcheckbox = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var global$1 = tinymce.util.Tools.resolve('tinymce.dom.RangeUtils');

  var global$2 = tinymce.util.Tools.resolve('tinymce.dom.TreeWalker');

  var global$3 = tinymce.util.Tools.resolve('tinymce.util.VK');

  var global$4 = tinymce.util.Tools.resolve('tinymce.dom.BookmarkManager');

  var global$5 = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var global$6 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var isTextNode = function (node) {
    return node && node.nodeType === 3;
  };
  var isListNode = function (node) {
    return node && /^(OL|UL|DL)$/.test(node.nodeName);
  };
  var isListItemNode = function (node) {
    return node && /^(LI|DT|DD)$/.test(node.nodeName);
  };
  var isCheckListItemNode = function (node) {
    if (node && isListItemNode(node)) {
      for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
        var child = _a[_i];
        if (child.nodeName === 'INPUT' && child.type === 'checkbox') {
          return true;
        }
      }
    }
    return false;
  };
  var isTableCellNode = function (node) {
    return node && /^(TH|TD)$/.test(node.nodeName);
  };
  var isCheckBox = function (node) {
    return node && node.nodeName === 'INPUT' && node.type === 'checkbox';
  };
  var isBr = function (node) {
    return node && node.nodeName === 'BR';
  };
  var isFirstChild = function (node) {
    return node.parentNode.firstChild === node;
  };
  var isLastChild = function (node) {
    return node.parentNode.lastChild === node;
  };
  var isTextBlock = function (editor, node) {
    return node && !!editor.schema.getTextBlockElements()[node.nodeName];
  };
  var isBlock = function (node, blockElements) {
    return node && node.nodeName in blockElements;
  };
  var isBogusBr = function (dom, node) {
    if (!isBr(node)) {
      return false;
    }
    if (dom.isBlock(node.nextSibling) && !isBr(node.previousSibling)) {
      return true;
    }
    return false;
  };
  var isEmpty = function (dom, elm, keepBookmarks) {
    var empty = dom.isEmpty(elm);
    if (keepBookmarks && dom.select('span[data-mce-type=bookmark]', elm).length > 0) {
      return false;
    }
    return empty;
  };
  var isChildOfBody = function (dom, elm) {
    return dom.isChildOf(elm, dom.getRoot());
  };
  var $_7hkl7watju8gpn8s = {
    isTextNode: isTextNode,
    isListNode: isListNode,
    isListItemNode: isListItemNode,
    isCheckListItemNode: isCheckListItemNode,
    isTableCellNode: isTableCellNode,
    isCheckBox: isCheckBox,
    isBr: isBr,
    isFirstChild: isFirstChild,
    isLastChild: isLastChild,
    isTextBlock: isTextBlock,
    isBlock: isBlock,
    isBogusBr: isBogusBr,
    isEmpty: isEmpty,
    isChildOfBody: isChildOfBody
  };

  var getNormalizedEndPoint = function (container, offset) {
    var node = global$1.getNode(container, offset);
    if ($_7hkl7watju8gpn8s.isListItemNode(container) && $_7hkl7watju8gpn8s.isTextNode(node)) {
      var textNodeOffset = offset >= container.childNodes.length ? node.data.length : 0;
      return {
        container: node,
        offset: textNodeOffset
      };
    }
    return {
      container: container,
      offset: offset
    };
  };
  var normalizeRange = function (rng) {
    var outRng = rng.cloneRange();
    var rangeStart = getNormalizedEndPoint(rng.startContainer, rng.startOffset);
    outRng.setStart(rangeStart.container, rangeStart.offset);
    var rangeEnd = getNormalizedEndPoint(rng.endContainer, rng.endOffset);
    outRng.setEnd(rangeEnd.container, rangeEnd.offset);
    return outRng;
  };
  var $_6j7oggasju8gpn8r = {
    getNormalizedEndPoint: getNormalizedEndPoint,
    normalizeRange: normalizeRange
  };

  var DOM = global$6.DOM;
  var createBookmark = function (rng) {
    var bookmark = {};
    var setupEndPoint = function (start) {
      var offsetNode, container, offset;
      container = rng[start ? 'startContainer' : 'endContainer'];
      offset = rng[start ? 'startOffset' : 'endOffset'];
      if (container.nodeType === 1) {
        offsetNode = DOM.create('span', { 'data-mce-type': 'bookmark' });
        if (container.hasChildNodes()) {
          offset = Math.min(offset, container.childNodes.length - 1);
          if (start) {
            container.insertBefore(offsetNode, container.childNodes[offset]);
          } else {
            DOM.insertAfter(offsetNode, container.childNodes[offset]);
          }
        } else {
          container.appendChild(offsetNode);
        }
        container = offsetNode;
        offset = 0;
      }
      bookmark[start ? 'startContainer' : 'endContainer'] = container;
      bookmark[start ? 'startOffset' : 'endOffset'] = offset;
    };
    setupEndPoint(true);
    if (!rng.collapsed) {
      setupEndPoint();
    }
    return bookmark;
  };
  var resolveBookmark = function (bookmark) {
    function restoreEndPoint(start) {
      var container, offset, node;
      var nodeIndex = function (container) {
        var node = container.parentNode.firstChild, idx = 0;
        while (node) {
          if (node === container) {
            return idx;
          }
          if (node.nodeType !== 1 || node.getAttribute('data-mce-type') !== 'bookmark') {
            idx++;
          }
          node = node.nextSibling;
        }
        return -1;
      };
      container = node = bookmark[start ? 'startContainer' : 'endContainer'];
      offset = bookmark[start ? 'startOffset' : 'endOffset'];
      if (!container) {
        return;
      }
      if (container.nodeType === 1) {
        offset = nodeIndex(container);
        container = container.parentNode;
        DOM.remove(node);
        if (!container.hasChildNodes() && DOM.isBlock(container)) {
          container.appendChild(DOM.create('br'));
        }
      }
      bookmark[start ? 'startContainer' : 'endContainer'] = container;
      bookmark[start ? 'startOffset' : 'endOffset'] = offset;
    }
    restoreEndPoint(true);
    restoreEndPoint();
    var rng = DOM.createRng();
    rng.setStart(bookmark.startContainer, bookmark.startOffset);
    if (bookmark.endContainer) {
      rng.setEnd(bookmark.endContainer, bookmark.endOffset);
    }
    return $_6j7oggasju8gpn8r.normalizeRange(rng);
  };
  var $_81uum2arju8gpn8p = {
    createBookmark: createBookmark,
    resolveBookmark: resolveBookmark
  };

  var DOM$1 = global$6.DOM;
  var normalizeList = function (dom, ul) {
    var sibling;
    var parentNode = ul.parentNode;
    if (parentNode.nodeName === 'LI' && parentNode.firstChild === ul) {
      sibling = parentNode.previousSibling;
      if (sibling && sibling.nodeName === 'LI') {
        sibling.appendChild(ul);
        if ($_7hkl7watju8gpn8s.isEmpty(dom, parentNode)) {
          DOM$1.remove(parentNode);
        }
      } else {
        DOM$1.setStyle(parentNode, 'listStyleType', 'none');
      }
    }
    if ($_7hkl7watju8gpn8s.isListNode(parentNode)) {
      sibling = parentNode.previousSibling;
      if (sibling && sibling.nodeName === 'LI') {
        sibling.appendChild(ul);
      }
    }
  };
  var normalizeLists = function (dom, element) {
    global$5.each(global$5.grep(dom.select('ol,ul', element)), function (ul) {
      normalizeList(dom, ul);
    });
  };
  var $_637qphauju8gpn8w = {
    normalizeList: normalizeList,
    normalizeLists: normalizeLists
  };

  var global$7 = tinymce.util.Tools.resolve('tinymce.dom.DomQuery');

  var getParentList = function (editor) {
    var selectionStart = editor.selection.getStart(true);
    return editor.dom.getParent(selectionStart, 'OL,UL,DL', getClosestListRootElm(editor, selectionStart));
  };
  var isParentListSelected = function (parentList, selectedBlocks) {
    return parentList && selectedBlocks.length === 1 && selectedBlocks[0] === parentList;
  };
  var findSubLists = function (parentList) {
    return global$5.grep(parentList.querySelectorAll('ol,ul,dl'), function (elm) {
      return $_7hkl7watju8gpn8s.isListNode(elm);
    });
  };
  var getSelectedSubLists = function (editor) {
    var parentList = getParentList(editor);
    var selectedBlocks = editor.selection.getSelectedBlocks();
    if (isParentListSelected(parentList, selectedBlocks)) {
      return findSubLists(parentList);
    } else {
      return global$5.grep(selectedBlocks, function (elm) {
        return $_7hkl7watju8gpn8s.isListNode(elm) && parentList !== elm;
      });
    }
  };
  var findParentListItemsNodes = function (editor, elms) {
    var listItemsElms = global$5.map(elms, function (elm) {
      var parentLi = editor.dom.getParent(elm, 'li,dd,dt', getClosestListRootElm(editor, elm));
      return parentLi ? parentLi : elm;
    });
    return global$7.unique(listItemsElms);
  };
  var getSelectedListItems = function (editor) {
    var selectedBlocks = editor.selection.getSelectedBlocks();
    return global$5.grep(findParentListItemsNodes(editor, selectedBlocks), function (block) {
      return $_7hkl7watju8gpn8s.isListItemNode(block);
    });
  };
  var getClosestListRootElm = function (editor, elm) {
    var parentTableCell = editor.dom.getParents(elm, 'TD,TH');
    var root = parentTableCell.length > 0 ? parentTableCell[0] : editor.getBody();
    return root;
  };
  var $_5d4ujavju8gpn8x = {
    getParentList: getParentList,
    getSelectedSubLists: getSelectedSubLists,
    getSelectedListItems: getSelectedListItems,
    getClosestListRootElm: getClosestListRootElm
  };

  var global$8 = tinymce.util.Tools.resolve('tinymce.Env');

  var DOM$2 = global$6.DOM;
  var createNewTextBlock = function (editor, contentNode, blockName) {
    var node, textBlock;
    var fragment = DOM$2.createFragment();
    var hasContentNode;
    var blockElements = editor.schema.getBlockElements();
    if (editor.settings.forced_root_block) {
      blockName = blockName || editor.settings.forced_root_block;
    }
    if (blockName) {
      textBlock = DOM$2.create(blockName);
      if (textBlock.tagName === editor.settings.forced_root_block) {
        DOM$2.setAttribs(textBlock, editor.settings.forced_root_block_attrs);
      }
      for (var _i = 0, _a = contentNode.children; _i < _a.length; _i++) {
        var childNode = _a[_i];
        if ($_7hkl7watju8gpn8s.isCheckBox(childNode)) {
          contentNode.removeChild(childNode);
        }
      }
      if (!$_7hkl7watju8gpn8s.isBlock(contentNode.firstChild, blockElements)) {
        fragment.appendChild(textBlock);
      }
    }
    if (contentNode) {
      while (node = contentNode.firstChild) {
        var nodeName = node.nodeName;
        if (!hasContentNode && (nodeName !== 'SPAN' || node.getAttribute('data-mce-type') !== 'bookmark')) {
          hasContentNode = true;
        }
        if ($_7hkl7watju8gpn8s.isBlock(node, blockElements)) {
          fragment.appendChild(node);
          textBlock = null;
        } else {
          if (blockName) {
            if (!textBlock) {
              textBlock = DOM$2.create(blockName);
              fragment.appendChild(textBlock);
            }
            textBlock.appendChild(node);
          } else {
            fragment.appendChild(node);
          }
        }
      }
    }
    if (!editor.settings.forced_root_block) {
      fragment.appendChild(DOM$2.create('br'));
    } else {
      if (!hasContentNode && (!global$8.ie || global$8.ie > 10)) {
        textBlock.appendChild(DOM$2.create('br', { 'data-mce-bogus': '1' }));
      }
    }
    return fragment;
  };
  var $_5tcotayju8gpn91 = { createNewTextBlock: createNewTextBlock };

  var DOM$3 = global$6.DOM;
  var splitList = function (editor, ul, li, newBlock) {
    var tmpRng, fragment, bookmarks, node;
    var removeAndKeepBookmarks = function (targetNode) {
      global$5.each(bookmarks, function (node) {
        targetNode.parentNode.insertBefore(node, li.parentNode);
      });
      DOM$3.remove(targetNode);
    };
    var findAndRemoveCheckbox = function (root) {
      for (var _i = 0, _a = root.children[0].children; _i < _a.length; _i++) {
        var innerNode = _a[_i];
        if (innerNode.nodeName === 'INPUT') {
          root.children[0].removeChild(innerNode);
        }
      }
    };
    bookmarks = DOM$3.select('span[data-mce-type="bookmark"]', ul);
    newBlock = newBlock || $_5tcotayju8gpn91.createNewTextBlock(editor, li);
    findAndRemoveCheckbox(newBlock);
    tmpRng = DOM$3.createRng();
    tmpRng.setStartAfter(li);
    tmpRng.setEndAfter(ul);
    fragment = tmpRng.extractContents();
    for (node = fragment.firstChild; node; node = node.firstChild) {
      if (node.nodeName === 'LI' && editor.dom.isEmpty(node)) {
        DOM$3.remove(node);
        break;
      }
    }
    if (!editor.dom.isEmpty(fragment)) {
      DOM$3.insertAfter(fragment, ul);
    }
    DOM$3.insertAfter(newBlock, ul);
    if ($_7hkl7watju8gpn8s.isEmpty(editor.dom, li.parentNode)) {
      removeAndKeepBookmarks(li.parentNode);
    }
    DOM$3.remove(li);
    if ($_7hkl7watju8gpn8s.isEmpty(editor.dom, ul)) {
      DOM$3.remove(ul);
    }
  };
  var $_4rs0gpaxju8gpn8z = { splitList: splitList };

  var DOM$4 = global$6.DOM;
  var removeEmptyLi = function (dom, li) {
    if ($_7hkl7watju8gpn8s.isEmpty(dom, li)) {
      DOM$4.remove(li);
    }
  };
  var outdent = function (editor, li) {
    var ul = li.parentNode;
    var ulParent, newBlock;
    if (ul) {
      ulParent = ul.parentNode;
    } else {
      removeEmptyLi(editor.dom, li);
      return true;
    }
    if (ul === editor.getBody()) {
      return true;
    }
    if (li.nodeName === 'DD') {
      DOM$4.rename(li, 'DT');
      return true;
    }
    if ($_7hkl7watju8gpn8s.isFirstChild(li) && $_7hkl7watju8gpn8s.isLastChild(li)) {
      if (ulParent.nodeName === 'LI') {
        DOM$4.insertAfter(li, ulParent);
        removeEmptyLi(editor.dom, ulParent);
        DOM$4.remove(ul);
      } else if ($_7hkl7watju8gpn8s.isListNode(ulParent)) {
        DOM$4.remove(ul, true);
      } else {
        ulParent.insertBefore($_5tcotayju8gpn91.createNewTextBlock(editor, li), ul);
        DOM$4.remove(ul);
      }
      return true;
    } else if ($_7hkl7watju8gpn8s.isFirstChild(li)) {
      if (ulParent.nodeName === 'LI') {
        DOM$4.insertAfter(li, ulParent);
        li.appendChild(ul);
        removeEmptyLi(editor.dom, ulParent);
      } else if ($_7hkl7watju8gpn8s.isListNode(ulParent)) {
        ulParent.insertBefore(li, ul);
      } else {
        ulParent.insertBefore($_5tcotayju8gpn91.createNewTextBlock(editor, li), ul);
        DOM$4.remove(li);
      }
      return true;
    } else if ($_7hkl7watju8gpn8s.isLastChild(li)) {
      if (ulParent.nodeName === 'LI') {
        DOM$4.insertAfter(li, ulParent);
      } else if ($_7hkl7watju8gpn8s.isListNode(ulParent)) {
        DOM$4.insertAfter(li, ul);
      } else {
        DOM$4.insertAfter($_5tcotayju8gpn91.createNewTextBlock(editor, li), ul);
        DOM$4.remove(li);
      }
      return true;
    }
    if (ulParent.nodeName === 'LI') {
      ul = ulParent;
      newBlock = $_5tcotayju8gpn91.createNewTextBlock(editor, li, 'LI');
    } else if ($_7hkl7watju8gpn8s.isListNode(ulParent)) {
      newBlock = $_5tcotayju8gpn91.createNewTextBlock(editor, li, 'LI');
    } else {
      newBlock = $_5tcotayju8gpn91.createNewTextBlock(editor, li);
    }
    $_4rs0gpaxju8gpn8z.splitList(editor, ul, li, newBlock);
    $_637qphauju8gpn8w.normalizeLists(editor.dom, ul.parentNode);
    return true;
  };
  var outdentSelection = function (editor) {
    var listElements = $_5d4ujavju8gpn8x.getSelectedListItems(editor);
    if (listElements.length) {
      var bookmark = $_81uum2arju8gpn8p.createBookmark(editor.selection.getRng());
      var i = void 0, y = void 0;
      var root = $_5d4ujavju8gpn8x.getClosestListRootElm(editor, editor.selection.getStart(true));
      i = listElements.length;
      while (i--) {
        var node = listElements[i].parentNode;
        while (node && node !== root) {
          y = listElements.length;
          while (y--) {
            if (listElements[y] === node) {
              listElements.splice(i, 1);
              break;
            }
          }
          node = node.parentNode;
        }
      }
      for (i = 0; i < listElements.length; i++) {
        if (!outdent(editor, listElements[i]) && i === 0) {
          break;
        }
      }
      editor.selection.setRng($_81uum2arju8gpn8p.resolveBookmark(bookmark));
      editor.nodeChanged();
      return true;
    }
  };
  var $_cp6mifapju8gpn8m = {
    outdent: outdent,
    outdentSelection: outdentSelection
  };

  var updateListStyle = function (dom, el, detail) {
    var type = detail['list-style-type'] ? detail['list-style-type'] : null;
    dom.setStyle(el, 'list-style-type', type);
  };
  var setAttribs = function (elm, attrs) {
    global$5.each(attrs, function (value, key) {
      elm.setAttribute(key, value);
    });
  };
  var updateListAttrs = function (dom, el, detail) {
    setAttribs(el, detail['list-attributes']);
    global$5.each(dom.select('li', el), function (li) {
      setAttribs(li, detail['list-item-attributes']);
    });
  };
  var updateListWithDetails = function (dom, el, detail) {
    updateListStyle(dom, el, detail);
    updateListAttrs(dom, el, detail);
  };
  var removeStyles = function (dom, element, styles) {
    global$5.each(styles, function (style) {
      var _a;
      return dom.setStyle(element, (_a = {}, _a[style] = '', _a));
    });
  };
  var getEndPointNode = function (editor, rng, start, root) {
    var container, offset;
    container = rng[start ? 'startContainer' : 'endContainer'];
    offset = rng[start ? 'startOffset' : 'endOffset'];
    if (container.nodeType === 1) {
      container = container.childNodes[Math.min(offset, container.childNodes.length - 1)] || container;
    }
    if (!start && $_7hkl7watju8gpn8s.isBr(container.nextSibling)) {
      container = container.nextSibling;
    }
    while (container.parentNode !== root) {
      if ($_7hkl7watju8gpn8s.isTextBlock(editor, container)) {
        return container;
      }
      if (/^(TD|TH)$/.test(container.parentNode.nodeName)) {
        return container;
      }
      container = container.parentNode;
    }
    return container;
  };
  var getSelectedTextBlocks = function (editor, rng, root) {
    var textBlocks = [], dom = editor.dom;
    var startNode = getEndPointNode(editor, rng, true, root);
    var endNode = getEndPointNode(editor, rng, false, root);
    var block;
    var siblings = [];
    for (var node = startNode; node; node = node.nextSibling) {
      siblings.push(node);
      if (node === endNode) {
        break;
      }
    }
    global$5.each(siblings, function (node) {
      if ($_7hkl7watju8gpn8s.isTextBlock(editor, node)) {
        textBlocks.push(node);
        block = null;
        return;
      }
      if (dom.isBlock(node) || $_7hkl7watju8gpn8s.isBr(node)) {
        if ($_7hkl7watju8gpn8s.isBr(node)) {
          dom.remove(node);
        }
        block = null;
        return;
      }
      var nextSibling = node.nextSibling;
      if (global$4.isBookmarkNode(node)) {
        if ($_7hkl7watju8gpn8s.isTextBlock(editor, nextSibling) || !nextSibling && node.parentNode === root) {
          block = null;
          return;
        }
      }
      if (!block) {
        block = dom.create('p');
        node.parentNode.insertBefore(block, node);
        textBlocks.push(block);
      }
      block.appendChild(node);
    });
    return textBlocks;
  };
  var hasCompatibleStyle = function (dom, sib, detail) {
    var sibStyle = dom.getStyle(sib, 'list-style-type');
    var detailStyle = detail ? detail['list-style-type'] : '';
    detailStyle = detailStyle === null ? '' : detailStyle;
    return sibStyle === detailStyle;
  };
  var applyList = function (editor, listName, detail) {
    if (detail === void 0) {
      detail = {};
    }
    var rng = editor.selection.getRng(true);
    var bookmark;
    var listItemName = 'LI';
    var root = $_5d4ujavju8gpn8x.getClosestListRootElm(editor, editor.selection.getStart(true));
    var dom = editor.dom;
    if (dom.getContentEditable(editor.selection.getNode()) === 'false') {
      return;
    }
    listName = listName.toUpperCase();
    var mainListName = listName;
    if (listName === 'DL') {
      listItemName = 'DT';
    }
    if (listName === 'ULCHECKBOX') {
      listName = 'UL';
    }
    bookmark = $_81uum2arju8gpn8p.createBookmark(rng);
    global$5.each(getSelectedTextBlocks(editor, rng, root), function (block) {
      var listBlock, sibling;
      sibling = block.previousSibling;
      if (sibling && $_7hkl7watju8gpn8s.isListNode(sibling) && sibling.nodeName === listName && hasCompatibleStyle(dom, sibling, detail)) {
        listBlock = sibling;
        block = dom.rename(block, listItemName);
        sibling.appendChild(block);
      } else {
        listBlock = dom.create(listName);
        if (mainListName === 'ULCHECKBOX') {
          var inputBlock = dom.create('INPUT');
          inputBlock.type = 'checkbox';
          block.insertBefore(inputBlock, block.firstChild);
          for (var _i = 0, _a = block.children; _i < _a.length; _i++) {
            var childNode = _a[_i];
            if ($_7hkl7watju8gpn8s.isBr(childNode)) {
              dom.remove(childNode);
            }
          }
        }
        block.parentNode.insertBefore(listBlock, block);
        listBlock.appendChild(block);
        block = dom.rename(block, listItemName);
      }
      removeStyles(dom, block, [
        'margin',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'margin-top',
        'padding',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'padding-top'
      ]);
      updateListWithDetails(dom, listBlock, detail);
      mergeWithAdjacentLists(editor.dom, listBlock);
    });
    editor.selection.setRng($_81uum2arju8gpn8p.resolveBookmark(bookmark));
  };
  var removeList = function (editor) {
    var bookmark = $_81uum2arju8gpn8p.createBookmark(editor.selection.getRng(true));
    var root = $_5d4ujavju8gpn8x.getClosestListRootElm(editor, editor.selection.getStart(true));
    var listItems = $_5d4ujavju8gpn8x.getSelectedListItems(editor);
    var emptyListItems = global$5.grep(listItems, function (li) {
      return editor.dom.isEmpty(li);
    });
    listItems = global$5.grep(listItems, function (li) {
      return !editor.dom.isEmpty(li);
    });
    global$5.each(emptyListItems, function (li) {
      if ($_7hkl7watju8gpn8s.isEmpty(editor.dom, li)) {
        $_cp6mifapju8gpn8m.outdent(editor, li);
        return;
      }
    });
    global$5.each(listItems, function (li) {
      var node, rootList;
      if (li.parentNode === editor.getBody()) {
        return;
      }
      for (node = li; node && node !== root; node = node.parentNode) {
        if ($_7hkl7watju8gpn8s.isListNode(node)) {
          rootList = node;
        }
      }
      $_4rs0gpaxju8gpn8z.splitList(editor, rootList, li);
      $_637qphauju8gpn8w.normalizeLists(editor.dom, rootList.parentNode);
    });
    editor.selection.setRng($_81uum2arju8gpn8p.resolveBookmark(bookmark));
  };
  var isValidLists = function (list1, list2) {
    return list1 && list2 && $_7hkl7watju8gpn8s.isListNode(list1) && list1.nodeName === list2.nodeName;
  };
  var hasSameListStyle = function (dom, list1, list2) {
    var targetStyle = dom.getStyle(list1, 'list-style-type', true);
    var style = dom.getStyle(list2, 'list-style-type', true);
    return targetStyle === style;
  };
  var hasSameClasses = function (elm1, elm2) {
    return elm1.className === elm2.className;
  };
  var shouldMerge = function (dom, list1, list2) {
    return isValidLists(list1, list2) && hasSameListStyle(dom, list1, list2) && hasSameClasses(list1, list2);
  };
  var mergeWithAdjacentLists = function (dom, listBlock) {
    var sibling, node;
    sibling = listBlock.nextSibling;
    if (shouldMerge(dom, listBlock, sibling)) {
      while (node = sibling.firstChild) {
        listBlock.appendChild(node);
      }
      dom.remove(sibling);
    }
    sibling = listBlock.previousSibling;
    if (shouldMerge(dom, listBlock, sibling)) {
      while (node = sibling.lastChild) {
        listBlock.insertBefore(node, listBlock.firstChild);
      }
      dom.remove(sibling);
    }
  };
  var updateList = function (dom, list, listName, detail) {
    if (list.nodeName !== listName) {
      var newList = dom.rename(list, listName);
      updateListWithDetails(dom, newList, detail);
    } else {
      updateListWithDetails(dom, list, detail);
    }
  };
  var toggleMultipleLists = function (editor, parentList, lists, listName, detail) {
    if ((parentList.nodeName === listName || listName === 'ULCHECKBOX' && parentList.nodeName === 'UL') && !hasListStyleDetail(detail)) {
      removeList(editor);
    } else {
      var bookmark = $_81uum2arju8gpn8p.createBookmark(editor.selection.getRng(true));
      global$5.each([parentList].concat(lists), function (elm) {
        updateList(editor.dom, elm, listName, detail);
      });
      editor.selection.setRng($_81uum2arju8gpn8p.resolveBookmark(bookmark));
    }
  };
  var hasListStyleDetail = function (detail) {
    return 'list-style-type' in detail;
  };
  var toggleSingleList = function (editor, parentList, listName, detail) {
    if (parentList === editor.getBody()) {
      return;
    }
    if (parentList) {
      if ((parentList.nodeName === listName || listName === 'ULCHECKBOX' && parentList.nodeName === 'UL') && !hasListStyleDetail(detail)) {
        removeList(editor);
      } else {
        var bookmark = $_81uum2arju8gpn8p.createBookmark(editor.selection.getRng(true));
        updateListWithDetails(editor.dom, parentList, detail);
        mergeWithAdjacentLists(editor.dom, editor.dom.rename(parentList, listName));
        editor.selection.setRng($_81uum2arju8gpn8p.resolveBookmark(bookmark));
      }
    } else {
      applyList(editor, listName, detail);
    }
  };
  var toggleList = function (editor, listName, detail) {
    var parentList = $_5d4ujavju8gpn8x.getParentList(editor);
    var selectedSubLists = $_5d4ujavju8gpn8x.getSelectedSubLists(editor);
    detail = detail ? detail : {};
    if (parentList && selectedSubLists.length > 0) {
      toggleMultipleLists(editor, parentList, selectedSubLists, listName, detail);
    } else {
      toggleSingleList(editor, parentList, listName, detail);
    }
  };
  var $_736vdtamju8gpn8f = {
    toggleList: toggleList,
    removeList: removeList,
    mergeWithAdjacentLists: mergeWithAdjacentLists
  };

  var findNextCaretContainer = function (editor, rng, isForward, root) {
    var node = rng.startContainer;
    var offset = rng.startOffset;
    var nonEmptyBlocks, walker;
    if (node.nodeType === 3 && (isForward ? offset < node.data.length : offset > 0)) {
      return node;
    }
    nonEmptyBlocks = editor.schema.getNonEmptyElements();
    if (node.nodeType === 1) {
      node = global$1.getNode(node, offset);
    }
    walker = new global$2(node, root);
    if (isForward) {
      if ($_7hkl7watju8gpn8s.isBogusBr(editor.dom, node)) {
        walker.next();
      }
    }
    while (node = walker[isForward ? 'next' : 'prev2']()) {
      if (node.nodeName === 'LI' && !node.hasChildNodes()) {
        return node;
      }
      if (isForward && $_7hkl7watju8gpn8s.isCheckListItemNode(node) && $_7hkl7watju8gpn8s.isCheckBox(node.lastChild)) {
        return node;
      }
      if (nonEmptyBlocks[node.nodeName] && !$_7hkl7watju8gpn8s.isCheckBox(node)) {
        return node;
      }
      if (node.nodeType === 3 && node.data.length > 0) {
        return node;
      }
    }
  };
  var hasOnlyOneBlockChild = function (dom, elm) {
    var childNodes = elm.childNodes;
    return childNodes.length === 1 && !$_7hkl7watju8gpn8s.isListNode(childNodes[0]) && dom.isBlock(childNodes[0]);
  };
  var unwrapSingleBlockChild = function (dom, elm) {
    if (hasOnlyOneBlockChild(dom, elm)) {
      dom.remove(elm.firstChild, true);
    }
  };
  var moveChildren = function (dom, fromElm, toElm) {
    var node, targetElm;
    targetElm = hasOnlyOneBlockChild(dom, toElm) ? toElm.firstChild : toElm;
    unwrapSingleBlockChild(dom, fromElm);
    if (!$_7hkl7watju8gpn8s.isEmpty(dom, fromElm, true)) {
      while (node = fromElm.firstChild) {
        targetElm.appendChild(node);
      }
    }
  };
  var mergeLiElements = function (dom, fromElm, toElm) {
    var node, listNode;
    var ul = fromElm.parentNode;
    if (!$_7hkl7watju8gpn8s.isChildOfBody(dom, fromElm) || !$_7hkl7watju8gpn8s.isChildOfBody(dom, toElm)) {
      return;
    }
    if ($_7hkl7watju8gpn8s.isListNode(toElm.lastChild)) {
      listNode = toElm.lastChild;
    }
    if (ul === toElm.lastChild) {
      if ($_7hkl7watju8gpn8s.isBr(ul.previousSibling)) {
        dom.remove(ul.previousSibling);
      }
    }
    node = toElm.lastChild;
    if (node && $_7hkl7watju8gpn8s.isBr(node) && fromElm.hasChildNodes()) {
      dom.remove(node);
    }
    if (fromElm.hasChildNodes() && $_7hkl7watju8gpn8s.isCheckListItemNode(fromElm)) {
      for (var _i = 0, _a = fromElm.children; _i < _a.length; _i++) {
        var childNode = _a[_i];
        if ($_7hkl7watju8gpn8s.isCheckBox(childNode)) {
          dom.remove(childNode);
        }
      }
    }
    if ($_7hkl7watju8gpn8s.isEmpty(dom, toElm, true)) {
      dom.$(toElm).empty();
    }
    moveChildren(dom, fromElm, toElm);
    if (listNode) {
      toElm.appendChild(listNode);
    }
    dom.remove(fromElm);
    if ($_7hkl7watju8gpn8s.isEmpty(dom, ul) && ul !== dom.getRoot()) {
      dom.remove(ul);
    }
  };
  var mergeIntoEmptyLi = function (editor, fromLi, toLi) {
    editor.dom.$(toLi).empty();
    mergeLiElements(editor.dom, fromLi, toLi);
    editor.selection.setCursorLocation(toLi);
  };
  var mergeForward = function (editor, rng, fromLi, toLi) {
    var dom = editor.dom;
    if (dom.isEmpty(toLi)) {
      mergeIntoEmptyLi(editor, fromLi, toLi);
    } else {
      var bookmark = $_81uum2arju8gpn8p.createBookmark(rng);
      mergeLiElements(dom, fromLi, toLi);
      editor.selection.setRng($_81uum2arju8gpn8p.resolveBookmark(bookmark));
    }
  };
  var mergeBackward = function (editor, rng, fromLi, toLi) {
    var bookmark = $_81uum2arju8gpn8p.createBookmark(rng);
    mergeLiElements(editor.dom, fromLi, toLi);
    var resolvedBookmark = $_81uum2arju8gpn8p.resolveBookmark(bookmark);
    editor.selection.setRng(resolvedBookmark);
  };
  var backspaceDeleteFromListToListCaret = function (editor, isForward) {
    var dom = editor.dom, selection = editor.selection;
    var selectionStartElm = selection.getStart();
    var root = $_5d4ujavju8gpn8x.getClosestListRootElm(editor, selectionStartElm);
    var li = dom.getParent(selection.getStart(), 'LI', root);
    var ul, rng, otherLi;
    if (li) {
      ul = li.parentNode;
      if (ul === editor.getBody() && $_7hkl7watju8gpn8s.isEmpty(dom, ul)) {
        return true;
      }
      rng = $_6j7oggasju8gpn8r.normalizeRange(selection.getRng(true));
      otherLi = dom.getParent(findNextCaretContainer(editor, rng, isForward, root), 'LI', root);
      if (otherLi && otherLi !== li) {
        if (isForward) {
          mergeForward(editor, rng, otherLi, li);
        } else {
          mergeBackward(editor, rng, li, otherLi);
        }
        return true;
      } else if (!otherLi) {
        if (!isForward) {
          $_736vdtamju8gpn8f.removeList(editor);
          return true;
        }
      }
    }
    return false;
  };
  var removeBlock = function (dom, block, root) {
    var parentBlock = dom.getParent(block.parentNode, dom.isBlock, root);
    dom.remove(block);
    if (parentBlock && dom.isEmpty(parentBlock)) {
      dom.remove(parentBlock);
    }
  };
  var backspaceDeleteIntoListCaret = function (editor, isForward) {
    var dom = editor.dom;
    var selectionStartElm = editor.selection.getStart();
    var root = $_5d4ujavju8gpn8x.getClosestListRootElm(editor, selectionStartElm);
    var block = dom.getParent(selectionStartElm, dom.isBlock, root);
    if (block && dom.isEmpty(block)) {
      var rng = $_6j7oggasju8gpn8r.normalizeRange(editor.selection.getRng(true));
      var otherLi_1 = dom.getParent(findNextCaretContainer(editor, rng, isForward, root), 'LI', root);
      if (otherLi_1) {
        editor.undoManager.transact(function () {
          removeBlock(dom, block, root);
          $_736vdtamju8gpn8f.mergeWithAdjacentLists(dom, otherLi_1.parentNode);
          editor.selection.select(otherLi_1, true);
          editor.selection.collapse(isForward);
        });
        return true;
      }
    }
    return false;
  };
  var backspaceDeleteCaret = function (editor, isForward) {
    return backspaceDeleteFromListToListCaret(editor, isForward) || backspaceDeleteIntoListCaret(editor, isForward);
  };
  var backspaceDeleteRange = function (editor) {
    var selectionStartElm = editor.selection.getStart();
    var root = $_5d4ujavju8gpn8x.getClosestListRootElm(editor, selectionStartElm);
    var startListParent = editor.dom.getParent(selectionStartElm, 'LI,DT,DD', root);
    if (startListParent || $_5d4ujavju8gpn8x.getSelectedListItems(editor).length > 0) {
      editor.undoManager.transact(function () {
        editor.execCommand('Delete');
        $_637qphauju8gpn8w.normalizeLists(editor.dom, editor.getBody());
      });
      return true;
    }
    return false;
  };
  var backspaceDelete = function (editor, isForward) {
    return editor.selection.isCollapsed() ? backspaceDeleteCaret(editor, isForward) : backspaceDeleteRange(editor);
  };
  var setup = function (editor) {
    editor.on('keydown', function (e) {
      if (e.keyCode === global$3.BACKSPACE) {
        if (backspaceDelete(editor, false)) {
          e.preventDefault();
        }
      } else if (e.keyCode === global$3.DELETE) {
        if (backspaceDelete(editor, true)) {
          e.preventDefault();
        }
      }
    });
  };
  var $_bbghjxaiju8gpn85 = {
    setup: setup,
    backspaceDelete: backspaceDelete
  };

  var get = function (editor) {
    return {
      backspaceDelete: function (isForward) {
        $_bbghjxaiju8gpn85.backspaceDelete(editor, isForward);
      }
    };
  };
  var $_b0djoxahju8gpn83 = { get: get };

  var DOM$5 = global$6.DOM;
  var mergeLists = function (from, to) {
    var node;
    if ($_7hkl7watju8gpn8s.isListNode(from)) {
      while (node = from.firstChild) {
        to.appendChild(node);
      }
      DOM$5.remove(from);
    }
  };
  var indent = function (li) {
    var sibling, newList, listStyle;
    if (li.nodeName === 'DT') {
      DOM$5.rename(li, 'DD');
      return true;
    }
    sibling = li.previousSibling;
    if (sibling && $_7hkl7watju8gpn8s.isListNode(sibling)) {
      sibling.appendChild(li);
      return true;
    }
    if (sibling && sibling.nodeName === 'LI' && $_7hkl7watju8gpn8s.isListNode(sibling.lastChild)) {
      sibling.lastChild.appendChild(li);
      mergeLists(li.lastChild, sibling.lastChild);
      return true;
    }
    sibling = li.nextSibling;
    if (sibling && $_7hkl7watju8gpn8s.isListNode(sibling)) {
      sibling.insertBefore(li, sibling.firstChild);
      return true;
    }
    sibling = li.previousSibling;
    if (sibling && sibling.nodeName === 'LI') {
      newList = DOM$5.create(li.parentNode.nodeName);
      listStyle = DOM$5.getStyle(li.parentNode, 'listStyleType');
      if (listStyle) {
        DOM$5.setStyle(newList, 'listStyleType', listStyle);
      }
      sibling.appendChild(newList);
      newList.appendChild(li);
      mergeLists(li.lastChild, newList);
      return true;
    }
    return false;
  };
  var indentSelection = function (editor) {
    var listElements = $_5d4ujavju8gpn8x.getSelectedListItems(editor);
    if (listElements.length) {
      var bookmark = $_81uum2arju8gpn8p.createBookmark(editor.selection.getRng(true));
      for (var i = 0; i < listElements.length; i++) {
        if (!indent(listElements[i]) && i === 0) {
          break;
        }
      }
      editor.selection.setRng($_81uum2arju8gpn8p.resolveBookmark(bookmark));
      editor.nodeChanged();
      return true;
    }
  };
  var $_bwo2nfb1ju8gpn94 = { indentSelection: indentSelection };

  var queryListCommandState = function (editor, listName) {
    return function () {
      var parentList = editor.dom.getParent(editor.selection.getStart(), 'UL,OL,DL, ULCHECKBOX');
      return parentList && parentList.nodeName === listName;
    };
  };
  var register = function (editor) {
    editor.on('BeforeExecCommand', function (e) {
      var cmd = e.command.toLowerCase();
      var isHandled;
      if (cmd === 'indent') {
        if ($_bwo2nfb1ju8gpn94.indentSelection(editor)) {
          isHandled = true;
        }
      } else if (cmd === 'outdent') {
        if ($_cp6mifapju8gpn8m.outdentSelection(editor)) {
          isHandled = true;
        }
      }
      if (isHandled) {
        editor.fire('ExecCommand', { command: e.command });
        e.preventDefault();
        return true;
      }
    });
    editor.addCommand('InsertUnorderedList', function (ui, detail) {
      $_736vdtamju8gpn8f.toggleList(editor, 'UL', detail);
    });
    editor.addCommand('InsertCheckbox', function (ui, detail) {
      $_736vdtamju8gpn8f.toggleList(editor, 'ULCHECKBOX', detail);
    });
    editor.addCommand('InsertOrderedList', function (ui, detail) {
      $_736vdtamju8gpn8f.toggleList(editor, 'OL', detail);
    });
    editor.addCommand('InsertDefinitionList', function (ui, detail) {
      $_736vdtamju8gpn8f.toggleList(editor, 'DL', detail);
    });
    editor.addQueryStateHandler('InsertUnorderedList', queryListCommandState(editor, 'UL'));
    editor.addQueryStateHandler('InsertOrderedList', queryListCommandState(editor, 'OL'));
    editor.addQueryStateHandler('InsertDefinitionList', queryListCommandState(editor, 'DL'));
    editor.addQueryStateHandler('InsertCheckbox', queryListCommandState(editor, 'ULCHECKBOX'));
  };
  var $_65ssc1b0ju8gpn93 = { register: register };

  var shouldIndentOnTab = function (editor) {
    return editor.getParam('lists_indent_on_tab', true);
  };
  var $_xk2byb3ju8gpn97 = { shouldIndentOnTab: shouldIndentOnTab };

  var setupTabKey = function (editor) {
    editor.on('keydown', function (e) {
      if (e.keyCode !== global$3.TAB || global$3.metaKeyPressed(e)) {
        return;
      }
      if (editor.dom.getParent(editor.selection.getStart(), 'LI,DT,DD')) {
        e.preventDefault();
        if (e.shiftKey) {
          $_cp6mifapju8gpn8m.outdentSelection(editor);
        } else {
          $_bwo2nfb1ju8gpn94.indentSelection(editor);
        }
      }
    });
  };
  var setup$1 = function (editor) {
    if ($_xk2byb3ju8gpn97.shouldIndentOnTab(editor)) {
      setupTabKey(editor);
    }
    $_bbghjxaiju8gpn85.setup(editor);
  };
  var $_dtlzjcb2ju8gpn96 = { setup: setup$1 };

  var findIndex = function (list, predicate) {
    for (var index = 0; index < list.length; index++) {
      var element = list[index];
      if (predicate(element)) {
        return index;
      }
    }
    return -1;
  };
  var listState = function (editor, listName) {
    return function (e) {
      var ctrl = e.control;
      editor.on('NodeChange', function (e) {
        var tableCellIndex = findIndex(e.parents, $_7hkl7watju8gpn8s.isTableCellNode);
        var parents = tableCellIndex !== -1 ? e.parents.slice(0, tableCellIndex) : e.parents;
        var lists = global$5.grep(parents, $_7hkl7watju8gpn8s.isListNode);
        var hasInputChild = false;
        if (lists.length > 0 && lists[0].children[0].children.length > 0 && lists[0].children[0].children[0].nodeName === 'INPUT') {
          hasInputChild = true;
        }
        if (listName === 'ULCHECKBOX') {
          ctrl.active(lists.length > 0 && (lists[0].nodeName === 'UL' && hasInputChild));
        } else {
          ctrl.active(lists.length > 0 && (lists[0].nodeName === listName && !hasInputChild));
        }
      });
    };
  };
  var indentPostRender = function (editor) {
    return function (e) {
      var ctrl = e.control;
      editor.on('nodechange', function () {
        var listItemBlocks = $_5d4ujavju8gpn8x.getSelectedListItems(editor);
        var disable = listItemBlocks.length > 0 && $_7hkl7watju8gpn8s.isFirstChild(listItemBlocks[0]);
        ctrl.disabled(disable);
      });
    };
  };
  var register$1 = function (editor) {
    var hasPlugin = function (editor, plugin) {
      var plugins = editor.settings.plugins ? editor.settings.plugins : '';
      return global$5.inArray(plugins.split(/[ ,]/), plugin) !== -1;
    };
    if (!hasPlugin(editor, 'advlist')) {
      editor.addButton('numlist', {
        active: false,
        title: 'Numbered list',
        cmd: 'InsertOrderedList',
        onPostRender: listState(editor, 'OL')
      });
      editor.addButton('bullist', {
        active: false,
        title: 'Bullet list',
        cmd: 'InsertUnorderedList',
        onPostRender: listState(editor, 'UL')
      });
      editor.addButton('checkbox', {
        active: false,
        text: 'checkbox',
        onPostRender: listState(editor, 'ULCHECKBOX'),
        cmd: 'InsertCheckbox'
      });
    }
    editor.addButton('indent', {
      icon: 'indent',
      title: 'Increase indent',
      cmd: 'Indent',
      onPostRender: indentPostRender(editor)
    });
  };
  var $_fw2e8jb4ju8gpn98 = { register: register$1 };

  global.add('listwithcheckbox', function (editor) {
    $_dtlzjcb2ju8gpn96.setup(editor);
    $_fw2e8jb4ju8gpn98.register(editor);
    $_65ssc1b0ju8gpn93.register(editor);
    editor.on('selectionchange', function (e) {
      var root = editor.selection.getNode();
      var rng = editor.selection.getRng();
      if (root.nodeName === 'LI' && root.children.length > 0 && root.firstChild.nodeName === 'INPUT' && root.firstChild.type === 'checkbox' && rng.startOffset === 0 && editor.selection.isCollapsed()) {
        var newRng = rng.cloneRange();
        newRng.setStartAfter(root.firstChild);
        editor.selection.setRng(newRng);
      }
    });
    return $_b0djoxahju8gpn83.get(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
