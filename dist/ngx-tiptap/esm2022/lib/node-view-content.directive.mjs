import { Directive, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class NodeViewContentDirective {
    constructor() {
        this.handle = '';
        this.whiteSpace = 'pre-wrap';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NodeViewContentDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.3", type: NodeViewContentDirective, selector: "[tiptapNodeViewContent]", host: { properties: { "attr.data-node-view-content": "this.handle", "style.white-space": "this.whiteSpace" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NodeViewContentDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tiptapNodeViewContent]',
                }]
        }], propDecorators: { handle: [{
                type: HostBinding,
                args: ['attr.data-node-view-content']
            }], whiteSpace: [{
                type: HostBinding,
                args: ['style.white-space']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS12aWV3LWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRpcHRhcC9zcmMvbGliL25vZGUtdmlldy1jb250ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLdkQsTUFBTSxPQUFPLHdCQUF3QjtJQUhyQztRQUk4QyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxVQUFVLENBQUM7S0FDM0Q7OEdBSFksd0JBQXdCO2tHQUF4Qix3QkFBd0I7OzJGQUF4Qix3QkFBd0I7a0JBSHBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtpQkFDcEM7OEJBRTZDLE1BQU07c0JBQWpELFdBQVc7dUJBQUMsNkJBQTZCO2dCQUNSLFVBQVU7c0JBQTNDLFdBQVc7dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGlwdGFwTm9kZVZpZXdDb250ZW50XScsXG59KVxuZXhwb3J0IGNsYXNzIE5vZGVWaWV3Q29udGVudERpcmVjdGl2ZSB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLW5vZGUtdmlldy1jb250ZW50JykgaGFuZGxlID0gJyc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUud2hpdGUtc3BhY2UnKSB3aGl0ZVNwYWNlID0gJ3ByZS13cmFwJztcbn1cbiJdfQ==