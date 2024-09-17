import { Directive, Input } from '@angular/core';
import { FloatingMenuPlugin } from '@tiptap/extension-floating-menu';
import * as i0 from "@angular/core";
export class FloatingMenuDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.pluginKey = 'NgxTiptapFloatingMenu';
        this.tippyOptions = {};
        this.shouldShow = null;
    }
    ngOnInit() {
        if (!this.editor) {
            throw new Error('Required: Input `editor`');
        }
        this.editor.registerPlugin(FloatingMenuPlugin({
            pluginKey: this.pluginKey,
            editor: this.editor,
            element: this.elRef.nativeElement,
            tippyOptions: this.tippyOptions,
            shouldShow: this.shouldShow,
        }));
    }
    ngOnDestroy() {
        this.editor.unregisterPlugin(this.pluginKey);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: FloatingMenuDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.3", type: FloatingMenuDirective, selector: "tiptap-floating-menu[editor], [tiptapFloatingMenu][editor]", inputs: { pluginKey: "pluginKey", editor: "editor", tippyOptions: "tippyOptions", shouldShow: "shouldShow" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: FloatingMenuDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'tiptap-floating-menu[editor], [tiptapFloatingMenu][editor]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { pluginKey: [{
                type: Input
            }], editor: [{
                type: Input
            }], tippyOptions: [{
                type: Input
            }], shouldShow: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGlwdGFwL3NyYy9saWIvZmxvYXRpbmctbWVudS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxrQkFBa0IsRUFBMkIsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFNOUYsTUFBTSxPQUFPLHFCQUFxQjtJQU1oQyxZQUFvQixLQUE4QjtRQUE5QixVQUFLLEdBQUwsS0FBSyxDQUF5QjtRQUx6QyxjQUFTLEdBQXlDLHVCQUF1QixDQUFDO1FBRTFFLGlCQUFZLEdBQTRDLEVBQUUsQ0FBQztRQUMzRCxlQUFVLEdBQTBDLElBQUksQ0FBQztJQUVaLENBQUM7SUFFdkQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztZQUM1QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7WUFDakMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUM1QixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs4R0F4QlUscUJBQXFCO2tHQUFyQixxQkFBcUI7OzJGQUFyQixxQkFBcUI7a0JBSmpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDREQUE0RDtpQkFDdkU7K0VBR1UsU0FBUztzQkFBakIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gJ0B0aXB0YXAvY29yZSc7XG5pbXBvcnQgeyBGbG9hdGluZ01lbnVQbHVnaW4sIEZsb2F0aW5nTWVudVBsdWdpblByb3BzIH0gZnJvbSAnQHRpcHRhcC9leHRlbnNpb24tZmxvYXRpbmctbWVudSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RpcHRhcC1mbG9hdGluZy1tZW51W2VkaXRvcl0sIFt0aXB0YXBGbG9hdGluZ01lbnVdW2VkaXRvcl0nLFxufSlcblxuZXhwb3J0IGNsYXNzIEZsb2F0aW5nTWVudURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcGx1Z2luS2V5OiBGbG9hdGluZ01lbnVQbHVnaW5Qcm9wc1sncGx1Z2luS2V5J10gPSAnTmd4VGlwdGFwRmxvYXRpbmdNZW51JztcbiAgQElucHV0KCkgZWRpdG9yITogRWRpdG9yO1xuICBASW5wdXQoKSB0aXBweU9wdGlvbnM6IEZsb2F0aW5nTWVudVBsdWdpblByb3BzWyd0aXBweU9wdGlvbnMnXSA9IHt9O1xuICBASW5wdXQoKSBzaG91bGRTaG93OiBGbG9hdGluZ01lbnVQbHVnaW5Qcm9wc1snc2hvdWxkU2hvdyddID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmVkaXRvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZDogSW5wdXQgYGVkaXRvcmAnKTtcbiAgICB9XG5cbiAgICB0aGlzLmVkaXRvci5yZWdpc3RlclBsdWdpbihGbG9hdGluZ01lbnVQbHVnaW4oe1xuICAgICAgcGx1Z2luS2V5OiB0aGlzLnBsdWdpbktleSxcbiAgICAgIGVkaXRvcjogdGhpcy5lZGl0b3IsXG4gICAgICBlbGVtZW50OiB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aXBweU9wdGlvbnM6IHRoaXMudGlwcHlPcHRpb25zLFxuICAgICAgc2hvdWxkU2hvdzogdGhpcy5zaG91bGRTaG93LFxuICAgIH0pKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdG9yLnVucmVnaXN0ZXJQbHVnaW4odGhpcy5wbHVnaW5LZXkpO1xuICB9XG59XG4iXX0=