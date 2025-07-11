export function parseFormula(formula: string): any {
    // Normalize logical symbols to ASCII equivalents
    formula = formula.replace(/¬/g, '!').replace(/[∧^]/g, '&').replace(/[∨V]/g, '|');
    // Tokenize formula for parsing (variables, &, |, !, parentheses)
    const tokens = formula.match(/\w+|[&|!()]/g);
    if (!tokens) {
        throw new Error("Invalid formula");
    }

    const output: any[] = [];
    const stack: { type: string; value?: string }[] = [];

    tokens.forEach(token => {
        if (/\w+/.test(token)) {
            output.push({ type: 'variable', value: token });
        } else if (token === '!') {
            stack.push({ type: 'not' });
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
    if (op === '|') return 1;
    return 0;
}