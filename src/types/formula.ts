export interface Variable {
    name: string;
    value: boolean;
}

export interface Formula {
    type: 'variable' | 'negation' | 'conjunction' | 'disjunction' | 'implication' | 'biconditional';
    left?: Formula;
    right?: Formula;
    variable?: Variable;
}