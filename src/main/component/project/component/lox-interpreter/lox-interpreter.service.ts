import { Injectable } from '@angular/core';
import { Token } from './token/token';
import { TokenType } from './token/token-type';
import { BehaviorSubject } from 'rxjs';
import { Parser } from './parser/parser';
import { Lexer } from './lexer/lexer';

@Injectable({
    providedIn: 'root'
})
export class LoxInterpreterService {
    run = new BehaviorSubject<boolean>(false);
    parse = new BehaviorSubject<string>("");

    constructor() {
        this.parse.subscribe(input => {
            if (input !== "") {
                const lexer = new Lexer(input);
                let token: Token;
                while ((token = lexer.next()).type !== TokenType.EOF) {
                    console.log(token);
                }
            }
        });
    }
}
