const fs = require('fs');
const colors = require('colors')

const createFile = async(base = 5, list = false, to = 10) => {
    console.log(colors.green('============================================'))
    console.log(colors.red('Multiplicasionnn'))
    console.log(colors.green('============================================'))
    let output = '';

    for(let i = 1; i <= to; i++){
        output += `${base} x ${i} = ${i*base} \n`

    }

    if(list){
        console.log(colors.rainbow(output))
    }
        
    try{
        fs.writeFileSync(`table-${base}.txt`, output)
        return `table-${base}.txt`
    } catch(err){
        return err;
    }
}

module.exports = {
    createFile
}