const _ = require("lodash");

const items = [1, [2, [3, [4, [5]]]]];
const nreItems = _.flattenDeep(items);
console.log(nreItems);
console.log("나나");
