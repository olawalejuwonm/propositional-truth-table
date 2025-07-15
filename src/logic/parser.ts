export function parseFormula(formula: string): any {
    // Remove Unicode apostrophes used as complement notation
    formula = formula.replace(/’/g, '');
    // Normalize Unicode logical symbols to ASCII equivalents
    // Keep '^' for XOR operator
    // Normalize Unicode logical symbols to ASCII equivalents
    // Treat both ∧ and ^ as AND
    formula = formula.replace(/¬/g, '!')
                     .replace(/[∧^]/g, '&')  // AND
                     .replace(/[∨V]/g, '|'); // OR
    // Tokenize formula for parsing (variables, &, |, !, parentheses)
    // Support both ASCII and Unicode logical operators
    // Tokenize: variables, !, &, |, parentheses
    const tokens = formula.match(/\w+|[&|!()]/g);
    if (!tokens) {
        throw new Error("Invalid formula");
    }

    const output: any[] = [];
    const stack: { type: string; value?: string }[] = [];

    tokens.forEach(token => {
        // Process each token
        if (/\w+/.test(token)) {
            // Variable names: strip any non-word characters
            const varName = token.replace(/[^\w]/g, '');
            output.push({ type: 'variable', value: varName });
        } else if (token === '!') {
            // Push NOT operator
            stack.push({ type: '!' });
        } else if (token === '&' || token === '|') {
            while (stack.length && precedence(stack[stack.length - 1].type) >= precedence(token)) {
                output.push(stack.pop());
            }
            stack.push({ type: token });
        } else if (token === '(') {
            stack.push({ type: token });
        } else if (token === ')') {
            while (stack.length && stack[stack.length - 1].type !== '(') {
                output.push(stack.pop());
            }
            stack.pop(); // Remove the '('
        }
    });

    while (stack.length) {
        output.push(stack.pop());
    }

    return output;
}

function precedence(op: string): number {
    if (op === '!') return 3;
    if (op === '&') return 2;
    if (op === '^') return 2; // XOR operator precedence same as AND
    if (op === '|') return 1;
    return 0;
}