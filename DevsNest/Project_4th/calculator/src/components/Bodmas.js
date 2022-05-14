// import React from "react";

// class Bodmas {

//     constructor() {
//         this.algBODMA = ['(', ')', '÷', 'x', '+', '-']
//     }

//     bracketOf_multiplication = (num1, num2) => {
//         return num1 * num2;
//     }

//     division = (num1, num2) => {
//         return num1 / num2;
//     }

//     addition = (num1, num2) => {
//         return num1 + num2;
//     }

//     subtraction = (num1, num2) => {
//         return num1 - num2;
//     }

// }

// const CalBodmas = new Bodmas()

// export const trigger = (expressions) => {
//     switch (expressions[1]) {
//         case '+': return (
//             CalBodmas.addition(+expressions[0], +expressions[2])
//         )
//         case '-': return (
//             CalBodmas.subtraction(+expressions[0], +expressions[2])
//         )
//         case 'x': return (
//             CalBodmas.bracketOf_multiplication(+expressions[0], +expressions[2])
//         )
//         case '÷': return (
//             CalBodmas.division(+expressions[0], +expressions[2])
//         )
//         default: return 'Invalid'
//     }
// }

// export default Bodmas;