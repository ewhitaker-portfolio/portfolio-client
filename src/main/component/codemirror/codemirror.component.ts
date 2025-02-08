import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { basicSetup, EditorView } from 'codemirror';
import { LoxInterpreterService } from '../project/component/lox-interpreter/lox-interpreter.service';

@Component({
    selector: 'main-codemirror',
    imports: [],
    templateUrl: './codemirror.component.html',
    styleUrl: './codemirror.component.css'
})
export class CodemirrorComponent implements OnInit {
    @ViewChild('codemirror', { read: ElementRef, static: true }) container!: ElementRef;

    view: EditorView | null = null;

    constructor(
        public lox: LoxInterpreterService
    ) {
        lox.run.subscribe(execute => {
            if (execute && this.view !== null) {
                lox.parse.next(this.view.state.doc.toString());
            }
        });
    }

    ngOnInit(): void {
        this.view = new EditorView({
            parent: this.container.nativeElement,
            extensions: [basicSetup]
        });
    }
}
