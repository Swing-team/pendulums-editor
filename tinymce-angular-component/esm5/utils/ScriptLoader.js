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
import { uuid } from './Utils';
/**
 * @record
 */
export function IStateObj() { }
if (false) {
    /** @type {?} */
    IStateObj.prototype.listeners;
    /** @type {?} */
    IStateObj.prototype.scriptId;
    /** @type {?} */
    IStateObj.prototype.scriptLoaded;
}
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
var ɵ0 = injectScriptTag;
/** @type {?} */
export var create = function () {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
/** @type {?} */
export var load = function (state, doc, url, callback) {
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyaXB0TG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvU2NyaXB0TG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQUcvQiwrQkFJQzs7O0lBSEMsOEJBQXdCOztJQUN4Qiw2QkFBaUI7O0lBQ2pCLGlDQUFzQjs7O0lBR2xCLGVBQWUsR0FBRyxVQUFDLFFBQWdCLEVBQUUsR0FBYSxFQUFFLEdBQVcsRUFBRSxRQUFvQjs7UUFDbkYsU0FBUyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzdDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFDMUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUM7SUFDeEIsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QyxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNwQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDWixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNqQztBQUNILENBQUM7OztBQUVELE1BQU0sS0FBTyxNQUFNLEdBQUc7SUFDcEIsT0FBTztRQUNMLFNBQVMsRUFBRSxFQUFFO1FBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDN0IsWUFBWSxFQUFFLEtBQUs7S0FDcEIsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLElBQUksR0FBRyxVQUFDLEtBQWdCLEVBQUUsR0FBYSxFQUFFLEdBQVcsRUFBRSxRQUFvQjtJQUNyRixJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7UUFDdEIsUUFBUSxFQUFFLENBQUM7S0FDWjtTQUFNO1FBQ0wsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZDLGVBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7Z0JBQ3hDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsRUFBRSxFQUFFLEVBQUosQ0FBSSxDQUFDLENBQUM7Z0JBQ3RDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7S0FDRjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL1V0aWxzJztcblxuZXhwb3J0IHR5cGUgY2FsbGJhY2tGbiA9ICgpID0+IHZvaWQ7XG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZU9iaiB7XG4gIGxpc3RlbmVyczogY2FsbGJhY2tGbltdO1xuICBzY3JpcHRJZDogc3RyaW5nO1xuICBzY3JpcHRMb2FkZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGluamVjdFNjcmlwdFRhZyA9IChzY3JpcHRJZDogc3RyaW5nLCBkb2M6IERvY3VtZW50LCB1cmw6IHN0cmluZywgY2FsbGJhY2s6IGNhbGxiYWNrRm4pID0+IHtcbiAgY29uc3Qgc2NyaXB0VGFnID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHRUYWcudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgc2NyaXB0VGFnLmlkID0gc2NyaXB0SWQ7XG4gIHNjcmlwdFRhZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2FsbGJhY2spO1xuICBzY3JpcHRUYWcuc3JjID0gdXJsO1xuICBpZiAoZG9jLmhlYWQpIHtcbiAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRUYWcpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlID0gKCk6IElTdGF0ZU9iaiA9PiB7XG4gIHJldHVybiB7XG4gICAgbGlzdGVuZXJzOiBbXSxcbiAgICBzY3JpcHRJZDogdXVpZCgndGlueS1zY3JpcHQnKSxcbiAgICBzY3JpcHRMb2FkZWQ6IGZhbHNlXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZCA9IChzdGF0ZTogSVN0YXRlT2JqLCBkb2M6IERvY3VtZW50LCB1cmw6IHN0cmluZywgY2FsbGJhY2s6IGNhbGxiYWNrRm4pID0+IHtcbiAgaWYgKHN0YXRlLnNjcmlwdExvYWRlZCkge1xuICAgIGNhbGxiYWNrKCk7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIGlmICghZG9jLmdldEVsZW1lbnRCeUlkKHN0YXRlLnNjcmlwdElkKSkge1xuICAgICAgaW5qZWN0U2NyaXB0VGFnKHN0YXRlLnNjcmlwdElkLCBkb2MsIHVybCwgKCkgPT4ge1xuICAgICAgICBzdGF0ZS5saXN0ZW5lcnMuZm9yRWFjaCgoZm4pID0+IGZuKCkpO1xuICAgICAgICBzdGF0ZS5zY3JpcHRMb2FkZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuIl19