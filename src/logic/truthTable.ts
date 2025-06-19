export function generateTruthTable(input: string, formula: any): string {
    // Extract variables from the original input string
    const variables: string[] = Array.from(new Set(input.match(/[A-Z]/g) || []));
    const numRows = 2 ** variables.length;
    let truthTable = '';

    // Generate header
    truthTable += variables.join(' | ') + ' | Result\n';
    truthTable += '-'.repeat(truthTable.length - 1) + '\n';

    // Generate rows
    for (let i = 0; i < numRows; i++) {
        const row: { [key: string]: boolean } = {};
        
        // Assign truth values to variables
        variables.forEach((variable: string, index: number) => {
            row[variable] = Boolean((i >> (variables.length - 1 - index)) & 1);
        });

        // Evaluate the formula (this is a placeholder for actual evaluation logic)
        const result = evaluateFormula(formula, row);
        
        // Format the row for output
        truthTable += variables.map((v: string) => (row[v] ? 'T' : 'F')).join(' | ') + ' | ' + (result ? 'T' : 'F') + '\n';
    }

    return truthTable;
}

// Placeholder for formula evaluation logic
function evaluateFormula(formula: any, values: { [key: string]: boolean }): boolean {
    // Implement the logic to evaluate the formula based on the values
    return true; // Replace with actual evaluation
}