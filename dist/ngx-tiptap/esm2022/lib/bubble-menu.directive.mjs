import { Directive, Input } from '@angular/core';
import { BubbleMenuPlugin } from '@tiptap/extension-bubble-menu';
import * as i0 from "@angular/core";
export class BubbleMenuDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.pluginKey = 'NgxTiptapBubbleMenu';
        this.tippyOptions = {};
        this.shouldShow = null;
    }
    ngOnInit() {
        if (!this.editor) {
            throw new Error('Required: Input `editor`');
        }
        this.editor.registerPlugin(BubbleMenuPlugin({
            pluginKey: this.pluginKey,
            editor: this.editor,
            element: this.elRef.nativeElement,
            tippyOptions: this.tippyOptions,
            shouldShow: this.shouldShow,
            updateDelay: this.updateDelay,
        }));
    }
    ngOnDestroy() {
        this.editor.unregisterPlugin(this.pluginKey);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: BubbleMenuDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.3", type: BubbleMenuDirective, selector: "tiptap-bubble-menu[editor], [tiptapBubbleMenu][editor]", inputs: { pluginKey: "pluginKey", editor: "editor", tippyOptions: "tippyOptions", shouldShow: "shouldShow", updateDelay: "updateDelay" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: BubbleMenuDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'tiptap-bubble-menu[editor], [tiptapBubbleMenu][editor]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { pluginKey: [{
                type: Input
            }], editor: [{
                type: Input
            }], tippyOptions: [{
                type: Input
            }], shouldShow: [{
                type: Input
            }], updateDelay: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLW1lbnUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRpcHRhcC9zcmMvbGliL2J1YmJsZS1tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLGdCQUFnQixFQUF5QixNQUFNLCtCQUErQixDQUFDOztBQUt4RixNQUFNLE9BQU8sbUJBQW1CO0lBTzlCLFlBQW9CLEtBQThCO1FBQTlCLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBTnpDLGNBQVMsR0FBdUMscUJBQXFCLENBQUM7UUFFdEUsaUJBQVksR0FBMEMsRUFBRSxDQUFDO1FBQ3pELGVBQVUsR0FBd0MsSUFBSSxDQUFDO0lBR1YsQ0FBQztJQUV2RCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO1lBQzFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYTtZQUNqQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztTQUM5QixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs4R0ExQlUsbUJBQW1CO2tHQUFuQixtQkFBbUI7OzJGQUFuQixtQkFBbUI7a0JBSC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHdEQUF3RDtpQkFDbkU7K0VBRVUsU0FBUztzQkFBakIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnQHRpcHRhcC9jb3JlJztcbmltcG9ydCB7IEJ1YmJsZU1lbnVQbHVnaW4sIEJ1YmJsZU1lbnVQbHVnaW5Qcm9wcyB9IGZyb20gJ0B0aXB0YXAvZXh0ZW5zaW9uLWJ1YmJsZS1tZW51JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGlwdGFwLWJ1YmJsZS1tZW51W2VkaXRvcl0sIFt0aXB0YXBCdWJibGVNZW51XVtlZGl0b3JdJyxcbn0pXG5leHBvcnQgY2xhc3MgQnViYmxlTWVudURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcGx1Z2luS2V5OiBCdWJibGVNZW51UGx1Z2luUHJvcHNbJ3BsdWdpbktleSddID0gJ05neFRpcHRhcEJ1YmJsZU1lbnUnO1xuICBASW5wdXQoKSBlZGl0b3IhOiBFZGl0b3I7XG4gIEBJbnB1dCgpIHRpcHB5T3B0aW9uczogQnViYmxlTWVudVBsdWdpblByb3BzWyd0aXBweU9wdGlvbnMnXSA9IHt9O1xuICBASW5wdXQoKSBzaG91bGRTaG93OiBCdWJibGVNZW51UGx1Z2luUHJvcHNbJ3Nob3VsZFNob3cnXSA9IG51bGw7XG4gIEBJbnB1dCgpIHVwZGF0ZURlbGF5OiBCdWJibGVNZW51UGx1Z2luUHJvcHNbJ3VwZGF0ZURlbGF5J107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5lZGl0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQ6IElucHV0IGBlZGl0b3JgJyk7XG4gICAgfVxuXG4gICAgdGhpcy5lZGl0b3IucmVnaXN0ZXJQbHVnaW4oQnViYmxlTWVudVBsdWdpbih7XG4gICAgICBwbHVnaW5LZXk6IHRoaXMucGx1Z2luS2V5LFxuICAgICAgZWRpdG9yOiB0aGlzLmVkaXRvcixcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIHRpcHB5T3B0aW9uczogdGhpcy50aXBweU9wdGlvbnMsXG4gICAgICBzaG91bGRTaG93OiB0aGlzLnNob3VsZFNob3csXG4gICAgICB1cGRhdGVEZWxheTogdGhpcy51cGRhdGVEZWxheSxcbiAgICB9KSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRvci51bnJlZ2lzdGVyUGx1Z2luKHRoaXMucGx1Z2luS2V5KTtcbiAgfVxufVxuIl19