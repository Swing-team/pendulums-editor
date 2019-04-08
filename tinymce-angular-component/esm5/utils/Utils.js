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
export var bindHandlers = function (ctx, editor, initEvent) {
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
export var uuid = function (prefix) {
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
export var isTextarea = function (element) {
    return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
};
/** @type {?} */
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var ɵ0 = normalizePluginArray;
/** @type {?} */
export var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGlueW1jZS90aW55bWNlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFL0MsTUFBTSxLQUFPLFlBQVksR0FBRyxVQUFDLEdBQW9CLEVBQUUsTUFBVyxFQUFFLFNBQWdCO0lBQzlFLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTOztZQUN0QixZQUFZLEdBQXNCLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDdEQsSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckMsSUFBSSxTQUFTLEtBQUssUUFBUSxFQUFFO2dCQUMxQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxFQUEvQyxDQUErQyxDQUFDLENBQUM7YUFDdkU7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxVQUFDLEtBQVUsSUFBSyxPQUFBLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLEVBQXBDLENBQW9DLEVBQXBELENBQW9ELENBQUMsQ0FBQyxDQUFDO2FBQy9HO1NBQ0Y7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7O0lBRUcsTUFBTSxHQUFHLENBQUM7O0FBRWQsTUFBTSxLQUFPLElBQUksR0FBRyxVQUFDLE1BQWM7O1FBQzNCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTs7UUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7O1FBQ3JCLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUM7SUFFckQsTUFBTSxFQUFFLENBQUM7SUFFVCxPQUFPLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkQsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sVUFBVSxHQUFHLFVBQUMsT0FBaUI7SUFDMUMsT0FBTyxPQUFPLE9BQU8sS0FBSyxXQUFXLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxVQUFVLENBQUM7QUFDeEYsQ0FBQzs7SUFFSyxvQkFBb0IsR0FBRyxVQUFDLE9BQTJCO0lBQ3ZELElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLE9BQU8sS0FBSyxFQUFFLEVBQUU7UUFDcEQsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9ELENBQUM7OztBQUVELE1BQU0sS0FBTyxZQUFZLEdBQUcsVUFBQyxXQUE4QixFQUFFLFlBQWdDO0lBQzNGLE9BQUEsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQTVFLENBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXRvci9lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IHZhbGlkRXZlbnRzIH0gZnJvbSAnLi4vZWRpdG9yL0V2ZW50cyc7XG5cbmV4cG9ydCBjb25zdCBiaW5kSGFuZGxlcnMgPSAoY3R4OiBFZGl0b3JDb21wb25lbnQsIGVkaXRvcjogYW55LCBpbml0RXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG4gIHZhbGlkRXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBjdHhbZXZlbnROYW1lXTtcbiAgICBpZiAoZXZlbnRFbWl0dGVyLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoZXZlbnROYW1lID09PSAnb25Jbml0Jykge1xuICAgICAgICBjdHgubmdab25lLnJ1bigoKSA9PiBldmVudEVtaXR0ZXIuZW1pdCh7IGV2ZW50OiBpbml0RXZlbnQsIGVkaXRvciB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlZGl0b3Iub24oZXZlbnROYW1lLnN1YnN0cmluZygyKSwgY3R4Lm5nWm9uZS5ydW4oKCkgPT4gKGV2ZW50OiBhbnkpID0+IGV2ZW50RW1pdHRlci5lbWl0KHsgZXZlbnQsIGVkaXRvciB9KSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5sZXQgdW5pcXVlID0gMDtcblxuZXhwb3J0IGNvbnN0IHV1aWQgPSAocHJlZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKTtcblxuICB1bmlxdWUrKztcblxuICByZXR1cm4gcHJlZml4ICsgJ18nICsgcmFuZG9tICsgdW5pcXVlICsgU3RyaW5nKHRpbWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzVGV4dGFyZWEgPSAoZWxlbWVudD86IEVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxUZXh0QXJlYUVsZW1lbnQgPT4ge1xuICByZXR1cm4gdHlwZW9mIGVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnO1xufTtcblxuY29uc3Qgbm9ybWFsaXplUGx1Z2luQXJyYXkgPSAocGx1Z2lucz86IHN0cmluZyB8IHN0cmluZ1tdKTogc3RyaW5nW10gPT4ge1xuICBpZiAodHlwZW9mIHBsdWdpbnMgPT09ICd1bmRlZmluZWQnIHx8IHBsdWdpbnMgPT09ICcnKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGx1Z2lucykgPyBwbHVnaW5zIDogcGx1Z2lucy5zcGxpdCgnICcpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lcmdlUGx1Z2lucyA9IChpbml0UGx1Z2luczogc3RyaW5nIHwgc3RyaW5nW10sIGlucHV0UGx1Z2lucz86IHN0cmluZyB8IHN0cmluZ1tdKSA9PlxuICBub3JtYWxpemVQbHVnaW5BcnJheShpbml0UGx1Z2lucykuY29uY2F0KG5vcm1hbGl6ZVBsdWdpbkFycmF5KGlucHV0UGx1Z2lucykpO1xuIl19