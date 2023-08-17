"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const meta = (0, _1.metalink)('https://fertl.com.au', {
    screenshot: true,
    colorScheme: 'dark'
});
console.log(meta.then(res => console.log(res)));
