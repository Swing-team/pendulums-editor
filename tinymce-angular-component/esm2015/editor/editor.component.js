/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, forwardRef, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ScriptLoader from '../utils/ScriptLoader';
import { uuid, isTextarea, bindHandlers, mergePlugins } from '../utils/Utils';
import { getTinymce } from '../TinyMCE';
import { Events } from './Events';
import { isPlatformBrowser } from '@angular/common';
/** @type {?} */
const scriptState = ScriptLoader.create();
/** @type {?} */
const EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EditorComponent),
    multi: true
};
export class EditorComponent extends Events {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} platformId
     */
    constructor(elementRef, ngZone, platformId) {
        super();
        this.platformId = platformId;
        this.element = undefined;
        this.cloudChannel = '5';
        this.apiKey = '';
        this.id = '';
        this.toolbar = null;
        this.onTouchedCallback = () => { };
        this.onChangeCallback = (x) => { };
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.initialise = this.initialise.bind(this);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set disabled(val) {
        this._disabled = val;
        if (this.editor && this.editor.initialized) {
            this.editor.setMode(val ? 'readonly' : 'design');
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.initialValue = value || this.initialValue;
        value = value || '';
        if (this.editor && this.editor.initialized && typeof value === 'string') {
            this.editor.setContent(value);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (this.editor) {
            this.editor.setMode(isDisabled ? 'readonly' : 'design');
        }
        else if (isDisabled) {
            this.init = Object.assign({}, this.init, { readonly: true });
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
                const doc = this.element.ownerDocument;
                /** @type {?} */
                const channel = this.cloudChannel;
                /** @type {?} */
                const apiKey = this.apiKey;
                ScriptLoader.load(scriptState, doc, `https://cloud.tinymce.com/${channel}/tinymce.min.js?apiKey=${apiKey}`, this.initialise);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (getTinymce() !== null) {
            getTinymce().remove(this.editor);
        }
    }
    /**
     * @return {?}
     */
    createElement() {
        /** @type {?} */
        const tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
        this.element = document.createElement(this.inline ? tagName : 'textarea');
        if (this.element) {
            this.element.id = this.id;
            if (isTextarea(this.element)) {
                this.element.style.visibility = 'hidden';
            }
            this.elementRef.nativeElement.appendChild(this.element);
        }
    }
    /**
     * @return {?}
     */
    initialise() {
        /** @type {?} */
        const finalInit = Object.assign({}, this.init, { target: this.element, inline: this.inline, readonly: this.disabled, plugins: mergePlugins(this.init && this.init.plugins, this.plugins), toolbar: this.toolbar || (this.init && this.init.toolbar), setup: (editor) => {
                this.editor = editor;
                editor.on('init', (e) => {
                    this.initEditor(e, editor);
                });
                if (this.init && typeof this.init.setup === 'function') {
                    this.init.setup(editor);
                }
            } });
        if (isTextarea(this.element)) {
            this.element.style.visibility = '';
        }
        this.ngZone.runOutsideAngular(() => {
            getTinymce().init(finalInit);
        });
    }
    /**
     * @private
     * @param {?} initEvent
     * @param {?} editor
     * @return {?}
     */
    initEditor(initEvent, editor) {
        if (typeof this.initialValue === 'string') {
            this.ngZone.run(() => editor.setContent(this.initialValue));
        }
        editor.on('blur', () => this.ngZone.run(() => this.onTouchedCallback()));
        editor.on('setcontent', ({ content, format }) => format === 'html' && content && this.ngZone.run(() => this.onChangeCallback(content)));
        editor.on('change keyup undo redo', () => this.ngZone.run(() => this.onChangeCallback(editor.getContent({ format: 'raw' }))));
        bindHandlers(this, editor, initEvent);
    }
}
EditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'editor',
                template: '<ng-template></ng-template>',
                providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
                styles: [':host { display: block; }']
            }] }
];
/** @nocollapse */
EditorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0aW55bWNlL3RpbnltY2UtYW5ndWxhci8iLCJzb3VyY2VzIjpbImVkaXRvci9lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixLQUFLLEVBQUUsVUFBVSxFQUFhLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxLQUFLLFlBQVksTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztNQUU5QyxXQUFXLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRTs7TUFFbkMsK0JBQStCLEdBQUc7SUFDdEMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUM5QyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBUUQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsTUFBTTs7Ozs7O0lBZ0N6QyxZQUFZLFVBQXNCLEVBQUUsTUFBYyxFQUErQixVQUFrQjtRQUNqRyxLQUFLLEVBQUUsQ0FBQztRQUR1RSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBOUIzRixZQUFPLEdBQXdCLFNBQVMsQ0FBQztRQUt4QyxpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixXQUFNLEdBQUcsRUFBRSxDQUFD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QkFBOUMsTUFBTSxTQUFDLFdBQVc7OzsyQkF6QnRFLEtBQUs7cUJBQ0wsS0FBSzttQkFDTCxLQUFLO2lCQUNMLEtBQUs7MkJBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUdMLEtBQUs7Ozs7Ozs7SUFqQk4scUNBQStCOzs7OztJQUMvQixrQ0FBaUQ7Ozs7O0lBQ2pELGlDQUFvQjs7SUFFcEIsaUNBQWU7O0lBRWYsdUNBQTRCOztJQUM1QixpQ0FBcUI7O0lBQ3JCLCtCQUErQzs7SUFDL0MsNkJBQWlCOztJQUNqQix1Q0FBMEM7O0lBQzFDLGlDQUFxQzs7SUFDckMsa0NBQXFDOztJQUNyQyxrQ0FBcUM7O0lBQ3JDLGtDQUFrRDs7Ozs7SUFFbEQsb0NBQXVDOzs7OztJQVl2Qyw0Q0FBcUM7Ozs7O0lBQ3JDLDJDQUEwQzs7Ozs7SUFFVSxxQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIElucHV0LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIGZvcndhcmRSZWYsIE5nWm9uZSwgSW5qZWN0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgKiBhcyBTY3JpcHRMb2FkZXIgZnJvbSAnLi4vdXRpbHMvU2NyaXB0TG9hZGVyJztcbmltcG9ydCB7IHV1aWQsIGlzVGV4dGFyZWEsIGJpbmRIYW5kbGVycywgbWVyZ2VQbHVnaW5zIH0gZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xuaW1wb3J0IHsgZ2V0VGlueW1jZSB9IGZyb20gJy4uL1RpbnlNQ0UnO1xuaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSAnLi9FdmVudHMnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBzY3JpcHRTdGF0ZSA9IFNjcmlwdExvYWRlci5jcmVhdGUoKTtcblxuY29uc3QgRURJVE9SX0NPTVBPTkVOVF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEVkaXRvckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0b3InLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPicsXG4gIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9J10sXG4gIHByb3ZpZGVyczogW0VESVRPUl9DT01QT05FTlRfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRvckNvbXBvbmVudCBleHRlbmRzIEV2ZW50cyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgZWxlbWVudDogRWxlbWVudCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBlZGl0b3I6IGFueTtcblxuICBuZ1pvbmU6IE5nWm9uZTtcblxuICBASW5wdXQoKSBjbG91ZENoYW5uZWwgPSAnNSc7XG4gIEBJbnB1dCgpIGFwaUtleSA9ICcnO1xuICBASW5wdXQoKSBpbml0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBpZCA9ICcnO1xuICBASW5wdXQoKSBpbml0aWFsVmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgaW5saW5lOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSB0YWdOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIHBsdWdpbnM6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgdG9vbGJhcjogc3RyaW5nIHwgc3RyaW5nW10gfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbCkge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsO1xuICAgIGlmICh0aGlzLmVkaXRvciAmJiB0aGlzLmVkaXRvci5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5lZGl0b3Iuc2V0TW9kZSh2YWwgPyAncmVhZG9ubHknIDogJ2Rlc2lnbicpO1xuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9ICgpID0+IHt9O1xuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAoeDogYW55KSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XG4gICAgdGhpcy5uZ1pvbmUgPSBuZ1pvbmU7XG4gICAgdGhpcy5pbml0aWFsaXNlID0gdGhpcy5pbml0aWFsaXNlLmJpbmQodGhpcyk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5pbml0aWFsVmFsdWUgPSB2YWx1ZSB8fCB0aGlzLmluaXRpYWxWYWx1ZTtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8ICcnO1xuXG4gICAgaWYgKHRoaXMuZWRpdG9yICYmIHRoaXMuZWRpdG9yLmluaXRpYWxpemVkICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZWRpdG9yLnNldENvbnRlbnQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHRoaXMuZWRpdG9yLnNldE1vZGUoaXNEaXNhYmxlZCA/ICdyZWFkb25seScgOiAnZGVzaWduJyk7XG4gICAgfSBlbHNlIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmluaXQgPSB7IC4uLnRoaXMuaW5pdCwgcmVhZG9ubHk6IHRydWUgfTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IHV1aWQoJ3RpbnktYW5ndWxhcicpO1xuICAgICAgdGhpcy5pbmxpbmUgPVxuICAgICAgICB0eXBlb2YgdGhpcy5pbmxpbmUgIT09ICd1bmRlZmluZWQnID8gKHR5cGVvZiB0aGlzLmlubGluZSA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5pbmxpbmUgOiB0cnVlKSA6IHRoaXMuaW5pdCAmJiB0aGlzLmluaXQuaW5saW5lO1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgICBpZiAoZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIGNvbnN0IGNoYW5uZWwgPSB0aGlzLmNsb3VkQ2hhbm5lbDtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gdGhpcy5hcGlLZXk7XG5cbiAgICAgICAgU2NyaXB0TG9hZGVyLmxvYWQoc2NyaXB0U3RhdGUsIGRvYywgYGh0dHBzOi8vY2xvdWQudGlueW1jZS5jb20vJHtjaGFubmVsfS90aW55bWNlLm1pbi5qcz9hcGlLZXk9JHthcGlLZXl9YCwgdGhpcy5pbml0aWFsaXNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XG4gICAgICBnZXRUaW55bWNlKCkucmVtb3ZlKHRoaXMuZWRpdG9yKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVFbGVtZW50KCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0eXBlb2YgdGhpcy50YWdOYW1lID09PSAnc3RyaW5nJyA/IHRoaXMudGFnTmFtZSA6ICdkaXYnO1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5pbmxpbmUgPyB0YWdOYW1lIDogJ3RleHRhcmVhJyk7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5pZDtcbiAgICAgIGlmIChpc1RleHRhcmVhKHRoaXMuZWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIH1cbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBmaW5hbEluaXQgPSB7XG4gICAgICAuLi50aGlzLmluaXQsXG4gICAgICB0YXJnZXQ6IHRoaXMuZWxlbWVudCxcbiAgICAgIGlubGluZTogdGhpcy5pbmxpbmUsXG4gICAgICByZWFkb25seTogdGhpcy5kaXNhYmxlZCxcbiAgICAgIHBsdWdpbnM6IG1lcmdlUGx1Z2lucyh0aGlzLmluaXQgJiYgdGhpcy5pbml0LnBsdWdpbnMsIHRoaXMucGx1Z2lucyksXG4gICAgICB0b29sYmFyOiB0aGlzLnRvb2xiYXIgfHwgKHRoaXMuaW5pdCAmJiB0aGlzLmluaXQudG9vbGJhciksXG4gICAgICBzZXR1cDogKGVkaXRvcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xuICAgICAgICBlZGl0b3Iub24oJ2luaXQnLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmluaXRFZGl0b3IoZSwgZWRpdG9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdCAmJiB0eXBlb2YgdGhpcy5pbml0LnNldHVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5pbml0LnNldHVwKGVkaXRvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGlzVGV4dGFyZWEodGhpcy5lbGVtZW50KSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBnZXRUaW55bWNlKCkuaW5pdChmaW5hbEluaXQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RWRpdG9yKGluaXRFdmVudDogRXZlbnQsIGVkaXRvcjogYW55KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmluaXRpYWxWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiBlZGl0b3Iuc2V0Q29udGVudCh0aGlzLmluaXRpYWxWYWx1ZSkpO1xuICAgIH1cbiAgICBlZGl0b3Iub24oJ2JsdXInLCAoKSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpKSk7XG4gICAgZWRpdG9yLm9uKFxuICAgICAgJ3NldGNvbnRlbnQnLFxuICAgICAgKHsgY29udGVudCwgZm9ybWF0IH06IGFueSkgPT4gZm9ybWF0ID09PSAnaHRtbCcgJiYgY29udGVudCAmJiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5vbkNoYW5nZUNhbGxiYWNrKGNvbnRlbnQpKVxuICAgICk7XG4gICAgZWRpdG9yLm9uKCdjaGFuZ2Uga2V5dXAgdW5kbyByZWRvJywgKCkgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMub25DaGFuZ2VDYWxsYmFjayhlZGl0b3IuZ2V0Q29udGVudCh7Zm9ybWF0OiAncmF3J30pKSkpO1xuICAgIGJpbmRIYW5kbGVycyh0aGlzLCBlZGl0b3IsIGluaXRFdmVudCk7XG4gIH1cbn1cbiJdfQ==