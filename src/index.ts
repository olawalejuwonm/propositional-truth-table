// src/index.ts
import * as readline from "readline";
import { parseFormula } from "./logic/parser";
import { generateTruthTable } from "./logic/truthTable";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const promptUser = () => {
//     rl.question('Enter a propositional logic formula: ', (input) => {
//         const formula = parseFormula(input);
//         // const truthTable = generateTruthTable(input, formula);
//         // console.log(truthTable);

//         promptUser(); // Prompt again for another formula
//     });
// };

console.log("Welcome to the Propositional Logic Truth Table Generator!");
// const formula1String = ' ¬ x ∧ y'
// for (let x = 0; x < 2; x++) {
//     for (let y = 0; y < 2; y++) {
//         console.log(`x: ${x}, y: ${y}`);
//         const formula1 = !x && y; // Example evaluation logic
//         console.log(`Formula: ${formula1String} => Result: ${formula1 ? '1' : '0'}`);
//     }
//     console.log('-------------------');
// }

const formula2String = " a ⊕ y";
// for (let a = 0; a < 2; a++) {
//     for (let y = 0; y < 2; y++) {
//         console.log(`a: ${a}, y: ${y}`);
//         const formula2 = (a || y) && !(a && y); // Example evaluation logic for XOR
//         console.log(`Formula: ${formula2String} => Result: ${formula2 ? '1' : '0'}`);
//     }
//     console.log('-------------------');
// }
// console.log('-- Next Formula --');
// const formula3String = '(a ^ ¬y) V (y ^ ¬a )'; // Example formula
// for (let a = 0; a < 2; a++) {
//     for (let y = 0; y < 2; y++) {
//         console.log(`a: ${a}, y: ${y}`);
//         const formula1 = (a && !y) || (y && !a); // Example evaluation logic for the given formula
//         console.log(`Formula: ${formula3String} => Result: ${formula1 ? '1' : '0'}`);
//     }
//     console.log('-------------------');
// }
//         console.log(`Formula: ${formula3String} => Result: ${formula1 ? '1' : '0'}`);
//     }
//     console.log('-------------------');
// }
// console.log('-- Next Formula --');
// const formula4String = '¬ (a ∧ y’) ∧ ¬ (¬ a ∧ ¬ y’)'
// for (let a = 0; a < 2; a++) {
//     for (let y = 0; y < 2; y++) {
//         console.log(`a: ${a}, y: ${y}`);
//         const formula1 = !(a && y) && !(!a && !y); // Example evaluation logic for the given formula
//         console.log(`Formula: ${formula4String} => Result: ${formula1 ? '1' : '0'}`);
//     }
//     console.log('-------------------');
// }
// const formula5String = '¬ (a ^ y) ^ ¬ (¬ a ^ ¬ y)'; // Example formula
// for (let a = 0; a < 2; a++) {
//     for (let y = 0; y < 2; y++) {
//         console.log(`a: ${a}, y: ${y}`);
//         const formula1 = !(a && y) && !(!a && !y); // Example evaluation logic for the given formula
//         console.log(`Formula: ${formula5String} => Result: ${formula1 ? '1' : '0'}`);
//     }
//     console.log('-------------------');
// }
// const formula6String = '¬(¬(a ^ ¬y) ^ ¬(¬a ^ y))'
// for (let a = 0; a < 2; a++) {
//     for (let y = 0; y < 2; y++) {
//         console.log(`a: ${a}, y: ${y}`);
//         const formula1 = !(!(a && !y) && !(!a && y)); // Example evaluation logic for the given formula
//         console.log(`Formula: ${formula6String} => Result: ${formula1 ? '1' : '0'}`);
//     }
//     console.log('-------------------');
// }
// const formula5String = '¬(a ^ ¬y) ^ ¬(¬a ^ y)'; // Example formula
// for (let a = 0; a < 2; a++) {
//     for (let y = 0; y < 2; y++) {
//         console.log(`a: ${a}, y: ${y}`);
//         const formula1 = !(y && !a) && !(!y && a); // Example evaluation logic for the given formula
//         console.log(`Formula: ${formula5String} => Result: ${formula1 ? '1' : '0'}`);
//     }
//     console.log('-------------------');
// }
// const formula6String = 'a V ¬a'; // Example formula
// for (let a = 0; a < 2; a++) {
//     for (let y = 0; y < 2; y++) {
//         console.log(`a: ${a}, y: ${y}`);
//         const formula1 = a || !a; // Example evaluation logic for the given formula
//         console.log(`Formula: ${formula6String} => Result: ${formula1 ? '1' : '0'}`);
//     }
//     console.log('-------------------');
// }
// // a V ¬a with De Morgan's Law
// const formula7String = '¬(¬a ∧ a)'; // Example formula
// for (let a = 0; a < 2; a++) {
//     console.log(`a: ${a}`);
//     const formula1 = !(!a && a); // Example evaluation logic for the given formula
//     console.log(`Formula: ${formula7String} => Result: ${formula1 ? '1' : '0'}`);
// }

let isSame = null; // Flag to check if the formula holds for all combinations
const convertNum1and0ToBoolean = (num: number): boolean => {
  return num === 1;
};
const formula8String = "i ∨ (¬ s ∧ b)"; // Example formula
// for (let iN = 0; iN < 2; iN++) {
//     for (let sN = 0; sN < 2; sN++) {
//         for (let bN = 0; bN < 2; bN++) {
//             let i = convertNum1and0ToBoolean(iN);
//             let s = convertNum1and0ToBoolean(sN);
//             let b = convertNum1and0ToBoolean(bN);
//             console.log(`i: ${i}, s: ${s}, b: ${b}`);
//             const formula1 = i || (!s && b); // Example evaluation logic for the given formula
//             console.log(`Formula: ${formula8String} => Result: ${formula1 ? '1' : '0'}`);
//             // const comparedFormula = ` ¬(¬ i ^ ¬ (¬ s ∧ b) )`; // Example comparison formula
//             const doesFormulaHold = !(!i && !(!s && b)); // Example evaluation logic for the comparison formula
//             // console.log(`comparedFormula: ${comparedFormula} => Result: ${doesFormulaHold ? '1' : '0'}`);
//             if (formula1 === doesFormulaHold) {
//                 isSame = true; // If the formula holds for this combination, set the flag
//             } else {
//                 console.log(`Formula does not hold for i: ${i}, s: ${s}, b: ${b}`);
//                 // console.log(`Expected: ${doesFormulaHold ? '1' : '0'}, Got: ${formula1 ? '1' : '0'}`);
//                 isSame = false; // If it doesn't hold, reset the flag
//                 break; // If it doesn't hold, break the loop
//             }
//             // const formula2 =  !b && s;
//             // console.log(`Formula: ${`¬ b ∧ s`} => Result: ${formula2 ? '1' : '0'}`);
//         }
//     }
//     console.log('-------------------');
// }
const formula9String = "¬(¬ b V s)"; // Example formula
// for (let bN = 0; bN < 2; bN++) {
//     for (let sN = 0; sN < 2; sN++) {
//         let b = convertNum1and0ToBoolean(bN);
//         let s = convertNum1and0ToBoolean(sN);
//         console.log(`b: ${b}, s: ${s}`);
//         const formula1 = !(!b || s);
//         console.log(`Formula: ${formula9String} => Result: ${formula1 ? '1' : '0'}`);
//         const comparedFormula = ` b ^ ¬s`;
//         const doesFormulaHold = (b && !s);
//         console.log(`comparedFormula: ${comparedFormula} => Result: ${doesFormulaHold ? '1' : '0'}`);
//         if (formula1 === doesFormulaHold) {
//             isSame = true; // If the formula holds for this combination, set the flag
//         } else {
//             console.log(`Formula does not hold for b: ${b}, s: ${s}`);
//             // console.log(`Expected: ${doesFormulaHold ? '1' : '0'}, Got: ${formula1 ? '1' : '0'}`);
//             isSame = false; // If it doesn't hold, reset the flag
//             break; // If it doesn't hold, break the loo

//         }
//     }
//     console.log('-------------------');
// }
// const formula10String = '!(!b V s)'; // Example formula
// for (let bN = 0; bN < 2; bN++) {
//     for (let sN = 0; sN < 2; sN++) {
//         let b = convertNum1and0ToBoolean(bN);
//         let s = convertNum1and0ToBoolean(sN);
//         console.log(`b: ${b}, s: ${s}`);
//         const formula1 = !(!b || s);
//         console.log(`Formula: ${formula10String} => Result: ${formula1 ? '1' : '0'}`);
//         const comparedFormula = ` b /\ !s`;
//         const doesFormulaHold = (b && !s);
//         console.log(`comparedFormula: ${comparedFormula} => Result: ${doesFormulaHold ? '1' : '0'}`);
//         if (formula1 === doesFormulaHold) {
//             isSame = true; // If the formula holds for this combination, set the flag
//         } else {
//             console.log(`Formula does not hold for b: ${b}, s: ${s}`);
//             // console.log(`Expected: ${doesFormulaHold ? '1' : '0'}, Got: ${formula1 ? '1' : '0'}`);
//             isSame = false; // If it doesn't hold, reset the flag
//             break; // If it doesn't hold, break the loop
//         }
//     }
//     console.log('-------------------');
// }
// const formula11String = '!(!x ^ !y)';
// for (let xN = 0; xN < 2; xN++) {
//     for (let yN = 0; yN < 2; yN++) {
//         let x = convertNum1and0ToBoolean(xN);
//         let y = convertNum1and0ToBoolean(yN);
//         console.log(`x: ${x}, y: ${y}`);
//         const formula1 = !(!x && !y);
//         console.log(`Formula: ${formula11String} => Result: ${formula1 ? '1' : '0'}`);
//         const comparedFormula = ` x V y`;
//         const doesFormulaHold = (x || y);
//         console.log(`comparedFormula: ${comparedFormula} => Result: ${doesFormulaHold ? '1' : '0'}`);
//         if (formula1 === doesFormulaHold) {
//             isSame = true; // If the formula holds for this combination, set the flag
//         } else {
//             console.log(`Formula does not hold for x: ${x}, y: ${y}`);
//             // console.log(`Expected: ${doesFormulaHold ? '1' : '0'}, Got: ${formula1 ? '1' : '0'}`);
//             isSame = false; // If it doesn't hold, reset the flag
//             break; // If it doesn't hold, break the loop
//         }
//     }
//     console.log('-------------------');
// }
// console.log(`Final Result: ${isSame ? 'The formula holds for all combinations.' : 'The formula does not hold for all combinations.'}`);
// console.log('-- Next Formula --');

// confirm if (¬ request ∧ button ^ ¬ old_sl) and ((¬ request ∧ button) ^ ¬ old_sl)) are equivalent

const parseFormulaDirectly = (input: string) => {
  // Clean the input first
  let cleanInput = input.trim();

  // Replace logic symbols step by step to avoid conflicts

  // replace  /\  with  &&
  cleanInput = cleanInput.replace(/\/\\/g, "&&"); // replace /\ with &&
  cleanInput = cleanInput.replace(/’/g, ""); // Remove Unicode apostrophes used as complement notation
  cleanInput = cleanInput.replace(/¬/g, "!");
  cleanInput = cleanInput.replace(/∧/g, "&&");
  cleanInput = cleanInput.replace(/∨/g, "||");
  cleanInput = cleanInput.replace(/\^/g, "&&");
  cleanInput = cleanInput.replace(/\bV\b/g, "||");

  // Remove extra spaces
  cleanInput = cleanInput.replace(/\s+/g, " ").trim();

  console.log("Input:", input);
  console.log("Cleaned:", cleanInput);

  // Extract variables only from the original input (before symbol replacement)
  const variables = input.match(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g) || [];
  const uniqueVariables = Array.from(new Set(variables));

  return { parsedFormula: cleanInput, variables: uniqueVariables };
};

const truthValues = (input: { parsedFormula: string; variables: string[] }) => {
  const { parsedFormula, variables } = input;
  const numRows = 2 ** variables.length;
  let rowCount = 0;
  console.log(
    `Starting evaluation for formula: ${parsedFormula} which should have total rows: ${numRows}`
  );

  const alreadySingString = new Array<string>();

  for (let i = 0; i < numRows; i++) {
    // Generate a truth assignment for each variable
    const assignment: { [key: string]: boolean } = {};
    variables.forEach((variable, idx) => {
      // It uses an integer i to represent a specific boolean assignment pattern
      // For each variable at index idx in a variables array
      // It calculates which bit position to check using variables.length - idx - 1
      // It then tests if that bit in i is set to 1
      // If the bit is 1, it assigns true to assignment[variable], otherwise false
      assignment[variable] = !!(i & (1 << (variables.length - idx - 1)));
    });
    console.log("Current Assignment:", assignment);
    // Check if the assignment has already been evaluated
    const assignmentKey = JSON.stringify(assignment);

    // alreadySingString.push(
    //   JSON.stringify({
    //     old_sh: false,
    //     old_sl: false,
    //     request: false,
    //     button: false,
    //   })
    // );
    // console.log("Already evaluated assignments:", alreadySingString);

    if (alreadySingString.includes(assignmentKey)) {
      throw new Error(`Already evaluated assignment: ${assignmentKey}`);
    }
    alreadySingString.push(assignmentKey); // Add the assignment to the array to avoid re-evaluation

    // Replace variables in the formula with their assigned values
    let formulaWithValues = parsedFormula;
    for (const [variable, value] of Object.entries(assignment)) {
      const variableRegex = new RegExp(`\\b${variable}\\b`, "g");
      formulaWithValues = formulaWithValues.replace(
        variableRegex,
        value ? "true" : "false"
      );
    }

    // Evaluate the formula
    let result = false;
    try {
      result = eval(formulaWithValues);
    } catch (error) {
      console.error(`  Error evaluating formula: ${error}`, error);
    }

    // Print the row
    const assignmentStr = variables
      .map((v) => `${v}=${assignment[v].toString()}`)
      .join(", ");
    console.log(`Row ${++rowCount}: ${assignmentStr}, Result: ${result}`);
  }
};

rl.question(
  "\n\nEnter a propositional logic formula:",
  function handleInput(input) {
    try {
      const formulaTokens = parseFormulaDirectly(input);
      console.log("Formula Tokens", formulaTokens);
      truthValues(formulaTokens);
    } catch (error) {
      if (error instanceof Error)
        console.error("Error parsing formula:", error.message);
      else console.error("Error parsing formula:", error);
    } finally {
      // Ask for the next formula after evaluation
      rl.question("\n\nEnter a propositional logic formula: ", handleInput);
    }
  }
);
