
// Class Declaration
// class Calculator {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
//     add() {
//         return this.a + this.b;
//     }

//     multiply() {
//         return this.a * this.b;
//     }

//     divide() {
//         return this.a / this.b;
//     }
// }

// Class Expression
module.exports = class {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }

    multiply() {
        return this.a * this.b;
    }

    divide() {
        return this.a / this.b;
    }
};