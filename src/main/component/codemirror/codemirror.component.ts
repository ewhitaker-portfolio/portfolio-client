import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { basicSetup, EditorView } from 'codemirror';

@Component({
    selector: 'main-codemirror',
    imports: [],
    templateUrl: './codemirror.component.html',
    styleUrl: './codemirror.component.css'
})
export class CodemirrorComponent implements OnInit {
    @ViewChild('codemirror', { read: ElementRef, static: true }) container!: ElementRef;

    view: EditorView | null = null;

    ngOnInit(): void {
        this.view = new EditorView({
            parent: this.container.nativeElement,
            extensions: [basicSetup]
        });
    }
}
