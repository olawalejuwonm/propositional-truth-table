export function generateTruthTable(formulaTokens: any[], verbose: boolean = false): string {
    // Extract variable names from parsed tokens
    const variables: string[] = Array.from(
        new Set(
            formulaTokens
                .filter(token => token.type === 'variable')
                .map(token => token.value)
        )
    );
    const numRows = 2 ** variables.length;
    let truthTable = '';

    // Generate header
    truthTable += variables.join(' | ') + ' | Result\n';
    truthTable += '-'.repeat(truthTable.length - 1) + '\n';

    // Generate rows
    for (let i = 0; i < numRows; i++) {
        const row: { [key: string]: boolean } = {};
        if (verbose) console.log(`\n-- Row ${i+1}/${numRows} --`);

        // Assign truth values to variables
        variables.forEach((variable, index) => {
            row[variable] = Boolean((i >> (variables.length - 1 - index)) & 1);
            if (verbose) console.log(`  ${variable} = ${row[variable]}`);
        });

        // Evaluate the formula (placeholder logic)
        const result = evaluateFormula(formulaTokens, row);
        if (verbose) console.log(`  => Result: ${result}`);

        // Format the row
        truthTable += variables.map(v => (row[v] ? 'T' : 'F')).join(' | ')
            + ' | ' + (result ? 'T' : 'F') + '\n';
    }

    return truthTable;
}

// Placeholder for formula evaluation logic
function evaluateFormula(tokens: any[], values: { [key: string]: boolean }): boolean {
    // Evaluate the postfix token list using a stack
    const stack: boolean[] = [];
    tokens.forEach(token => {
        if (token.type === 'variable') {
            stack.push(values[token.value]);
        } else if (token.type === '!') {
            const v = stack.pop()!;
            stack.push(!v);
        } else if (token.type === '&' || token.type === '|' || token.type === '^') {
            const b = stack.pop()!;
            const a = stack.pop()!;
            if (token.type === '&') {
                stack.push(a && b);
            } else if (token.type === '|') {
                stack.push(a || b);
            } else { // XOR
                stack.push(a !== b);
            }
        }
    });
    return stack.pop()!;
}