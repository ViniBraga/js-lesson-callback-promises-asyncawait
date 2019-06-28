// A função readdir disponível no módulo fs do Node, permite ler um diretório, 
// e retornar seu conteúdo como um vetor. Crie uma versão em Promise da função. 
// Dica: a assinatura da função é: fs.readdir(caminho, (err, files) => {})

const fs = require('fs');

const readDir = path => new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
        if(err) {
            reject(err);
        } else {
            resolve(files);
        }
    })
});

readDir('./').then(files => console.log(files))