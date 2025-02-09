import { Token, TokenType } from "../token/token";

export class Lexer {
    static keywords = new Map<string, TokenType>();

    static {
        Lexer.keywords.set("class", TokenType.CLASS);
        Lexer.keywords.set("fun", TokenType.FUN);
        Lexer.keywords.set("var", TokenType.VAR);
        Lexer.keywords.set("for", TokenType.FOR);
        Lexer.keywords.set("if", TokenType.IF);
        Lexer.keywords.set("else", TokenType.ELSE);
        Lexer.keywords.set("print", TokenType.PRINT);
        Lexer.keywords.set("return", TokenType.RETURN);
        Lexer.keywords.set("while", TokenType.WHILE);
        Lexer.keywords.set("or", TokenType.OR);
        Lexer.keywords.set("and", TokenType.AND);
        Lexer.keywords.set("true", TokenType.TRUE);
        Lexer.keywords.set("false", TokenType.FALSE);
        Lexer.keywords.set("nil", TokenType.NIL);
        Lexer.keywords.set("this", TokenType.THIS);
        Lexer.keywords.set("super", TokenType.SUPER);
    }

    ch: string = '\0';

    start = 0;
    current = 0;

    constructor(
        public input: string
    ) { }

    next(): Token {
        while (!this.eof()) {
            this.start = this.current;

            this.ch = this.advance();
            switch (this.ch) {
                case '(': return this.emit(TokenType.LEFT_PAREN);
                case ')': return this.emit(TokenType.RIGHT_PAREN);
                case '{': return this.emit(TokenType.LEFT_BRACE);
                case '}': return this.emit(TokenType.RIGHT_BRACE);
                case ',': return this.emit(TokenType.COMMA);
                case '.': return this.emit(TokenType.DOT);
                case ';': return this.emit(TokenType.SEMICOLON);
                case '+': return this.emit(TokenType.PLUS);
                case '-': return this.emit(TokenType.MINUS);
                case '*': return this.emit(TokenType.STAR);
                case '/': return this.emit(TokenType.SLASH);
                case '=': {
                    if (this.match('=')) {
                        return this.emit(TokenType.EQUAL_EQUAL);
                    } else {
                        return this.emit(TokenType.EQUAL);
                    }
                }
                case '!': {
                    if (this.match('=')) {
                        return this.emit(TokenType.BANG_EQUAL);
                    } else {
                        return this.emit(TokenType.BANG);
                    }
                }
                case '>': {
                    if (this.match('=')) {
                        return this.emit(TokenType.GREATER_EQUAL);
                    } else {
                        return this.emit(TokenType.GREATER);
                    }
                }
                case '<': {
                    if (this.match('=')) {
                        return this.emit(TokenType.LESS_EQUAL);
                    } else {
                        return this.emit(TokenType.LESS);
                    }
                }
                case '\t':
                case '\r':
                case '\n':
                case ' ':
                    break;
                case '"': return this.string();
                default: {
                    if (Lexer.isAlpha(this.ch)) {
                        return this.identifier();
                    } else if (Lexer.isDigit(this.ch)) {
                        return this.number();
                    }
                    return this.emit(TokenType.ILLEGAL);
                }
            }
        }

        return this.emitWithLexeme(TokenType.EOF, "");
    }

    string(): Token {
        while (this.peek() !== '"' && this.peek() !== '\n' && this.peek() !== '\0') {
            this.ch = this.advance();
        }

        this.ch = this.advance();
        if (this.ch !== '"') {
            return this.emit(TokenType.ILLEGAL);
        }

        const lexeme = this.input.substring(this.start + 1, this.current - 1);
        return this.emitWithLexeme(TokenType.STRING, lexeme);
    }

    identifier(): Token {
        while (Lexer.isAlphaNumeric(this.peek())) {
            this.ch = this.advance();
        }
        const lexeme = this.input.substring(this.start, this.current);
        const type = Lexer.keywords.get(lexeme) ?? TokenType.IDENT;
        return this.emitWithLexeme(type, lexeme);
    }

    number(): Token {
        while (Lexer.isDigit(this.peek())) {
            this.ch = this.advance();
        }

        if (this.peek() === '.') {
            this.ch = this.advance();
            while (Lexer.isDigit(this.peek())) {
                this.ch = this.advance();
            }
        }
        const lexeme = this.input.substring(this.start, this.current);
        return this.emitWithLexeme(TokenType.NUMBER, lexeme);
    }

    match(ch: string): boolean {
        if (this.peek() === ch) {
            this.ch = this.advance();
            return true;
        }
        return false;
    }

    advance(): string {
        return this.input.charAt(this.current++);
    }

    peek(): string {
        if (this.current >= this.input.length) {
            return '\0';
        }
        return this.input.charAt(this.current);
    }


    emit(type: TokenType): Token {
        return this.emitWithLexeme(type, this.input.substring(this.start, this.current));
    }

    emitWithLexeme(type: TokenType, lexeme: string): Token {
        return new Token(type, lexeme);
    }

    static isAlphaNumeric(ch: string): boolean {
        return Lexer.isAlpha(ch) || Lexer.isDigit(ch);
    }

    static isAlpha(ch: string): boolean {
        return (ch >= 'A' && ch <= 'Z') ||
            (ch >= 'a' && ch <= 'z') ||
            ch === '_';
    }

    static isDigit(ch: string): boolean {
        return ch >= '0' && ch <= '9';
    }

    eof(): boolean {
        return this.current >= this.input.length;
    }
}
