import { __extends, __assign } from 'tslib';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { Output, EventEmitter, Component, Input, ElementRef, forwardRef, NgZone, Inject, PLATFORM_ID, NgModule } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Events = /** @class */ (function () {
    function Events() {
        this.onBeforePaste = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onContextMenu = new EventEmitter();
        this.onCopy = new EventEmitter();
        this.onCut = new EventEmitter();
        this.onDblclick = new EventEmitter();
        this.onDrag = new EventEmitter();
        this.onDragDrop = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDragGesture = new EventEmitter();
        this.onDragOver = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onFocusIn = new EventEmitter();
        this.onFocusOut = new EventEmitter();
        this.onKeyDown = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onKeyUp = new EventEmitter();
        this.onMouseDown = new EventEmitter();
        this.onMouseEnter = new EventEmitter();
        this.onMouseLeave = new EventEmitter();
        this.onMouseMove = new EventEmitter();
        this.onMouseOut = new EventEmitter();
        this.onMouseOver = new EventEmitter();
        this.onMouseUp = new EventEmitter();
        this.onPaste = new EventEmitter();
        this.onSelectionChange = new EventEmitter();
        this.onActivate = new EventEmitter();
        this.onAddUndo = new EventEmitter();
        this.onBeforeAddUndo = new EventEmitter();
        this.onBeforeExecCommand = new EventEmitter();
        this.onBeforeGetContent = new EventEmitter();
        this.onBeforeRenderUI = new EventEmitter();
        this.onBeforeSetContent = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onClearUndos = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.onDirty = new EventEmitter();
        this.onExecCommand = new EventEmitter();
        this.onGetContent = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onInit = new EventEmitter();
        this.onLoadContent = new EventEmitter();
        this.onNodeChange = new EventEmitter();
        this.onPostProcess = new EventEmitter();
        this.onPostRender = new EventEmitter();
        this.onPreInit = new EventEmitter();
        this.onPreProcess = new EventEmitter();
        this.onProgressState = new EventEmitter();
        this.onRedo = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onReset = new EventEmitter();
        this.onSaveContent = new EventEmitter();
        this.onSetAttrib = new EventEmitter();
        this.onObjectResizeStart = new EventEmitter();
        this.onObjectResized = new EventEmitter();
        this.onObjectSelected = new EventEmitter();
        this.onSetContent = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onSubmit = new EventEmitter();
        this.onUndo = new EventEmitter();
        this.onVisualAid = new EventEmitter();
    }
    Events.propDecorators = {
        onBeforePaste: [{ type: Output }],
        onBlur: [{ type: Output }],
        onClick: [{ type: Output }],
        onContextMenu: [{ type: Output }],
        onCopy: [{ type: Output }],
        onCut: [{ type: Output }],
        onDblclick: [{ type: Output }],
        onDrag: [{ type: Output }],
        onDragDrop: [{ type: Output }],
        onDragEnd: [{ type: Output }],
        onDragGesture: [{ type: Output }],
        onDragOver: [{ type: Output }],
        onDrop: [{ type: Output }],
        onFocus: [{ type: Output }],
        onFocusIn: [{ type: Output }],
        onFocusOut: [{ type: Output }],
        onKeyDown: [{ type: Output }],
        onKeyPress: [{ type: Output }],
        onKeyUp: [{ type: Output }],
        onMouseDown: [{ type: Output }],
        onMouseEnter: [{ type: Output }],
        onMouseLeave: [{ type: Output }],
        onMouseMove: [{ type: Output }],
        onMouseOut: [{ type: Output }],
        onMouseOver: [{ type: Output }],
        onMouseUp: [{ type: Output }],
        onPaste: [{ type: Output }],
        onSelectionChange: [{ type: Output }],
        onActivate: [{ type: Output }],
        onAddUndo: [{ type: Output }],
        onBeforeAddUndo: [{ type: Output }],
        onBeforeExecCommand: [{ type: Output }],
        onBeforeGetContent: [{ type: Output }],
        onBeforeRenderUI: [{ type: Output }],
        onBeforeSetContent: [{ type: Output }],
        onChange: [{ type: Output }],
        onClearUndos: [{ type: Output }],
        onDeactivate: [{ type: Output }],
        onDirty: [{ type: Output }],
        onExecCommand: [{ type: Output }],
        onGetContent: [{ type: Output }],
        onHide: [{ type: Output }],
        onInit: [{ type: Output }],
        onLoadContent: [{ type: Output }],
        onNodeChange: [{ type: Output }],
        onPostProcess: [{ type: Output }],
        onPostRender: [{ type: Output }],
        onPreInit: [{ type: Output }],
        onPreProcess: [{ type: Output }],
        onProgressState: [{ type: Output }],
        onRedo: [{ type: Output }],
        onRemove: [{ type: Output }],
        onReset: [{ type: Output }],
        onSaveContent: [{ type: Output }],
        onSetAttrib: [{ type: Output }],
        onObjectResizeStart: [{ type: Output }],
        onObjectResized: [{ type: Output }],
        onObjectSelected: [{ type: Output }],
        onSetContent: [{ type: Output }],
        onShow: [{ type: Output }],
        onSubmit: [{ type: Output }],
        onUndo: [{ type: Output }],
        onVisualAid: [{ type: Output }]
    };
    return Events;
}());
/** @type {?} */
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var bindHandlers = function (ctx, editor, initEvent) {
    validEvents.forEach(function (eventName) {
        /** @type {?} */
        var eventEmitter = ctx[eventName];
        if (eventEmitter.observers.length > 0) {
            if (eventName === 'onInit') {
                ctx.ngZone.run(function () { return eventEmitter.emit({ event: initEvent, editor: editor }); });
            }
            else {
                editor.on(eventName.substring(2), ctx.ngZone.run(function () { return function (event) { return eventEmitter.emit({ event: event, editor: editor }); }; }));
            }
        }
    });
};
/** @type {?} */
var unique = 0;
/** @type {?} */
var uuid = function (prefix) {
    /** @type {?} */
    var date = new Date();
    /** @type {?} */
    var time = date.getTime();
    /** @type {?} */
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
/** @type {?} */
var isTextarea = function (element) {
    return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
};
/** @type {?} */
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
/** @type {?} */
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var injectScriptTag = function (scriptId, doc, url, callback) {
    /** @type {?} */
    var scriptTag = doc.createElement('script');
    scriptTag.type = 'application/javascript';
    scriptTag.id = scriptId;
    scriptTag.addEventListener('load', callback);
    scriptTag.src = url;
    if (doc.head) {
        doc.head.appendChild(scriptTag);
    }
};
/** @type {?} */
var create = function () {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
/** @type {?} */
var load = function (state, doc, url, callback) {
    if (state.scriptLoaded) {
        callback();
    }
    else {
        state.listeners.push(callback);
        if (!doc.getElementById(state.scriptId)) {
            injectScriptTag(state.scriptId, doc, url, function () {
                state.listeners.forEach(function (fn) { return fn(); });
                state.scriptLoaded = true;
            });
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/** @type {?} */
var getTinymce = function () {
    /** @type {?} */
    var w = typeof window !== 'undefined' ? ((/** @type {?} */ (window))) : undefined;
    return w && w.tinymce ? w.tinymce : null;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var scriptState = create();
/** @type {?} */
var EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return EditorComponent; }),
    multi: true
};
var EditorComponent = /** @class */ (function (_super) {
    __extends(EditorComponent, _super);
    function EditorComponent(elementRef, ngZone, platformId) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.element = undefined;
        _this.cloudChannel = '5';
        _this.apiKey = '';
        _this.id = '';
        _this.toolbar = null;
        _this.onTouchedCallback = function () { };
        _this.onChangeCallback = function (x) { };
        _this.elementRef = elementRef;
        _this.ngZone = ngZone;
        _this.initialise = _this.initialise.bind(_this);
        return _this;
    }
    Object.defineProperty(EditorComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._disabled = val;
            if (this.editor && this.editor.initialized) {
                this.editor.setMode(val ? 'readonly' : 'design');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    EditorComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.initialValue = value || this.initialValue;
        value = value || '';
        if (this.editor && this.editor.initialized && typeof value === 'string') {
            this.editor.setContent(value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EditorComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EditorComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    EditorComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (this.editor) {
            this.editor.setMode(isDisabled ? 'readonly' : 'design');
        }
        else if (isDisabled) {
            this.init = __assign({}, this.init, { readonly: true });
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.id = this.id || uuid('tiny-angular');
            this.inline =
                typeof this.inline !== 'undefined' ? (typeof this.inline === 'boolean' ? this.inline : true) : this.init && this.init.inline;
            this.createElement();
            if (getTinymce() !== null) {
                this.initialise();
            }
            else if (this.element && this.element.ownerDocument) {
                /** @type {?} */
                var doc = this.element.ownerDocument;
                /** @type {?} */
                var channel = this.cloudChannel;
                /** @type {?} */
                var apiKey = this.apiKey;
                load(scriptState, doc, "https://cloud.tinymce.com/" + channel + "/tinymce.min.js?apiKey=" + apiKey, this.initialise);
            }
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (getTinymce() !== null) {
            getTinymce().remove(this.editor);
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.createElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
        this.element = document.createElement(this.inline ? tagName : 'textarea');
        if (this.element) {
            this.element.id = this.id;
            if (isTextarea(this.element)) {
                this.element.style.visibility = 'hidden';
            }
            this.elementRef.nativeElement.appendChild(this.element);
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.initialise = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var finalInit = __assign({}, this.init, { target: this.element, inline: this.inline, readonly: this.disabled, plugins: mergePlugins(this.init && this.init.plugins, this.plugins), toolbar: this.toolbar || (this.init && this.init.toolbar), setup: function (editor) {
                _this.editor = editor;
                editor.on('init', function (e) {
                    _this.initEditor(e, editor);
                });
                if (_this.init && typeof _this.init.setup === 'function') {
                    _this.init.setup(editor);
                }
            } });
        if (isTextarea(this.element)) {
            this.element.style.visibility = '';
        }
        this.ngZone.runOutsideAngular(function () {
            getTinymce().init(finalInit);
        });
    };
    /**
     * @private
     * @param {?} initEvent
     * @param {?} editor
     * @return {?}
     */
    EditorComponent.prototype.initEditor = /**
     * @private
     * @param {?} initEvent
     * @param {?} editor
     * @return {?}
     */
    function (initEvent, editor) {
        var _this = this;
        if (typeof this.initialValue === 'string') {
            this.ngZone.run(function () { return editor.setContent(_this.initialValue); });
        }
        editor.on('blur', function () { return _this.ngZone.run(function () { return _this.onTouchedCallback(); }); });
        editor.on('setcontent', function (_a) {
            var content = _a.content, format = _a.format;
            return format === 'html' && content && _this.ngZone.run(function () { return _this.onChangeCallback(content); });
        });
        editor.on('change keyup undo redo', function () { return _this.ngZone.run(function () { return _this.onChangeCallback(editor.getContent({ format: 'raw' })); }); });
        bindHandlers(this, editor, initEvent);
    };
    EditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'editor',
                    template: '<ng-template></ng-template>',
                    providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
                    styles: [':host { display: block; }']
                }] }
    ];
    /** @nocollapse */
    EditorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    EditorComponent.propDecorators = {
        cloudChannel: [{ type: Input }],
        apiKey: [{ type: Input }],
        init: [{ type: Input }],
        id: [{ type: Input }],
        initialValue: [{ type: Input }],
        inline: [{ type: Input }],
        tagName: [{ type: Input }],
        plugins: [{ type: Input }],
        toolbar: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return EditorComponent;
}(Events));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [EditorComponent],
                    exports: [EditorComponent]
                },] }
    ];
    return EditorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EditorComponent, EditorModule, Events as ɵa };

//# sourceMappingURL=tinymce-tinymce-angular.js.map