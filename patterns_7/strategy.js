class Piece { //@abstractclass
    constructor(positions = [], color, num_of_moves, move_rule) {
        this.positions = positions;
        this.color = color; // either black or white
        this.num_of_moves = num_of_moves;
        this.move_rule = move_rule;

        if (this.constructor === Piece) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    move(new_positions = []) {
        return {};
    }
    static checkPositionRange(positions) { // static method
        return;
    }
    printInfo() {
        return null;
    }
}

class Knight extends Piece{
    constructor() {
        super();
    }
    move() {
        return knight_move;
    }
}

class Bishop extends Piece {
    constructor() {
        super();
    }
    move() {
        return bishop_move;
    }
}

//@abstractclass
//also a context
class MoveRule {
    constructor(move_rule) {
        this.move_rule = move_rule;

        if (this.constructor === MoveRule) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    //@abstractmethod
    getAllMoves() {
        throw new Error('You have to implement the method...');
    }
}

//strategy 1
class KnightMove extends MoveRule {
    positions = [];
    constructor(move_rule) {
        super();
        this.move_rule = move_rule;
    }
    getAllMoves() {
        console.log(this.positions);
    }
}
//
//strategy 2
class BishopMove extends MoveRule {
    positions = [];
    constructor(move_rule) {
        super();
        this.move_rule = move_rule;
    }
    getAllMoves() {
        console.log(this.positions);
    }
}

// let move_rule = new MoveRule(); // leads to an error


let knight_move = new KnightMove('move multiple squares');
let knight = new Knight(knight_move);

let bishop_move = new BishopMove(' move diagonally');
let bishop = new Bishop();

knight_move.getAllMoves();
bishop_move.getAllMoves();
