"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
const masterMind_1 = require("./masterMind");
Object.defineProperty(exports, "Field", { enumerable: true, get: function () { return masterMind_1.Field; } });
class MsterMindBot {
    constructor(value, digit = 4, level = 1, duplicate = false) {
        this.digit = digit;
        this.level = level;
        this.duplicate = duplicate;
        this.correct = new masterMind_1.Field(value, this.digit);
        this.candidate = new Candidate(this.digit, this.duplicate);
    }
    execute() {
        const field = this.candidate.getRandomField();
        const answer = this.correct.answer(field);
        this.candidate.calculate({ field, answer });
        return { field, answer };
    }
    isOver() {
        return this.candidate.isOver();
    }
    getPotential() {
        return this.candidate.getPotential();
    }
    getHints() {
        return this.candidate.getHints();
    }
    info() {
        console.log(`digit：${this.digit}`, `level：${this.level}`, `duplivated：${this.duplicate}`);
        this.correct.info();
        this.candidate.info();
    }
}
exports.default = MsterMindBot;
class Candidate {
    constructor(digit, duplicate) {
        this.fields = [];
        this.hints = [];
        const max = Math.pow(10, digit);
        for (let i = 0; i < max; i++) {
            const field = new masterMind_1.Field(i, digit);
            if (!duplicate && field.isDuplicated())
                continue;
            this.fields.push(field);
        }
    }
    getRandomField() {
        const index = Math.floor(Math.random() * Math.floor(this.fields.length));
        return this.fields[index];
    }
    calculate(hint) {
        this.hints.push(hint);
        let beforeLength = this.fields.length;
        for (let i = beforeLength - 1; i >= 0; i--) {
            const answer = this.fields[i].answer(hint.field);
            if (hint.answer.hit != answer.hit || hint.answer.blow != answer.blow) {
                this.fields.splice(i, 1);
            }
        }
    }
    isOver() {
        return this.fields.length === 1;
    }
    getPotential() {
        return this.fields.length;
    }
    getHints() {
        return this.hints;
    }
    info() {
        console.log(`potential:${this.fields.length}`);
        if (this.hints.length > 0) {
            for (let hint of this.hints) {
                console.log(`hint:${hint.field.get()}`, `hit:${hint.answer.hit}`, `blow:${hint.answer.blow}`);
            }
        }
    }
}
