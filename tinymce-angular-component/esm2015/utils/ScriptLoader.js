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
const injectScriptTag = (scriptId, doc, url, callback) => {
    /** @type {?} */
    const scriptTag = doc.createElement('script');
    scriptTag.type = 'application/javascript';
    scriptTag.id = scriptId;
    scriptTag.addEventListener('load', callback);
    scriptTag.src = url;
    if (doc.head) {
        doc.head.appendChild(scriptTag);
    }
};
const ɵ0 = injectScriptTag;
/** @type {?} */
export const create = () => {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
/** @type {?} */
export const load = (state, doc, url, callback) => {
    if (state.scriptLoaded) {
        callback();
    }
    else {
        state.listeners.push(callback);
        if (!doc.getElementById(state.scriptId)) {
            injectScriptTag(state.scriptId, doc, url, () => {
                state.listeners.forEach((fn) => fn());
                state.scriptLoaded = true;
            });
        }
    }
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyaXB0TG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvU2NyaXB0TG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQUcvQiwrQkFJQzs7O0lBSEMsOEJBQXdCOztJQUN4Qiw2QkFBaUI7O0lBQ2pCLGlDQUFzQjs7O01BR2xCLGVBQWUsR0FBRyxDQUFDLFFBQWdCLEVBQUUsR0FBYSxFQUFFLEdBQVcsRUFBRSxRQUFvQixFQUFFLEVBQUU7O1VBQ3ZGLFNBQVMsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM3QyxTQUFTLENBQUMsSUFBSSxHQUFHLHdCQUF3QixDQUFDO0lBQzFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ3hCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0MsU0FBUyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDcEIsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO1FBQ1osR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDakM7QUFDSCxDQUFDOzs7QUFFRCxNQUFNLE9BQU8sTUFBTSxHQUFHLEdBQWMsRUFBRTtJQUNwQyxPQUFPO1FBQ0wsU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM3QixZQUFZLEVBQUUsS0FBSztLQUNwQixDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sSUFBSSxHQUFHLENBQUMsS0FBZ0IsRUFBRSxHQUFhLEVBQUUsR0FBVyxFQUFFLFFBQW9CLEVBQUUsRUFBRTtJQUN6RixJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7UUFDdEIsUUFBUSxFQUFFLENBQUM7S0FDWjtTQUFNO1FBQ0wsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZDLGVBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO2dCQUM3QyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7U0FDSjtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuaW1wb3J0IHsgdXVpZCB9IGZyb20gJy4vVXRpbHMnO1xuXG5leHBvcnQgdHlwZSBjYWxsYmFja0ZuID0gKCkgPT4gdm9pZDtcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlT2JqIHtcbiAgbGlzdGVuZXJzOiBjYWxsYmFja0ZuW107XG4gIHNjcmlwdElkOiBzdHJpbmc7XG4gIHNjcmlwdExvYWRlZDogYm9vbGVhbjtcbn1cblxuY29uc3QgaW5qZWN0U2NyaXB0VGFnID0gKHNjcmlwdElkOiBzdHJpbmcsIGRvYzogRG9jdW1lbnQsIHVybDogc3RyaW5nLCBjYWxsYmFjazogY2FsbGJhY2tGbikgPT4ge1xuICBjb25zdCBzY3JpcHRUYWcgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdFRhZy50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICBzY3JpcHRUYWcuaWQgPSBzY3JpcHRJZDtcbiAgc2NyaXB0VGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYWxsYmFjayk7XG4gIHNjcmlwdFRhZy5zcmMgPSB1cmw7XG4gIGlmIChkb2MuaGVhZCkge1xuICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdFRhZyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGUgPSAoKTogSVN0YXRlT2JqID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsaXN0ZW5lcnM6IFtdLFxuICAgIHNjcmlwdElkOiB1dWlkKCd0aW55LXNjcmlwdCcpLFxuICAgIHNjcmlwdExvYWRlZDogZmFsc2VcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkID0gKHN0YXRlOiBJU3RhdGVPYmosIGRvYzogRG9jdW1lbnQsIHVybDogc3RyaW5nLCBjYWxsYmFjazogY2FsbGJhY2tGbikgPT4ge1xuICBpZiAoc3RhdGUuc2NyaXB0TG9hZGVkKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgaWYgKCFkb2MuZ2V0RWxlbWVudEJ5SWQoc3RhdGUuc2NyaXB0SWQpKSB7XG4gICAgICBpbmplY3RTY3JpcHRUYWcoc3RhdGUuc2NyaXB0SWQsIGRvYywgdXJsLCAoKSA9PiB7XG4gICAgICAgIHN0YXRlLmxpc3RlbmVycy5mb3JFYWNoKChmbikgPT4gZm4oKSk7XG4gICAgICAgIHN0YXRlLnNjcmlwdExvYWRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG4iXX0=