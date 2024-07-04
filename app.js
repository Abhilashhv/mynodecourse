const c = require('lodash')
const items = [1,[2,[3,[4]]]]
console.log(c.flatMapDeep(items))