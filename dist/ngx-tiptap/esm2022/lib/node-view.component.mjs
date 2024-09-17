import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AngularNodeViewComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: AngularNodeViewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.3", type: AngularNodeViewComponent, selector: "ng-component", inputs: { view: "view", innerDecorations: "innerDecorations", HTMLAttributes: "HTMLAttributes", editor: "editor", node: "node", decorations: "decorations", selected: "selected", extension: "extension", getPos: "getPos", updateAttributes: "updateAttributes", deleteNode: "deleteNode" }, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: AngularNodeViewComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], propDecorators: { view: [{
                type: Input
            }], innerDecorations: [{
                type: Input
            }], HTMLAttributes: [{
                type: Input
            }], editor: [{
                type: Input
            }], node: [{
                type: Input
            }], decorations: [{
                type: Input
            }], selected: [{
                type: Input
            }], extension: [{
                type: Input
            }], getPos: [{
                type: Input
            }], updateAttributes: [{
                type: Input
            }], deleteNode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aXB0YXAvc3JjL2xpYi9ub2RlLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUlqRCxNQUFNLE9BQU8sd0JBQXdCOzhHQUF4Qix3QkFBd0I7a0dBQXhCLHdCQUF3QixrVkFEZCxFQUFFOzsyRkFDWix3QkFBd0I7a0JBRHBDLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFOzhCQUVoQixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7IE5vZGVWaWV3UHJvcHMgfSBmcm9tICdAdGlwdGFwL2NvcmUnO1xuXG5AQ29tcG9uZW50KHsgdGVtcGxhdGU6ICcnIH0pXG5leHBvcnQgY2xhc3MgQW5ndWxhck5vZGVWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgTm9kZVZpZXdQcm9wcyB7XG4gIEBJbnB1dCgpIHZpZXchOiBOb2RlVmlld1Byb3BzWyd2aWV3J107XG4gIEBJbnB1dCgpIGlubmVyRGVjb3JhdGlvbnMhOiBOb2RlVmlld1Byb3BzWydpbm5lckRlY29yYXRpb25zJ107XG4gIEBJbnB1dCgpIEhUTUxBdHRyaWJ1dGVzITogTm9kZVZpZXdQcm9wc1snSFRNTEF0dHJpYnV0ZXMnXTtcbiAgQElucHV0KCkgZWRpdG9yITogTm9kZVZpZXdQcm9wc1snZWRpdG9yJ107XG4gIEBJbnB1dCgpIG5vZGUhOiBOb2RlVmlld1Byb3BzWydub2RlJ107XG4gIEBJbnB1dCgpIGRlY29yYXRpb25zITogTm9kZVZpZXdQcm9wc1snZGVjb3JhdGlvbnMnXTtcbiAgQElucHV0KCkgc2VsZWN0ZWQhOiBOb2RlVmlld1Byb3BzWydzZWxlY3RlZCddO1xuICBASW5wdXQoKSBleHRlbnNpb24hOiBOb2RlVmlld1Byb3BzWydleHRlbnNpb24nXTtcbiAgQElucHV0KCkgZ2V0UG9zITogTm9kZVZpZXdQcm9wc1snZ2V0UG9zJ107XG4gIEBJbnB1dCgpIHVwZGF0ZUF0dHJpYnV0ZXMhOiBOb2RlVmlld1Byb3BzWyd1cGRhdGVBdHRyaWJ1dGVzJ107XG4gIEBJbnB1dCgpIGRlbGV0ZU5vZGUhOiBOb2RlVmlld1Byb3BzWydkZWxldGVOb2RlJ107XG59XG4iXX0=