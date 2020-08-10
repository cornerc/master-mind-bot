import { Field, Answer } from "./masterMind";
declare type Hint = {
    field: Field;
    answer: Answer;
};
export { Field };
export default class MsterMindBot {
    private digit;
    private level;
    private duplicate;
    private correct;
    private candidate;
    constructor(value: number | string, digit?: number, level?: number, duplicate?: boolean);
    execute(): Hint;
    isOver(): boolean;
    getPotential(): number;
    getHints(): Hint[];
    info(): void;
}
