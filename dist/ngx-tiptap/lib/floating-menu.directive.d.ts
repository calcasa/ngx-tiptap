import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Editor } from '@tiptap/core';
import { FloatingMenuPluginProps } from '@tiptap/extension-floating-menu';
import * as i0 from "@angular/core";
export declare class FloatingMenuDirective implements OnInit, OnDestroy {
    private elRef;
    pluginKey: FloatingMenuPluginProps['pluginKey'];
    editor: Editor;
    tippyOptions: FloatingMenuPluginProps['tippyOptions'];
    shouldShow: FloatingMenuPluginProps['shouldShow'];
    constructor(elRef: ElementRef<HTMLElement>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FloatingMenuDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FloatingMenuDirective, "tiptap-floating-menu[editor], [tiptapFloatingMenu][editor]", never, { "pluginKey": { "alias": "pluginKey"; "required": false; }; "editor": { "alias": "editor"; "required": false; }; "tippyOptions": { "alias": "tippyOptions"; "required": false; }; "shouldShow": { "alias": "shouldShow"; "required": false; }; }, {}, never, never, false, never>;
}
