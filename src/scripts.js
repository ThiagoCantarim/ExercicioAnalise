let aNumber = [] 
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

//Limpa os campos
function cleanField(id, num_field, slct_field, res_field){
    if(id == 0){
        num_field.value = '';
    } else {
        num_field.value = '';

        while(slct_field.firstChild){
            slct_field.removeChild(slct_field.firstChild);
        }

        while(res_field.firstChild){
            res_field.removeChild(res_field.firstChild);
        }
    }
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

        cleanField(0, num);
    } else {
        alert(error);
    }
    num.focus()
}

//Processa os dados do array
function processNumbers(){
    if(aNumber.length < 2){
        return alert('São nescessários ao menos 2 números para a análise!')
    } else {
        let lenArray = aNumber.length;
        let sortArray = aNumber.sort((a, b) => a - b);
        let sumArray = 0;

        for(let i in sortArray){
            sumArray += sortArray[i];
        }

        let avrgArray = sumArray / lenArray;
        
        showResult(lenArray, sortArray, sumArray, avrgArray);
    }
}

//Apresenta o resultado
function showResult(len, ord, sum, avrg){
    let res = document.querySelector('div#result');

    res.innerHTML = ` ••••••••••••• Resultado da análise: •••••••••••••<br/>`
    res.innerHTML += `• Ao todo foram analisados ${len} números.<br/>`
    res.innerHTML += `• O menor número informado foi ${ord[0]}.<br/>`
    res.innerHTML += `• O maior número informado foi ${ord[len-1]}.<br/>`
    res.innerHTML += `• A soma de todos os números é ${sum}.<br/>`
    res.innerHTML += `• A média dos números analisados é ${avrg.toFixed(2)}.<br/><br/>`

    resetButton(res);
}

//Adiciona botao reset
function resetButton(res){
    res.innerHTML += '<input type="button" id="btnReset" value="Reiniciar..." onclick="resetData()">'
    let btnReset = document.getElementById('btnReset');

    btnReset.style.textAlign = "center";
    btnReset.style.borderStyle = "none"
    btnReset.style.padding = "10px";
    btnReset.style.width = "150px"
    btnReset.style.borderRadius = "20px"
    btnReset.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, .4)";

}

//Reseta todos os dados
function resetData() {
    let num  = document.querySelector('input#nNumber');
    let list = document.querySelector('select#msg-box');
    let res  = document.querySelector('div#result');

    while(aNumber.length){
        aNumber.shift();
    }
    
    cleanField(1, num, list, res);

    num.focus();

}



