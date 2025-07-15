# Propositional Truth Table Generator

A command-line tool for generating and analyzing truth tables for propositional logic formulas. This TypeScript application evaluates logical expressions for all possible combinations of truth values and provides a comprehensive truth table output.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Supported Symbols](#supported-symbols)
- [Example Formulas](#example-formulas)
- [Output Examples](#output-examples)
- [Formula Comparison](#formula-comparison)
- [Contributing](#contributing)
- [License](#license)

## Features

- ✅ Supports standard logical operators (AND, OR, NOT, etc.)
- ✅ Handles Unicode and ASCII symbols for logical operations
- ✅ Automatically extracts variables from formulas
- ✅ Generates complete truth tables with all possible combinations
- ✅ Evaluates complex nested expressions
- ✅ Compares formulas for logical equivalence
- ✅ Interactive command-line interface

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/olawalejuwonm/propositional-truth-table.git
cd propositional-truth-table
npm install
```

## Usage

To run the application:

```bash
npm start
```

You will be prompted to enter a propositional logic formula. After entering the formula, the application will display the corresponding truth table. Type `exit` to quit the program.

### Supported Symbols

| Symbol | Meaning | Alternative Input |
|--------|---------|------------------|
| ¬      | NOT     | !                |
| ∧      | AND     | &, ^, &&         |
| ∨      | OR      | V, \|\|          |
| →      | IMPLIES | -> (not yet implemented) |
| ↔      | BICONDITIONAL | <-> (not yet implemented) |

### Example Formulas

Here are some formulas you can try:

- Basic operators: `p ∧ q`
- Negation: `¬p ∨ q`
- Complex formulas: `(¬ request ∧ button) ^ ¬ old_sl`
- Logical equivalence check: `(old_sh ∧ ¬ old_sl) ∨ (¬ old_sh ∧ old_sl)`

### Output Examples

When you enter a formula like `p ∧ q`, the output will look like:

```
Starting evaluation for formula: p && q which should have total rows: 4

Row 1: p=false, q=false, Result: false
Row 2: p=false, q=true, Result: false
Row 3: p=true, q=false, Result: false
Row 4: p=true, q=true, Result: true

All Results: [false,false,false,true]
```

## Formula Comparison

You can check if two formulas are logically equivalent:

1. Enter the first formula and note the results array
2. Enter the second formula and note the results array
3. The application provides a comparison function that checks if both formulas produce the same truth values for all variable combinations

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.