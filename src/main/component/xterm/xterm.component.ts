import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { Subject } from 'rxjs';

@Component({
    selector: 'main-xterm',
    imports: [],
    templateUrl: './xterm.component.html',
    styleUrl: './xterm.component.css',
    encapsulation: ViewEncapsulation.None
})
export class XtermComponent implements OnChanges, OnInit, OnDestroy {
    @ViewChild('xterm', { read: ElementRef, static: true }) xterm!: ElementRef<HTMLElement>;

    @Input({ required: true }) text!: string;

    term: Terminal | null = null;

    resize = new Subject<void>();
    $resize = new ResizeObserver(() => {
        this.resize.next();
    });

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['text'] !== undefined) {
            if (this.term === null) {
                return;
            }
            this.term.clear();
            this.term.write(this.text);
        }
    }

    ngOnInit(): void {
        const fitAddon = new FitAddon();

        this.term = new Terminal({ convertEol: true, disableStdin: true });
        this.term.loadAddon(fitAddon);

        this.term.open(this.xterm.nativeElement);
        fitAddon.fit();

        this.$resize.observe(this.xterm.nativeElement);

        let timeout: NodeJS.Timeout;
        this.resize.subscribe(() => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                fitAddon.fit();
            }, 50);
        });
    }

    ngOnDestroy(): void {
        this.$resize.disconnect();
    }
}
