import { Injector, Type } from '@angular/core';
import { NodeViewRenderer, NodeViewRendererOptions, DecorationWithType } from '@tiptap/core';
import type { Decoration, DecorationSource } from '@tiptap/pm/view';
import type { Node as ProseMirrorNode } from '@tiptap/pm/model';
import { AngularNodeViewComponent } from './node-view.component';
interface RendererUpdateProps {
    oldNode: ProseMirrorNode;
    oldDecorations: readonly Decoration[];
    innerDecorations: DecorationSource;
    newNode: ProseMirrorNode;
    newDecorations: readonly DecorationWithType[];
    updateProps: () => void;
}
interface AngularNodeViewRendererOptions extends NodeViewRendererOptions {
    update?: ((props: RendererUpdateProps) => boolean) | null;
    injector: Injector;
}
export declare const AngularNodeViewRenderer: (ViewComponent: Type<AngularNodeViewComponent>, options: Partial<AngularNodeViewRendererOptions>) => NodeViewRenderer;
export {};
