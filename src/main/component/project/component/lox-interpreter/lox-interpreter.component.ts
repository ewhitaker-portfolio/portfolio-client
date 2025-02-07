import { Component } from '@angular/core';
import { CodemirrorComponent } from '../../../codemirror/codemirror.component';

@Component({
    selector: 'main-lox-interpreter',
    imports: [CodemirrorComponent],
    templateUrl: './lox-interpreter.component.html',
    styleUrl: './lox-interpreter.component.css'
})
export class LoxInterpreterComponent {

}
