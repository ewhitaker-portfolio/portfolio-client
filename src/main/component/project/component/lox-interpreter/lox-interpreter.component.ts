import { Component } from '@angular/core';
import { CodemirrorComponent } from '../../../codemirror/codemirror.component';
import { LoxInterpreterService } from './lox-interpreter.service';

@Component({
    selector: 'main-lox-interpreter',
    imports: [CodemirrorComponent],
    templateUrl: './lox-interpreter.component.html',
    styleUrl: './lox-interpreter.component.css'
})
export class LoxInterpreterComponent {
    constructor(
        public lox: LoxInterpreterService
    ) { }

    onClick(): void {
        this.lox.run.next(true);
    }
}
