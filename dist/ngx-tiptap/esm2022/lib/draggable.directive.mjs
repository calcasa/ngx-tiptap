import { Directive, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class DraggableDirective {
    constructor() {
        this.draggable = true;
        this.handle = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: DraggableDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.3", type: DraggableDirective, selector: "[tiptapDraggable]", host: { properties: { "attr.draggable": "this.draggable", "attr.data-drag-handle": "this.handle" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: DraggableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tiptapDraggable]',
                }]
        }], propDecorators: { draggable: [{
                type: HostBinding,
                args: ['attr.draggable']
            }], handle: [{
                type: HostBinding,
                args: ['attr.data-drag-handle']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aXB0YXAvc3JjL2xpYi9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUt2RCxNQUFNLE9BQU8sa0JBQWtCO0lBSC9CO1FBSWlDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDVixXQUFNLEdBQUcsRUFBRSxDQUFDO0tBQ25EOzhHQUhZLGtCQUFrQjtrR0FBbEIsa0JBQWtCOzsyRkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCOzhCQUVnQyxTQUFTO3NCQUF2QyxXQUFXO3VCQUFDLGdCQUFnQjtnQkFDUyxNQUFNO3NCQUEzQyxXQUFXO3VCQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RpcHRhcERyYWdnYWJsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuZHJhZ2dhYmxlJykgZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtZHJhZy1oYW5kbGUnKSBoYW5kbGUgPSAnJztcbn1cbiJdfQ==