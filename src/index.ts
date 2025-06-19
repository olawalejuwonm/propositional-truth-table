// src/index.ts
import * as readline from 'readline';
import { parseFormula } from './logic/parser';
import { generateTruthTable } from './logic/truthTable';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const promptUser = () => {
    rl.question('Enter a propositional logic formula: ', (input) => {
        const formula = parseFormula(input);
        const truthTable = generateTruthTable(input, formula);
        console.log(truthTable);
        promptUser(); // Prompt again for another formula
    });
};

console.log('Welcome to the Propositional Logic Truth Table Generator!');
promptUser();