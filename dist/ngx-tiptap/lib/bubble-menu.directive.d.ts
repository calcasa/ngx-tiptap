import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Editor } from '@tiptap/core';
import { BubbleMenuPluginProps } from '@tiptap/extension-bubble-menu';
import * as i0 from "@angular/core";
export declare class BubbleMenuDirective implements OnInit, OnDestroy {
    private elRef;
    pluginKey: BubbleMenuPluginProps['pluginKey'];
    editor: Editor;
    tippyOptions: BubbleMenuPluginProps['tippyOptions'];
    shouldShow: BubbleMenuPluginProps['shouldShow'];
    updateDelay: BubbleMenuPluginProps['updateDelay'];
    constructor(elRef: ElementRef<HTMLElement>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BubbleMenuDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BubbleMenuDirective, "tiptap-bubble-menu[editor], [tiptapBubbleMenu][editor]", never, { "pluginKey": { "alias": "pluginKey"; "required": false; }; "editor": { "alias": "editor"; "required": false; }; "tippyOptions": { "alias": "tippyOptions"; "required": false; }; "shouldShow": { "alias": "shouldShow"; "required": false; }; "updateDelay": { "alias": "updateDelay"; "required": false; }; }, {}, never, never, false, never>;
}
