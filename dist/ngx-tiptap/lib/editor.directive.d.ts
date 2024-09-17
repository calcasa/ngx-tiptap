import { AfterViewInit, ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Content, Editor, type EditorEvents } from '@tiptap/core';
import * as i0 from "@angular/core";
export declare class EditorDirective implements OnInit, AfterViewInit, ControlValueAccessor {
    protected elRef: ElementRef<HTMLElement>;
    protected renderer: Renderer2;
    protected changeDetectorRef: ChangeDetectorRef;
    editor: Editor;
    outputFormat: 'json' | 'html';
    constructor(elRef: ElementRef<HTMLElement>, renderer: Renderer2, changeDetectorRef: ChangeDetectorRef);
    protected onChange: (value: Content) => void;
    protected onTouched: () => void;
    writeValue(value: Content): void;
    registerOnChange(fn: () => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    protected handleChange: ({ editor, transaction }: EditorEvents['transaction']) => void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EditorDirective, "tiptap[editor], [tiptap][editor], tiptap-editor[editor], [tiptapEditor][editor]", never, { "editor": { "alias": "editor"; "required": false; }; "outputFormat": { "alias": "outputFormat"; "required": false; }; }, {}, never, never, false, never>;
}
