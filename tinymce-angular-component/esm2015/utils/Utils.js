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
import { validEvents } from '../editor/Events';
/** @type {?} */
export const bindHandlers = (ctx, editor, initEvent) => {
    validEvents.forEach((eventName) => {
        /** @type {?} */
        const eventEmitter = ctx[eventName];
        if (eventEmitter.observers.length > 0) {
            if (eventName === 'onInit') {
                ctx.ngZone.run(() => eventEmitter.emit({ event: initEvent, editor }));
            }
            else {
                editor.on(eventName.substring(2), ctx.ngZone.run(() => (event) => eventEmitter.emit({ event, editor })));
            }
        }
    });
};
/** @type {?} */
let unique = 0;
/** @type {?} */
export const uuid = (prefix) => {
    /** @type {?} */
    const date = new Date();
    /** @type {?} */
    const time = date.getTime();
    /** @type {?} */
    const random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
/** @type {?} */
export const isTextarea = (element) => {
    return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
};
/** @type {?} */
const normalizePluginArray = (plugins) => {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
const ɵ0 = normalizePluginArray;
/** @type {?} */
export const mergePlugins = (initPlugins, inputPlugins) => normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGlueW1jZS90aW55bWNlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFL0MsTUFBTSxPQUFPLFlBQVksR0FBRyxDQUFDLEdBQW9CLEVBQUUsTUFBVyxFQUFFLFNBQWdCLEVBQVEsRUFBRTtJQUN4RixXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7O2NBQzFCLFlBQVksR0FBc0IsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxJQUFJLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQyxJQUFJLFNBQVMsS0FBSyxRQUFRLEVBQUU7Z0JBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN2RTtpQkFBTTtnQkFDTCxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0c7U0FDRjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQzs7SUFFRyxNQUFNLEdBQUcsQ0FBQzs7QUFFZCxNQUFNLE9BQU8sSUFBSSxHQUFHLENBQUMsTUFBYyxFQUFVLEVBQUU7O1VBQ3ZDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTs7VUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7O1VBQ3JCLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUM7SUFFckQsTUFBTSxFQUFFLENBQUM7SUFFVCxPQUFPLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkQsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sVUFBVSxHQUFHLENBQUMsT0FBaUIsRUFBa0MsRUFBRTtJQUM5RSxPQUFPLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLFVBQVUsQ0FBQztBQUN4RixDQUFDOztNQUVLLG9CQUFvQixHQUFHLENBQUMsT0FBMkIsRUFBWSxFQUFFO0lBQ3JFLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLE9BQU8sS0FBSyxFQUFFLEVBQUU7UUFDcEQsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9ELENBQUM7OztBQUVELE1BQU0sT0FBTyxZQUFZLEdBQUcsQ0FBQyxXQUE4QixFQUFFLFlBQWdDLEVBQUUsRUFBRSxDQUMvRixvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vZWRpdG9yL2VkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgdmFsaWRFdmVudHMgfSBmcm9tICcuLi9lZGl0b3IvRXZlbnRzJztcblxuZXhwb3J0IGNvbnN0IGJpbmRIYW5kbGVycyA9IChjdHg6IEVkaXRvckNvbXBvbmVudCwgZWRpdG9yOiBhbnksIGluaXRFdmVudDogRXZlbnQpOiB2b2lkID0+IHtcbiAgdmFsaWRFdmVudHMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgY29uc3QgZXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IGN0eFtldmVudE5hbWVdO1xuICAgIGlmIChldmVudEVtaXR0ZXIub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChldmVudE5hbWUgPT09ICdvbkluaXQnKSB7XG4gICAgICAgIGN0eC5uZ1pvbmUucnVuKCgpID0+IGV2ZW50RW1pdHRlci5lbWl0KHsgZXZlbnQ6IGluaXRFdmVudCwgZWRpdG9yIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVkaXRvci5vbihldmVudE5hbWUuc3Vic3RyaW5nKDIpLCBjdHgubmdab25lLnJ1bigoKSA9PiAoZXZlbnQ6IGFueSkgPT4gZXZlbnRFbWl0dGVyLmVtaXQoeyBldmVudCwgZWRpdG9yIH0pKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmxldCB1bmlxdWUgPSAwO1xuXG5leHBvcnQgY29uc3QgdXVpZCA9IChwcmVmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0aW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApO1xuXG4gIHVuaXF1ZSsrO1xuXG4gIHJldHVybiBwcmVmaXggKyAnXycgKyByYW5kb20gKyB1bmlxdWUgKyBTdHJpbmcodGltZSk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNUZXh0YXJlYSA9IChlbGVtZW50PzogRWxlbWVudCk6IGVsZW1lbnQgaXMgSFRNTFRleHRBcmVhRWxlbWVudCA9PiB7XG4gIHJldHVybiB0eXBlb2YgZWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYSc7XG59O1xuXG5jb25zdCBub3JtYWxpemVQbHVnaW5BcnJheSA9IChwbHVnaW5zPzogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XG4gIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ3VuZGVmaW5lZCcgfHwgcGx1Z2lucyA9PT0gJycpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gQXJyYXkuaXNBcnJheShwbHVnaW5zKSA/IHBsdWdpbnMgOiBwbHVnaW5zLnNwbGl0KCcgJyk7XG59O1xuXG5leHBvcnQgY29uc3QgbWVyZ2VQbHVnaW5zID0gKGluaXRQbHVnaW5zOiBzdHJpbmcgfCBzdHJpbmdbXSwgaW5wdXRQbHVnaW5zPzogc3RyaW5nIHwgc3RyaW5nW10pID0+XG4gIG5vcm1hbGl6ZVBsdWdpbkFycmF5KGluaXRQbHVnaW5zKS5jb25jYXQobm9ybWFsaXplUGx1Z2luQXJyYXkoaW5wdXRQbHVnaW5zKSk7XG4iXX0=