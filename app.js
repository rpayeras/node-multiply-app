const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs')
const colors = require('colors')
const {base, list, to} = argv

console.clear()

console.log(argv)

createFile(base ,list, to)
.then((msg) => {
    console.log(colors.rainbow(msg))
})
.catch((err) => {
    console.log(err)
})

// console.log(process.argv);