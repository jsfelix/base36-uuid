# base36-uuid

Base36 version of universally unique identifier (UUID) for Node.js.

## Description

This module uses `crypto.randomUUID()` and `Math.random()` to generate a
random-sized base36 version of the UUIDv4. To ensure that the id starts with a
letter, a random letter is added at the beginning of the result.

This is a good option to generate ids that will be used safely in browsers, as
it uses only alphanumeric characters, and is case insensitive.

## Usage

```js
import uid from "base36-uuid";

console.log(uid());

// b14g68lgtkffkdr5t25x4udyrrx
```

## Credit

Created by [Jefferson Felix](https://github.com/jsfelix).
