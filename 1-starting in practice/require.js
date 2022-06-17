//Request a global module using the "require" tag.
const path = require('path')
console.log(path)

//Request a module created in a file using the "require" tag.
const myModule = require('./exports')
console.log(myModule)