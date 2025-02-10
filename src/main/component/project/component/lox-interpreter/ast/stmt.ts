class Block {
    constructor(
        public statements: Stmt[],
    ) { }
}

export type Stmt = Block;

export { Block };
