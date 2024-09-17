import { ElementRef, Injector, Type } from '@angular/core';
export declare class AngularRenderer<C, P> {
    private applicationRef;
    private componentRef;
    constructor(ViewComponent: Type<C>, injector: Injector, props: Partial<P>);
    get instance(): C;
    get elementRef(): ElementRef;
    get dom(): HTMLElement;
    updateProps<T extends P>(props: Partial<T>): void;
    detectChanges(): void;
    destroy(): void;
}
