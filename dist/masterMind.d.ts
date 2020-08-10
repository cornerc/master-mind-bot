export declare type Answer = {
    hit: number;
    blow: number;
};
export declare class Field {
    private value;
    constructor(value: number | string, digit: number);
    get(): string[];
    answer(value: Field): Answer;
    isDuplicated(): boolean;
    info(): void;
}
