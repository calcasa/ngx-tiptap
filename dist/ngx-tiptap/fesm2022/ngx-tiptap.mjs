import * as i0 from '@angular/core';
import { forwardRef, Directive, Input, HostBinding, Component, NgModule, ApplicationRef, createComponent, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FloatingMenuPlugin } from '@tiptap/extension-floating-menu';
import { BubbleMenuPlugin } from '@tiptap/extension-bubble-menu';
import { NodeView } from '@tiptap/core';

class EditorDirective {
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

class FloatingMenuDirective {
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

class BubbleMenuDirective {
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

class DraggableDirective {
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

class NodeViewContentDirective {
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

class AngularNodeViewComponent {
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

class NgxTiptapModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxTiptapModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.3", ngImport: i0, type: NgxTiptapModule, declarations: [EditorDirective,
            FloatingMenuDirective,
            BubbleMenuDirective,
            DraggableDirective,
            NodeViewContentDirective], exports: [EditorDirective,
            FloatingMenuDirective,
            BubbleMenuDirective,
            DraggableDirective,
            NodeViewContentDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxTiptapModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxTiptapModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EditorDirective,
                        FloatingMenuDirective,
                        BubbleMenuDirective,
                        DraggableDirective,
                        NodeViewContentDirective,
                    ],
                    exports: [
                        EditorDirective,
                        FloatingMenuDirective,
                        BubbleMenuDirective,
                        DraggableDirective,
                        NodeViewContentDirective,
                    ],
                }]
        }] });

class AngularRenderer {
    constructor(ViewComponent, injector, props) {
        this.applicationRef = injector.get(ApplicationRef);
        this.componentRef = createComponent(ViewComponent, {
            environmentInjector: this.applicationRef.injector,
            elementInjector: injector,
        });
        // set input props to the component
        this.updateProps(props);
        this.applicationRef.attachView(this.componentRef.hostView);
    }
    get instance() {
        return this.componentRef.instance;
    }
    get elementRef() {
        return this.componentRef.injector.get(ElementRef);
    }
    get dom() {
        return this.elementRef.nativeElement;
    }
    updateProps(props) {
        Object.entries(props).forEach(([key, value]) => {
            this.componentRef.setInput(key, value);
        });
    }
    detectChanges() {
        this.componentRef.changeDetectorRef.detectChanges();
    }
    destroy() {
        this.componentRef.destroy();
        this.applicationRef.detachView(this.componentRef.hostView);
    }
}

class AngularNodeView extends NodeView {
    mount() {
        const injector = this.options.injector;
        const props = {
            editor: this.editor,
            node: this.node,
            decorations: this.decorations,
            selected: false,
            extension: this.extension,
            getPos: () => this.getPos(),
            updateAttributes: (attributes = {}) => this.updateAttributes(attributes),
            deleteNode: () => this.deleteNode(),
            view: this.view,
            innerDecorations: this.innerDecorations,
            HTMLAttributes: this.HTMLAttributes,
        };
        this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this);
        this.editor.on('selectionUpdate', this.handleSelectionUpdate);
        // create renderer
        this.renderer = new AngularRenderer(this.component, injector, props);
        // Register drag handler
        if (this.extension.config.draggable) {
            this.renderer.elementRef.nativeElement.ondragstart = (e) => {
                this.onDragStart(e);
            };
        }
        this.contentDOMElement = this.node.isLeaf ? null : document.createElement(this.node.isInline ? 'span' : 'div');
        if (this.contentDOMElement) {
            // For some reason the whiteSpace prop is not inherited properly in Chrome and Safari
            // With this fix it seems to work fine
            // See: https://github.com/ueberdosis/tiptap/issues/1197
            this.contentDOMElement.style.whiteSpace = 'inherit';
            // Required for editable node views
            // The content won't be rendered if `editable` is set to `false`
            this.renderer.detectChanges();
        }
        this.appendContendDom();
    }
    get dom() {
        return this.renderer.dom;
    }
    get contentDOM() {
        if (this.node.isLeaf) {
            return null;
        }
        return this.contentDOMElement;
    }
    appendContendDom() {
        const contentElement = this.dom.querySelector('[data-node-view-content]');
        if (this.contentDOMElement
            && contentElement
            && !contentElement.contains(this.contentDOMElement)) {
            contentElement.appendChild(this.contentDOMElement);
        }
    }
    handleSelectionUpdate() {
        const { from, to } = this.editor.state.selection;
        if (from <= this.getPos() && to >= this.getPos() + this.node.nodeSize) {
            this.selectNode();
        }
        else {
            this.deselectNode();
        }
    }
    update(node, decorations, innerDecorations) {
        const updateProps = () => {
            this.renderer.updateProps({ node, decorations: decorations });
        };
        if (this.options.update) {
            const oldNode = this.node;
            const oldDecorations = this.decorations;
            this.node = node;
            this.decorations = decorations;
            this.innerDecorations = innerDecorations;
            return this.options.update({
                oldNode,
                oldDecorations,
                innerDecorations,
                newNode: node,
                newDecorations: decorations,
                updateProps: () => updateProps(),
            });
        }
        if (node.type !== this.node.type) {
            return false;
        }
        if (node === this.node && this.decorations === decorations) {
            return true;
        }
        this.node = node;
        this.decorations = decorations;
        updateProps();
        return true;
    }
    selectNode() {
        this.renderer.updateProps({ selected: true });
    }
    deselectNode() {
        this.renderer.updateProps({ selected: false });
    }
    destroy() {
        this.renderer.destroy();
        this.editor.off('selectionUpdate', this.handleSelectionUpdate);
        this.contentDOMElement = null;
    }
}
const AngularNodeViewRenderer = (ViewComponent, options) => {
    return (props) => {
        return new AngularNodeView(ViewComponent, props, options);
    };
};

/*
 * Public API Surface of ngx-tiptap
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularNodeViewComponent, AngularNodeViewRenderer, AngularRenderer, BubbleMenuDirective, DraggableDirective, EditorDirective, FloatingMenuDirective, NgxTiptapModule, NodeViewContentDirective };
//# sourceMappingURL=ngx-tiptap.mjs.map
