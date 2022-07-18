//criando variaveis e adicionando as classes e pedindo que as selecione 
const resultado = document.querySelector('.result');
const confirmar = document.querySelector('.igual');

//funcao de inserir os numeros e operacoes na tabela 
function insert(valor){
resultado.innerHTML += valor;
}

//funcao que limpa totalmente a tela da calculadora 
function clean(){
resultado.innerHTML =' ';
}

//função que deleta um numero por vez 
function backspace(){
    if (resultado.textContent){
        let result = document.getElementById('resultado').innerHTML;
          resultado.innerHTML = result.substring(0, result.length -1);

    }
}

function confirma(){
    if (resultado.textContent != "Erro"){
        document.getElementById('resultado')
        .innerHTML = eval(resultado.innerHTML)
    }
}

