/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Output, EventEmitter } from '@angular/core';
/**
 * @record
 * @template T
 */
export function EventObj() { }
if (false) {
    /** @type {?} */
    EventObj.prototype.event;
    /** @type {?} */
    EventObj.prototype.editor;
}
export class Events {
    constructor() {
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
if (false) {
    /** @type {?} */
    Events.prototype.onBeforePaste;
    /** @type {?} */
    Events.prototype.onBlur;
    /** @type {?} */
    Events.prototype.onClick;
    /** @type {?} */
    Events.prototype.onContextMenu;
    /** @type {?} */
    Events.prototype.onCopy;
    /** @type {?} */
    Events.prototype.onCut;
    /** @type {?} */
    Events.prototype.onDblclick;
    /** @type {?} */
    Events.prototype.onDrag;
    /** @type {?} */
    Events.prototype.onDragDrop;
    /** @type {?} */
    Events.prototype.onDragEnd;
    /** @type {?} */
    Events.prototype.onDragGesture;
    /** @type {?} */
    Events.prototype.onDragOver;
    /** @type {?} */
    Events.prototype.onDrop;
    /** @type {?} */
    Events.prototype.onFocus;
    /** @type {?} */
    Events.prototype.onFocusIn;
    /** @type {?} */
    Events.prototype.onFocusOut;
    /** @type {?} */
    Events.prototype.onKeyDown;
    /** @type {?} */
    Events.prototype.onKeyPress;
    /** @type {?} */
    Events.prototype.onKeyUp;
    /** @type {?} */
    Events.prototype.onMouseDown;
    /** @type {?} */
    Events.prototype.onMouseEnter;
    /** @type {?} */
    Events.prototype.onMouseLeave;
    /** @type {?} */
    Events.prototype.onMouseMove;
    /** @type {?} */
    Events.prototype.onMouseOut;
    /** @type {?} */
    Events.prototype.onMouseOver;
    /** @type {?} */
    Events.prototype.onMouseUp;
    /** @type {?} */
    Events.prototype.onPaste;
    /** @type {?} */
    Events.prototype.onSelectionChange;
    /** @type {?} */
    Events.prototype.onActivate;
    /** @type {?} */
    Events.prototype.onAddUndo;
    /** @type {?} */
    Events.prototype.onBeforeAddUndo;
    /** @type {?} */
    Events.prototype.onBeforeExecCommand;
    /** @type {?} */
    Events.prototype.onBeforeGetContent;
    /** @type {?} */
    Events.prototype.onBeforeRenderUI;
    /** @type {?} */
    Events.prototype.onBeforeSetContent;
    /** @type {?} */
    Events.prototype.onChange;
    /** @type {?} */
    Events.prototype.onClearUndos;
    /** @type {?} */
    Events.prototype.onDeactivate;
    /** @type {?} */
    Events.prototype.onDirty;
    /** @type {?} */
    Events.prototype.onExecCommand;
    /** @type {?} */
    Events.prototype.onGetContent;
    /** @type {?} */
    Events.prototype.onHide;
    /** @type {?} */
    Events.prototype.onInit;
    /** @type {?} */
    Events.prototype.onLoadContent;
    /** @type {?} */
    Events.prototype.onNodeChange;
    /** @type {?} */
    Events.prototype.onPostProcess;
    /** @type {?} */
    Events.prototype.onPostRender;
    /** @type {?} */
    Events.prototype.onPreInit;
    /** @type {?} */
    Events.prototype.onPreProcess;
    /** @type {?} */
    Events.prototype.onProgressState;
    /** @type {?} */
    Events.prototype.onRedo;
    /** @type {?} */
    Events.prototype.onRemove;
    /** @type {?} */
    Events.prototype.onReset;
    /** @type {?} */
    Events.prototype.onSaveContent;
    /** @type {?} */
    Events.prototype.onSetAttrib;
    /** @type {?} */
    Events.prototype.onObjectResizeStart;
    /** @type {?} */
    Events.prototype.onObjectResized;
    /** @type {?} */
    Events.prototype.onObjectSelected;
    /** @type {?} */
    Events.prototype.onSetContent;
    /** @type {?} */
    Events.prototype.onShow;
    /** @type {?} */
    Events.prototype.onSubmit;
    /** @type {?} */
    Events.prototype.onUndo;
    /** @type {?} */
    Events.prototype.onVisualAid;
}
/** @type {?} */
export const validEvents = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZWRpdG9yL0V2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXJELDhCQUdDOzs7SUFGQyx5QkFBUzs7SUFDVCwwQkFBWTs7QUFHZCxNQUFNLE9BQU8sTUFBTTtJQUFuQjtRQUNZLGtCQUFhLEdBQTJDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0UsV0FBTSxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hFLFlBQU8sR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRSxrQkFBYSxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZFLFdBQU0sR0FBMkMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRSxVQUFLLEdBQTJDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkUsZUFBVSxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BFLFdBQU0sR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvRCxlQUFVLEdBQXNDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkUsY0FBUyxHQUFzQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xFLGtCQUFhLEdBQXNDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEUsZUFBVSxHQUFzQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25FLFdBQU0sR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvRCxZQUFPLEdBQXVDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakUsY0FBUyxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25FLGVBQVUsR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRSxjQUFTLEdBQTBDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEUsZUFBVSxHQUEw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Q1IsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxRQUFRO0lBQ1IsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztJQUNkLGNBQWM7SUFDZCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLFFBQVE7SUFDUixVQUFVO0lBQ1YsUUFBUTtJQUNSLGFBQWE7Q0FDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRPYmo8VD4ge1xuICBldmVudDogVDtcbiAgZWRpdG9yOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBFdmVudHMge1xuICBAT3V0cHV0KCkgb25CZWZvcmVQYXN0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPENsaXBib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxGb2N1c0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Db250ZXh0TWVudTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ29weTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPENsaXBib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkN1dDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPENsaXBib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkRibGNsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25EcmFnOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkRyYWdEcm9wOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uRHJhZ0dlc3R1cmU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uRHJvcDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Gb2N1czogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEZvY3VzRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uRm9jdXNJbjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEZvY3VzRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uRm9jdXNPdXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxGb2N1c0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbktleURvd246IEV2ZW50RW1pdHRlcjxFdmVudE9iajxLZXlib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbktleVByZXNzOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8S2V5Ym9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25LZXlVcDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEtleWJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uTW91c2VEb3duOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Nb3VzZUVudGVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Nb3VzZUxlYXZlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Nb3VzZU1vdmU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbk1vdXNlT3V0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Nb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbk1vdXNlVXA6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblBhc3RlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Q2xpcGJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uU2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQWRkVW5kbzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25CZWZvcmVBZGRVbmRvOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkJlZm9yZUV4ZWNDb21tYW5kOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkJlZm9yZUdldENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQmVmb3JlUmVuZGVyVUk6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQmVmb3JlU2V0Q29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ2xlYXJVbmRvczogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25EZWFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkRpcnR5OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkV4ZWNDb21tYW5kOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkdldENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uSGlkZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Jbml0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkxvYWRDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbk5vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uUG9zdFByb2Nlc3M6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uUG9zdFJlbmRlcjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25QcmVJbml0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblByZVByb2Nlc3M6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uUHJvZ3Jlc3NTdGF0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25SZWRvOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblJlbW92ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25SZXNldDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25TYXZlQ29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25TZXRBdHRyaWI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uT2JqZWN0UmVzaXplU3RhcnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uT2JqZWN0UmVzaXplZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25PYmplY3RTZWxlY3RlZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25TZXRDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblNob3c6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uU3VibWl0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblVuZG86IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uVmlzdWFsQWlkOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG5cbmV4cG9ydCBjb25zdCB2YWxpZEV2ZW50czogKGtleW9mIEV2ZW50cylbXSA9IFtcbiAgJ29uQWN0aXZhdGUnLFxuICAnb25BZGRVbmRvJyxcbiAgJ29uQmVmb3JlQWRkVW5kbycsXG4gICdvbkJlZm9yZUV4ZWNDb21tYW5kJyxcbiAgJ29uQmVmb3JlR2V0Q29udGVudCcsXG4gICdvbkJlZm9yZVJlbmRlclVJJyxcbiAgJ29uQmVmb3JlU2V0Q29udGVudCcsXG4gICdvbkJlZm9yZVBhc3RlJyxcbiAgJ29uQmx1cicsXG4gICdvbkNoYW5nZScsXG4gICdvbkNsZWFyVW5kb3MnLFxuICAnb25DbGljaycsXG4gICdvbkNvbnRleHRNZW51JyxcbiAgJ29uQ29weScsXG4gICdvbkN1dCcsXG4gICdvbkRibGNsaWNrJyxcbiAgJ29uRGVhY3RpdmF0ZScsXG4gICdvbkRpcnR5JyxcbiAgJ29uRHJhZycsXG4gICdvbkRyYWdEcm9wJyxcbiAgJ29uRHJhZ0VuZCcsXG4gICdvbkRyYWdHZXN0dXJlJyxcbiAgJ29uRHJhZ092ZXInLFxuICAnb25Ecm9wJyxcbiAgJ29uRXhlY0NvbW1hbmQnLFxuICAnb25Gb2N1cycsXG4gICdvbkZvY3VzSW4nLFxuICAnb25Gb2N1c091dCcsXG4gICdvbkdldENvbnRlbnQnLFxuICAnb25IaWRlJyxcbiAgJ29uSW5pdCcsXG4gICdvbktleURvd24nLFxuICAnb25LZXlQcmVzcycsXG4gICdvbktleVVwJyxcbiAgJ29uTG9hZENvbnRlbnQnLFxuICAnb25Nb3VzZURvd24nLFxuICAnb25Nb3VzZUVudGVyJyxcbiAgJ29uTW91c2VMZWF2ZScsXG4gICdvbk1vdXNlTW92ZScsXG4gICdvbk1vdXNlT3V0JyxcbiAgJ29uTW91c2VPdmVyJyxcbiAgJ29uTW91c2VVcCcsXG4gICdvbk5vZGVDaGFuZ2UnLFxuICAnb25PYmplY3RSZXNpemVTdGFydCcsXG4gICdvbk9iamVjdFJlc2l6ZWQnLFxuICAnb25PYmplY3RTZWxlY3RlZCcsXG4gICdvblBhc3RlJyxcbiAgJ29uUG9zdFByb2Nlc3MnLFxuICAnb25Qb3N0UmVuZGVyJyxcbiAgJ29uUHJlUHJvY2VzcycsXG4gICdvblByb2dyZXNzU3RhdGUnLFxuICAnb25SZWRvJyxcbiAgJ29uUmVtb3ZlJyxcbiAgJ29uUmVzZXQnLFxuICAnb25TYXZlQ29udGVudCcsXG4gICdvblNlbGVjdGlvbkNoYW5nZScsXG4gICdvblNldEF0dHJpYicsXG4gICdvblNldENvbnRlbnQnLFxuICAnb25TaG93JyxcbiAgJ29uU3VibWl0JyxcbiAgJ29uVW5kbycsXG4gICdvblZpc3VhbEFpZCdcbl07XG4iXX0=