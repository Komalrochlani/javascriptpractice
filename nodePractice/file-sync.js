const fs = require("fs");

const first = fs.readFileSync("./content/first.txt","utf-8");
const second = fs.readFileSync("./content/second.txt","utf-8");
console.log(first + second);

//fs.writeFileSync("./content/third.txt",first +second);
fs.writeFileSync("./content/third.txt",`new content heloooo:${first} ${second}`,{flag :'a'});

console.log("program ends")