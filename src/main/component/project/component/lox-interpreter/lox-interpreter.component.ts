import { Component } from '@angular/core';
import { Text } from '@codemirror/state';
import { CodemirrorComponent } from '../../../codemirror/codemirror.component';
import { Lexer } from './lexer/lexer';
import { Token, TokenType } from './token/token';
import { XtermComponent } from '../../../xterm/xterm.component';

@Component({
    selector: 'main-lox-interpreter',
    imports: [CodemirrorComponent, XtermComponent],
    templateUrl: './lox-interpreter.component.html',
    styleUrl: './lox-interpreter.component.css'
})
export class LoxInterpreterComponent {
    state: Text | null = null;
    result = "";

    onEditorUpdate(state: Text): void {
        this.state = state;
    }

    onRun(): void {
        if (this.state === null) {
            return;
        }

        const lexer = new Lexer(this.state.toString());
        let token: Token;
        let result = "";
        while ((token = lexer.next()).type !== TokenType.EOF) {
            result += JSON.stringify(token) + '\n';
        }
        result += JSON.stringify(token) + '\n';
        this.result = result;
    }
}
