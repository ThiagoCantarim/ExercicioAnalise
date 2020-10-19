let aNumber = [10, 20, 30, 40, 50] 
let error   = '';

//Verifica se o número ja exista na lista
function vrfLista(arrayn, n) {
    if (arrayn.indexOf(Number(n)) == -1){
        return false
    } else {
        error = 'Este número ja foi adicionado!';
        return true
    }
}

//Verifica se o número está entre 1 e 100
function vrfNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        error = 'Número inválido, digite um número entre 1 e 100!';
        return false
    }
}

//Limpa o campo
function cleanField(field){
    field.value = ''
}

//Adiciona o número para a análise
function addNumber(){ 
    let num  = document.querySelector('input#nNumber');
    let list = document.querySelector('select#msg-box');

    if(vrfNumber(num.value) && !vrfLista(aNumber, num.value)){
        aNumber.push(Number(num.value));
        var item = document.createElement('option');
        item.text = `O número ${num.value} foi adicionado para análise!`;
        list.appendChild(item);

        cleanField(num);
    } else {
        alert(error);
    }
    num.focus()
}

function processNumbers(){
    let res = document.querySelector('div#result');
    let tamArray = aNumber.length;
    let ordArray = aNumber.sort((a, b) => a - b);
    let somaArray = 0;

    for(let i in ordArray){
        somaArray += ordArray[i];
    }

    let medArray = somaArray / tamArray;
   
    res.innerHTML = ` ••••••••••••• Resultado da análise: •••••••••••••<br/>`
    res.innerHTML += `• Ao todo foram analisados ${tamArray} números.<br/>`
    res.innerHTML += `• O menor número informado foi ${ordArray[0]}.<br/>`
    res.innerHTML += `• O maior número informado foi ${ordArray[tamArray-1]}.<br/>`
    res.innerHTML += `• A soma de todos os números é ${somaArray}.<br/>`
    res.innerHTML += `• A média dos números analisados é ${medArray.toFixed(2)}.<br/>`
}


