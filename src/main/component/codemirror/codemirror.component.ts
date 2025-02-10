import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { crosshairCursor, drawSelection, dropCursor, highlightActiveLine, highlightActiveLineGutter, highlightSpecialChars, keymap, lineNumbers, rectangularSelection } from '@codemirror/view';
import { EditorState, Text } from '@codemirror/state';
import { bracketMatching, defaultHighlightStyle, foldGutter, foldKeymap, indentOnInput, syntaxHighlighting } from '@codemirror/language';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search';
import { autocompletion, closeBrackets, closeBracketsKeymap, completionKeymap } from '@codemirror/autocomplete';
import { lintKeymap } from '@codemirror/lint';
import { EditorView } from 'codemirror';

@Component({
    selector: 'main-codemirror',
    imports: [],
    templateUrl: './codemirror.component.html',
    styleUrl: './codemirror.component.css',
    encapsulation: ViewEncapsulation.None
})
export class CodemirrorComponent implements OnInit, OnDestroy {
    @ViewChild('codemirror', { read: ElementRef, static: true }) container!: ElementRef<HTMLElement>;

    view: EditorView | null = null;

    @Output() update = new EventEmitter<Text>();

    ngOnInit(): void {
        this.view = new EditorView({
            parent: this.container.nativeElement,
            extensions: [
                lineNumbers(),
                highlightActiveLineGutter(),
                highlightSpecialChars(),
                history(),
                foldGutter(),
                drawSelection(),
                dropCursor(),
                EditorState.allowMultipleSelections.of(true),
                indentOnInput(),
                syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
                bracketMatching(),
                closeBrackets(),
                autocompletion(),
                rectangularSelection(),
                crosshairCursor(),
                highlightActiveLine(),
                highlightSelectionMatches(),
                keymap.of([
                    ...closeBracketsKeymap,
                    ...defaultKeymap,
                    ...searchKeymap,
                    ...historyKeymap,
                    ...foldKeymap,
                    ...completionKeymap,
                    ...lintKeymap
                ]),
                EditorView.lineWrapping,
                EditorView.updateListener.of(update => {
                    if (update.docChanged) {
                        this.update.emit(update.state.doc);
                    }
                })
            ],
        });
    }

    ngOnDestroy(): void {
        if (this.view !== null) {
            this.view.destroy();
        }
    }
}
