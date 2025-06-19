// src/index.ts
import * as readline from 'readline';
import { parseFormula } from './logic/parser';
import { generateTruthTable } from './logic/truthTable';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const promptUser = () => {
//     rl.question('Enter a propositional logic formula: ', (input) => {
//         const formula = parseFormula(input);
//         // const truthTable = generateTruthTable(input, formula);
//         // console.log(truthTable);
        
//         promptUser(); // Prompt again for another formula
//     });
// };

console.log('Welcome to the Propositional Logic Truth Table Generator!');
const formula1String = ' ¬ x ∧ y'
// for (let x = 0; x < 2; x++) {
//     for (let y = 0; y < 2; y++) {
//         console.log(`x: ${x}, y: ${y}`);
//         const formula1 = !x && y; // Example evaluation logic
//         console.log(`Formula: ${formula1String} => Result: ${formula1 ? '1' : '0'}`);
//     }
//     console.log('-------------------');
// }

const formula2String = ' a ⊕ y'
for (let a = 0; a < 2; a++) {
    for (let y = 0; y < 2; y++) {
        console.log(`a: ${a}, y: ${y}`);
        const formula2 = (a || y) && !(a && y); // Example evaluation logic for XOR
        console.log(`Formula: ${formula2String} => Result: ${formula2 ? '1' : '0'}`);
    }
    console.log('-------------------');
}

