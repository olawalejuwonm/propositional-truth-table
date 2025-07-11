export function generateTruthTable(formulaTokens: any[]): string {
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

        // Assign truth values to variables
        variables.forEach((variable, index) => {
            row[variable] = Boolean((i >> (variables.length - 1 - index)) & 1);
        });

        // Evaluate the formula (placeholder logic)
        const result = evaluateFormula(formulaTokens, row);

        // Format the row
        truthTable += variables.map(v => (row[v] ? 'T' : 'F')).join(' | ')
            + ' | ' + (result ? 'T' : 'F') + '\n';
    }

    return truthTable;
}

// Placeholder for formula evaluation logic
function evaluateFormula(formula: any, values: { [key: string]: boolean }): boolean {
    // Implement the logic to evaluate the formula based on the values
    return true; // Replace with actual evaluation
}