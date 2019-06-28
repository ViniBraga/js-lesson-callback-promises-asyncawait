/* 
A lista de arquivos retornado no exercício anterior, também retorna diretórios. 
Crie uma função que retorne todos os sub-diretórios em um vetor (deve-se ignorar os arquivos retornados pelo readdir).

Algumas funções do fs e de Promises que te ajudarão:
fs.stat(caminhoArquivoDiretorio, (err, stats) => {})
stats que é retornado no callback possui um isDirectory() e um isFile()
(sou bonzinho né, cantei a pedra aqui ;) )
Promise.all(vetorDePromises): aguarda um vetor de promises ser executado, e retorna uma promise que retorna para um vetor com o resultado. 
Ex:
    Promise.all([promise1, promise2]).then( results => { 
      results[0] // resultado de promise1
      results[1] // resultado de promise2
    })
este exercício é um pouco mais desafiador; é normal ter um pouco de dificuldade

            OBS:

            let promise1 = Promise.resolve(3);
            let promise2 = 42;
            let promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'foo') );

            Promise
                .all([promise1, promise2, promise3])
                .then(values => console.log(values));
            // expected output: Array [3, 42, "foo"]


*/

const fs = require('fs');

const listAll = path => new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
        if(err) {
            reject(err);
        } else {
            resolve(files);
        }
    })
});

const isDirectory = path => new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
        if(err) {
            reject(err);
        } else {
            resolve(stats.isDirectory());
        }
    })
});


const showSubDirectories = async (path) => {
    try {
        let list = await listAll(path);
        let filteredList = list.filter( file => isDirectory(path + file).then() );
        return filteredList;

            

            //await isDirectory(path + file);
            //file == 'exercicios' 


        // files.filter(file => {
        //     isDirectory(path + file);
        // });

    } catch (error) {
        console.log(error);
    }
}

showSubDirectories('../').then( subDirectories => console.log(subDirectories) );