/*
Em linguagens síncronas é comum a função sleep(tempo) assim, pode-se por exemplo escrever algo no console, 
pausar o script por x tempo e escrever algo como:

    console.log('Olá!')
    sleep(2000)
    console.log('Depois de 2segs')

    Simule o sleep de maneira correta em Javascript (sem travar a thread principal) utilizando promises e uma função async/await
*/

console.log('execution 1');

const sleep = async time => {
    setTimeout(() => {
        console.log('Depois de 2segs')
    }, time);
}

console.log('Olá!');
sleep(2000);


console.log('execution 2');