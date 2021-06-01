const { john } = require("./firstModule");
const sayHi = require("./secondModule");
const data = require("./alternative");
require("./grenade");

console.log(data);
console.log(john);
sayHi(john);
