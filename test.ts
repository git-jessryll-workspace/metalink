import { metalink } from ".";

const meta = metalink('https://fertl.com.au', {
    screenshot: true,
    colorScheme: 'dark'
});
console.log(meta.then(res => console.log(res)));