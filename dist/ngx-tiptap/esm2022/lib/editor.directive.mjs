import { Directive, forwardRef, Input, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export class EditorDirective {
    constructor(elRef, renderer, changeDetectorRef) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.outputFormat = 'html';
        this.onChange = () => { };
        this.onTouched = () => { };
        this.handleChange = ({ editor, transaction }) => {
            if (!transaction.docChanged) {
                return;
            }
            // Needed for ChangeDetectionStrategy.OnPush to get notified about changes
            this.changeDetectorRef.markForCheck();
            if (this.outputFormat === 'html') {
                this.onChange(editor.getHTML());
                return;
            }
            this.onChange(editor.getJSON());
        };
    }
    // Writes a new value to the element.
    // This methods is called when programmatic changes from model to view are requested.
    writeValue(value) {
        if (!this.outputFormat && typeof value === 'string') {
            this.outputFormat = 'html';
        }
        this.editor.chain().setContent(value, false).run();
    }
    // Registers a callback function that is called when the control's value changes in the UI.
    registerOnChange(fn) {
        this.onChange = fn;
    }
    // Registers a callback function that is called by the forms API on initialization to update the form model on blur.
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // Called by the forms api to enable or disable the element
    setDisabledState(isDisabled) {
        this.editor.setEditable(!isDisabled);
        this.renderer.setProperty(this.elRef.nativeElement, 'disabled', isDisabled);
    }
    ngOnInit() {
        if (!this.editor) {
            throw new Error('Required: Input `editor`');
        }
        // take the inner contents and clear the block
        const { innerHTML } = this.elRef.nativeElement;
        this.elRef.nativeElement.innerHTML = '';
        // insert the editor in the dom
        this.elRef.nativeElement.append(...Array.from(this.editor.options.element.childNodes));
        // update the options for the editor
        this.editor.setOptions({ element: this.elRef.nativeElement });
        // update content to the editor
        if (innerHTML) {
            this.editor.chain().setContent(innerHTML, false).run();
        }
        // register blur handler to update `touched` property
        this.editor.on('blur', () => {
            this.onTouched();
        });
        // register update handler to listen to changes on update
        this.editor.on('update', this.handleChange);
        // Needed for ChangeDetectionStrategy.OnPush to get notified
        this.editor.on('selectionUpdate', () => this.changeDetectorRef.markForCheck());
    }
    ngAfterViewInit() {
        this.changeDetectorRef.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: EditorDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.3", type: EditorDirective, selector: "tiptap[editor], [tiptap][editor], tiptap-editor[editor], [tiptapEditor][editor]", inputs: { editor: "editor", outputFormat: "outputFormat" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => EditorDirective),
                multi: true,
            }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: EditorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'tiptap[editor], [tiptap][editor], tiptap-editor[editor], [tiptapEditor][editor]',
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => EditorDirective),
                            multi: true,
                        }],
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }], propDecorators: { editor: [{
                type: Input
            }], outputFormat: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aXB0YXAvc3JjL2xpYi9lZGl0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDNkIsU0FBUyxFQUMvQixVQUFVLEVBQUUsS0FBSyxHQUM5QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBWXpFLE1BQU0sT0FBTyxlQUFlO0lBSTFCLFlBQ1ksS0FBOEIsRUFDOUIsUUFBbUIsRUFDbkIsaUJBQW9DO1FBRnBDLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUx2QyxpQkFBWSxHQUFvQixNQUFNLENBQUM7UUFRdEMsYUFBUSxHQUE2QixHQUFHLEVBQUUsR0FBVSxDQUFDLENBQUM7UUFDdEQsY0FBUyxHQUFlLEdBQUcsRUFBRSxHQUFVLENBQUMsQ0FBQztRQTRCekMsaUJBQVksR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBK0IsRUFBUSxFQUFFO1lBQ3RGLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQzVCLE9BQU87WUFDVCxDQUFDO1lBRUQsMEVBQTBFO1lBQzFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUV0QyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxFQUFFLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ2hDLE9BQU87WUFDVCxDQUFDO1lBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUM7SUE3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M0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUZBQWlGO29CQUMzRixTQUFTLEVBQUUsQ0FBQzs0QkFDVixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQzs0QkFDOUMsS0FBSyxFQUFFLElBQUk7eUJBQ1osQ0FBQztpQkFDSDt1SUFHVSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250ZW50LCBFZGl0b3IsIHR5cGUgRWRpdG9yRXZlbnRzIH0gZnJvbSAnQHRpcHRhcC9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGlwdGFwW2VkaXRvcl0sIFt0aXB0YXBdW2VkaXRvcl0sIHRpcHRhcC1lZGl0b3JbZWRpdG9yXSwgW3RpcHRhcEVkaXRvcl1bZWRpdG9yXScsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFZGl0b3JEaXJlY3RpdmUpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBFZGl0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgZWRpdG9yITogRWRpdG9yO1xuICBASW5wdXQoKSBvdXRwdXRGb3JtYXQ6ICdqc29uJyB8ICdodG1sJyA9ICdodG1sJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkgeyB9XG5cbiAgcHJvdGVjdGVkIG9uQ2hhbmdlOiAodmFsdWU6IENvbnRlbnQpID0+IHZvaWQgPSAoKSA9PiB7IC8qKiAqLyB9O1xuICBwcm90ZWN0ZWQgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4geyAvKiogKi8gfTtcblxuICAvLyBXcml0ZXMgYSBuZXcgdmFsdWUgdG8gdGhlIGVsZW1lbnQuXG4gIC8vIFRoaXMgbWV0aG9kcyBpcyBjYWxsZWQgd2hlbiBwcm9ncmFtbWF0aWMgY2hhbmdlcyBmcm9tIG1vZGVsIHRvIHZpZXcgYXJlIHJlcXVlc3RlZC5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogQ29udGVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vdXRwdXRGb3JtYXQgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5vdXRwdXRGb3JtYXQgPSAnaHRtbCc7XG4gICAgfVxuXG4gICAgdGhpcy5lZGl0b3IuY2hhaW4oKS5zZXRDb250ZW50KHZhbHVlLCBmYWxzZSkucnVuKCk7XG4gIH1cblxuICAvLyBSZWdpc3RlcnMgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sJ3MgdmFsdWUgY2hhbmdlcyBpbiB0aGUgVUkuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvLyBSZWdpc3RlcnMgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBieSB0aGUgZm9ybXMgQVBJIG9uIGluaXRpYWxpemF0aW9uIHRvIHVwZGF0ZSB0aGUgZm9ybSBtb2RlbCBvbiBibHVyLlxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvLyBDYWxsZWQgYnkgdGhlIGZvcm1zIGFwaSB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgZWxlbWVudFxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRvci5zZXRFZGl0YWJsZSghaXNEaXNhYmxlZCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhbmRsZUNoYW5nZSA9ICh7IGVkaXRvciwgdHJhbnNhY3Rpb24gfTogRWRpdG9yRXZlbnRzWyd0cmFuc2FjdGlvbiddKTogdm9pZCA9PiB7XG4gICAgaWYgKCF0cmFuc2FjdGlvbi5kb2NDaGFuZ2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gTmVlZGVkIGZvciBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2ggdG8gZ2V0IG5vdGlmaWVkIGFib3V0IGNoYW5nZXNcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgaWYgKHRoaXMub3V0cHV0Rm9ybWF0ID09PSAnaHRtbCcpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoZWRpdG9yLmdldEhUTUwoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vbkNoYW5nZShlZGl0b3IuZ2V0SlNPTigpKTtcbiAgfTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZWRpdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkOiBJbnB1dCBgZWRpdG9yYCcpO1xuICAgIH1cblxuICAgIC8vIHRha2UgdGhlIGlubmVyIGNvbnRlbnRzIGFuZCBjbGVhciB0aGUgYmxvY2tcbiAgICBjb25zdCB7IGlubmVySFRNTCB9ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vIGluc2VydCB0aGUgZWRpdG9yIGluIHRoZSBkb21cbiAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuYXBwZW5kKC4uLkFycmF5LmZyb20odGhpcy5lZGl0b3Iub3B0aW9ucy5lbGVtZW50LmNoaWxkTm9kZXMpKTtcblxuICAgIC8vIHVwZGF0ZSB0aGUgb3B0aW9ucyBmb3IgdGhlIGVkaXRvclxuICAgIHRoaXMuZWRpdG9yLnNldE9wdGlvbnMoeyBlbGVtZW50OiB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQgfSk7XG5cbiAgICAvLyB1cGRhdGUgY29udGVudCB0byB0aGUgZWRpdG9yXG4gICAgaWYgKGlubmVySFRNTCkge1xuICAgICAgdGhpcy5lZGl0b3IuY2hhaW4oKS5zZXRDb250ZW50KGlubmVySFRNTCwgZmFsc2UpLnJ1bigpO1xuICAgIH1cblxuICAgIC8vIHJlZ2lzdGVyIGJsdXIgaGFuZGxlciB0byB1cGRhdGUgYHRvdWNoZWRgIHByb3BlcnR5XG4gICAgdGhpcy5lZGl0b3Iub24oJ2JsdXInLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIH0pO1xuXG4gICAgLy8gcmVnaXN0ZXIgdXBkYXRlIGhhbmRsZXIgdG8gbGlzdGVuIHRvIGNoYW5nZXMgb24gdXBkYXRlXG4gICAgdGhpcy5lZGl0b3Iub24oJ3VwZGF0ZScsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcblxuICAgIC8vIE5lZWRlZCBmb3IgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoIHRvIGdldCBub3RpZmllZFxuICAgIHRoaXMuZWRpdG9yLm9uKCdzZWxlY3Rpb25VcGRhdGUnLCAoKSA9PiB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19