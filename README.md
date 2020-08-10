# master-mind-bot

A simpley bot of Master Mind(a.k.a Hit & Blow)

## Installation

```
npm i master-mind-bot --save
```

## Quick Start
```javascript
import MsterMindBot from "master-mind-bot";

// give answer
const bot = new MsterMindBot(1234);

// run bot calculation
while (true) {
  let res = bot.execute();
  if (res.field.get() === (1234).toString().split('')) break;
}
```

## Usage

### `Bot(value, digit, level, duplicate)`

Lightweight master mind solver. It can be used as a CPU.

#### args

__value__ `(number | string)` `required`

Answer that Bot should calculate.

__digit__ `number` `4`

Number of digits in sequence. Default is 4. If the __value__ is less than this value, it is zero-padded

```javascript
const bot = new MsterMindBot(1234, 5);
// answer is interpreted as "012345"
```

__level__ `number` `1`

The higher this value, the more accurate the prediction. Default is 1.

*Features to be implemented

__duplicate__ `number` `false`

Allow duplicate numbers. Default is false.

#### method

__execute() => Hint__

Narrowing down the correct answer. Returns the values used to narrow the search and the results.

```javascript
const bot = new MsterMindBot(1234, 5);

bot.execute()
// it return this value. More type information is described below.
// {
//   field: Field;
//   answer: Answer;
// }
```

__isOver() => boolean__

One candidate is decided or not.

__getPotential() => number__

Number of candidates remaining.

__getHints() => Hint[]__

A history of tips.

__info() => void__

Debugging information is output to the console.

### `Field(value, digit)`

Support class of Bot class. This is also useful for the implementation of Master Mind Application.
#### args

__value__ `(number | string)` `required`

The value you want to manipulate.

__digit__ `number` `required`

Number of digits in sequence. If the __value__ is less than this value, it is zero-padded

#### method

__get() => string[]__

Get the set value as an array of zeroed strings.

__answer(value: Field) => Answer__

Compares the set value with the value of the argument, and returns the number of hits and the number of blows.

```javascript
const f1 = new Field(1234, 4);
const f2 = new Field(1024, 4);

f1.answer(f2);
// it return this value.
// {
//    hit: 2,
//    blow: 1
// }
```

__isDuplicated() => boolean__

The value contains a duplicate value.

__info() => void__

Debugging information is output to the console.

## Develop

```
npm install
```