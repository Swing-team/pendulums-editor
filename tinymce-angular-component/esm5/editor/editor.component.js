/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ElementRef, forwardRef, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ScriptLoader from '../utils/ScriptLoader';
import { uuid, isTextarea, bindHandlers, mergePlugins } from '../utils/Utils';
import { getTinymce } from '../TinyMCE';
import { Events } from './Events';
import { isPlatformBrowser } from '@angular/common';
/** @type {?} */
var scriptState = ScriptLoader.create();
/** @type {?} */
var EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return EditorComponent; }),
    multi: true
};
var EditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EditorComponent, _super);
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
            this.init = tslib_1.__assign({}, this.init, { readonly: true });
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
                ScriptLoader.load(scriptState, doc, "https://cloud.tinymce.com/" + channel + "/tinymce.min.js?apiKey=" + apiKey, this.initialise);
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
        var finalInit = tslib_1.__assign({}, this.init, { target: this.element, inline: this.inline, readonly: this.disabled, plugins: mergePlugins(this.init && this.init.plugins, this.plugins), toolbar: this.toolbar || (this.init && this.init.toolbar), setup: function (editor) {
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
export { EditorComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.editor;
    /** @type {?} */
    EditorComponent.prototype.ngZone;
    /** @type {?} */
    EditorComponent.prototype.cloudChannel;
    /** @type {?} */
    EditorComponent.prototype.apiKey;
    /** @type {?} */
    EditorComponent.prototype.init;
    /** @type {?} */
    EditorComponent.prototype.id;
    /** @type {?} */
    EditorComponent.prototype.initialValue;
    /** @type {?} */
    EditorComponent.prototype.inline;
    /** @type {?} */
    EditorComponent.prototype.tagName;
    /** @type {?} */
    EditorComponent.prototype.plugins;
    /** @type {?} */
    EditorComponent.prototype.toolbar;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.onChangeCallback;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0aW55bWNlL3RpbnltY2UtYW5ndWxhci8iLCJzb3VyY2VzIjpbImVkaXRvci9lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsS0FBSyxFQUFFLFVBQVUsRUFBYSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sS0FBSyxZQUFZLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFFOUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUU7O0lBRW5DLCtCQUErQixHQUFHO0lBQ3RDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxFQUFmLENBQWUsQ0FBQztJQUM5QyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUFNcUMsMkNBQU07SUFnQ3pDLHlCQUFZLFVBQXNCLEVBQUUsTUFBYyxFQUErQixVQUFrQjtRQUFuRyxZQUNFLGlCQUFPLFNBSVI7UUFMZ0YsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUE5QjNGLGFBQU8sR0FBd0IsU0FBUyxDQUFDO1FBS3hDLGtCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ25CLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFFWixRQUFF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QUFFLDZCQUE2QjtvQkFFdkMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7NkJBRG5DLDJCQUEyQjtpQkFFckM7Ozs7Z0JBdEJ5QyxVQUFVO2dCQUF5QixNQUFNO2dCQXVEWSxNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVzs7OytCQXpCdEUsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBR0wsS0FBSzs7SUEySFIsc0JBQUM7Q0FBQSxBQW5KRCxDQU1xQyxNQUFNLEdBNkkxQztTQTdJWSxlQUFlOzs7Ozs7SUFDMUIscUNBQStCOzs7OztJQUMvQixrQ0FBaUQ7Ozs7O0lBQ2pELGlDQUFvQjs7SUFFcEIsaUNBQWU7O0lBRWYsdUNBQTRCOztJQUM1QixpQ0FBcUI7O0lBQ3JCLCtCQUErQzs7SUFDL0MsNkJBQWlCOztJQUNqQix1Q0FBMEM7O0lBQzFDLGlDQUFxQzs7SUFDckMsa0NBQXFDOztJQUNyQyxrQ0FBcUM7O0lBQ3JDLGtDQUFrRDs7Ozs7SUFFbEQsb0NBQXVDOzs7OztJQVl2Qyw0Q0FBcUM7Ozs7O0lBQ3JDLDJDQUEwQzs7Ozs7SUFFVSxxQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIElucHV0LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIGZvcndhcmRSZWYsIE5nWm9uZSwgSW5qZWN0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgKiBhcyBTY3JpcHRMb2FkZXIgZnJvbSAnLi4vdXRpbHMvU2NyaXB0TG9hZGVyJztcbmltcG9ydCB7IHV1aWQsIGlzVGV4dGFyZWEsIGJpbmRIYW5kbGVycywgbWVyZ2VQbHVnaW5zIH0gZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xuaW1wb3J0IHsgZ2V0VGlueW1jZSB9IGZyb20gJy4uL1RpbnlNQ0UnO1xuaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSAnLi9FdmVudHMnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBzY3JpcHRTdGF0ZSA9IFNjcmlwdExvYWRlci5jcmVhdGUoKTtcblxuY29uc3QgRURJVE9SX0NPTVBPTkVOVF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEVkaXRvckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3InLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPicsXG4gIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9J10sXG4gIHByb3ZpZGVyczogW0VESVRPUl9DT01QT05FTlRfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRvckNvbXBvbmVudCBleHRlbmRzIEV2ZW50cyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgZWxlbWVudDogRWxlbWVudCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBlZGl0b3I6IGFueTtcblxuICBuZ1pvbmU6IE5nWm9uZTtcblxuICBASW5wdXQoKSBjbG91ZENoYW5uZWwgPSAnNSc7XG4gIEBJbnB1dCgpIGFwaUtleSA9ICcnO1xuICBASW5wdXQoKSBpbml0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBpZCA9ICcnO1xuICBASW5wdXQoKSBpbml0aWFsVmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgaW5saW5lOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSB0YWdOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIHBsdWdpbnM6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgdG9vbGJhcjogc3RyaW5nIHwgc3RyaW5nW10gfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbCkge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsO1xuICAgIGlmICh0aGlzLmVkaXRvciAmJiB0aGlzLmVkaXRvci5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5lZGl0b3Iuc2V0TW9kZSh2YWwgPyAncmVhZG9ubHknIDogJ2Rlc2lnbicpO1xuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9ICgpID0+IHt9O1xuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAoeDogYW55KSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG4gICAgdGhpcy5uZ1pvbmUgPSBuZ1pvbmU7XG4gICAgdGhpcy5pbml0aWFsaXNlID0gdGhpcy5pbml0aWFsaXNlLmJpbmQodGhpcyk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5pbml0aWFsVmFsdWUgPSB2YWx1ZSB8fCB0aGlzLmluaXRpYWxWYWx1ZTtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8ICcnO1xuXG4gICAgaWYgKHRoaXMuZWRpdG9yICYmIHRoaXMuZWRpdG9yLmluaXRpYWxpemVkICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZWRpdG9yLnNldENvbnRlbnQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHRoaXMuZWRpdG9yLnNldE1vZGUoaXNEaXNhYmxlZCA/ICdyZWFkb25seScgOiAnZGVzaWduJyk7XG4gICAgfSBlbHNlIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmluaXQgPSB7IC4uLnRoaXMuaW5pdCwgcmVhZG9ubHk6IHRydWUgfTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IHV1aWQoJ3RpbnktYW5ndWxhcicpO1xuICAgICAgdGhpcy5pbmxpbmUgPVxuICAgICAgICB0eXBlb2YgdGhpcy5pbmxpbmUgIT09ICd1bmRlZmluZWQnID8gKHR5cGVvZiB0aGlzLmlubGluZSA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5pbmxpbmUgOiB0cnVlKSA6IHRoaXMuaW5pdCAmJiB0aGlzLmluaXQuaW5saW5lO1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgICBpZiAoZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIGNvbnN0IGNoYW5uZWwgPSB0aGlzLmNsb3VkQ2hhbm5lbDtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gdGhpcy5hcGlLZXk7XG5cbiAgICAgICAgU2NyaXB0TG9hZGVyLmxvYWQoc2NyaXB0U3RhdGUsIGRvYywgYGh0dHBzOi8vY2xvdWQudGlueW1jZS5jb20vJHtjaGFubmVsfS90aW55bWNlLm1pbi5qcz9hcGlLZXk9JHthcGlLZXl9YCwgdGhpcy5pbml0aWFsaXNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XG4gICAgICBnZXRUaW55bWNlKCkucmVtb3ZlKHRoaXMuZWRpdG9yKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVFbGVtZW50KCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0eXBlb2YgdGhpcy50YWdOYW1lID09PSAnc3RyaW5nJyA/IHRoaXMudGFnTmFtZSA6ICdkaXYnO1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5pbmxpbmUgPyB0YWdOYW1lIDogJ3RleHRhcmVhJyk7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcbiAgICAgIGlmIChpc1RleHRhcmVhKHRoaXMuZWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIH1cbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBmaW5hbEluaXQgPSB7XG4gICAgICAuLi50aGlzLmluaXQsXG4gICAgICB0YXJnZXQ6IHRoaXMuZWxlbWVudCxcbiAgICAgIGlubGluZTogdGhpcy5pbmxpbmUsXG4gICAgICByZWFkb25seTogdGhpcy5kaXNhYmxlZCxcbiAgICAgIHBsdWdpbnM6IG1lcmdlUGx1Z2lucyh0aGlzLmluaXQgJiYgdGhpcy5pbml0LnBsdWdpbnMsIHRoaXMucGx1Z2lucyksXG4gICAgICB0b29sYmFyOiB0aGlzLnRvb2xiYXIgfHwgKHRoaXMuaW5pdCAmJiB0aGlzLmluaXQudG9vbGJhciksXG4gICAgICBzZXR1cDogKGVkaXRvcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xuICAgICAgICBlZGl0b3Iub24oJ2luaXQnLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmluaXRFZGl0b3IoZSwgZWRpdG9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdCAmJiB0eXBlb2YgdGhpcy5pbml0LnNldHVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5pbml0LnNldHVwKGVkaXRvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGlzVGV4dGFyZWEodGhpcy5lbGVtZW50KSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBnZXRUaW55bWNlKCkuaW5pdChmaW5hbEluaXQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RWRpdG9yKGluaXRFdmVudDogRXZlbnQsIGVkaXRvcjogYW55KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmluaXRpYWxWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiBlZGl0b3Iuc2V0Q29udGVudCh0aGlzLmluaXRpYWxWYWx1ZSkpO1xuICAgIH1cbiAgICBlZGl0b3Iub24oJ2JsdXInLCAoKSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpKSk7XG4gICAgZWRpdG9yLm9uKFxuICAgICAgJ3NldGNvbnRlbnQnLFxuICAgICAgKHsgY29udGVudCwgZm9ybWF0IH06IGFueSkgPT4gZm9ybWF0ID09PSAnaHRtbCcgJiYgY29udGVudCAmJiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5vbkNoYW5nZUNhbGxiYWNrKGNvbnRlbnQpKVxuICAgICk7XG4gICAgZWRpdG9yLm9uKCdjaGFuZ2Uga2V5dXAgdW5kbyByZWRvJywgKCkgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMub25DaGFuZ2VDYWxsYmFjayhlZGl0b3IuZ2V0Q29udGVudCh7Zm9ybWF0OiAncmF3J30pKSkpO1xuICAgIGJpbmRIYW5kbGVycyh0aGlzLCBlZGl0b3IsIGluaXRFdmVudCk7XG4gIH1cbn1cbiJdfQ==