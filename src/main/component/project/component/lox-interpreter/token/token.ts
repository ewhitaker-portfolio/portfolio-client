const TokenType = {
    EOF: 0,

    LEFT_PAREN: 1,
    RIGHT_PAREN: 2,
    LEFT_BRACE: 3,
    RIGHT_BRACE: 4,
    COMMA: 5,
    DOT: 6,
    DQUOTE: 7,
    SEMICOLON: 8,
    PLUS: 9,
    MINUS: 10,
    STAR: 11,
    SLASH: 12,

    EQUAL: 13,
    EQUAL_EQUAL: 14,
    BANG: 15,
    BANG_EQUAL: 16,
    GREATER: 17,
    GREATER_EQUAL: 18,
    LESS: 19,
    LESS_EQUAL: 20,

    IDENT: 21,
    NUMBER: 22,
    STRING: 23,

    CLASS: 24,
    FUN: 25,
    VAR: 26,
    FOR: 27,
    IF: 28,
    ELSE: 29,
    PRINT: 30,
    RETURN: 31,
    WHILE: 32,
    OR: 33,
    AND: 34,
    TRUE: 35,
    FALSE: 36,
    NIL: 37,
    THIS: 38,
    SUPER: 39,

    ILLEGAL: 40
} as const;

type TokenType = typeof TokenType[keyof typeof TokenType];

class Token {
    constructor(
        public type: TokenType,
        public lexeme: string
    ) { }
}

export { Token, TokenType };
