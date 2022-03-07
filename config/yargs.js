const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    description: 'A base number to multiply'
})
.option('l', {
    alias: 'list',
    type: 'boolean',
    demandOption: false,
    description: 'Show a list of multiply on console'
})
.option('t', {
    alias: 'to',
    type: 'number',
    demandOption: false,
    description: 'Limit of multiplications'
})
.check((argv, options) => {
    if(isNaN(argv.b)){
        throw 'Base must be a number'
    }

    return true;
})
.argv

module.exports = argv;