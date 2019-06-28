//const fs = require('fs')

// Callback hell:
/*
fs.readFile('temporizador.js', (err, data) => {
    fs.writeFile('temporizador-copy.js', data, (err) => {
        console.log('Arquivo copiado')
    })
})
*/

// Solucao: Promises + Async/Await

/*
readFile('temporizador.js')
    .then(data => writeFile('copia-promise.js',data))
    .then(() => console.log('Arquivo copiado'))
    .catch(err => console.log(err))
*/




// Melhorando...: Async/Await:

//const fs = require('./fs-promise')
//const readFile = fs.readFile
//const writeFile = fs.writeFile
const { readFile, writeFile} = require('./fs-promise')//Destructive assigment


const copyFile = async() => {
    console.log('Ola async/Await')
    try {
        const data = await readFile('temporizador.js')
        await writeFile('copy-async-await.js', data)
        console.log('Arquivo lido e escrito')
    } catch(err) {
        console.log('erro', err)
    }
}
copyFile().then(() => console.log('fim do async/await'))