# master-mind-bot

A simpley bot of Master Mind(a.k.a Hit & Blow)

## Installation

```
npm i master-mind-bot --save
```

## Basic Usage

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

## Develop

```
npm install
```