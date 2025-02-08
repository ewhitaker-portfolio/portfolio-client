import { Stmt } from "../ast/stmt";
import { Lexer } from "../lexer/lexer";
import { Token } from "../token/token";

export class Parser {
    tok: Token | null = null;

    lexer: Lexer;

    constructor(
        public input: string
    ) {
        this.lexer = new Lexer(input);
    }

    program(): Stmt[] {
        return [];
    }
}
