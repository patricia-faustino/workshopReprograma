var inputValorHora = document.querySelector('#valor-hora')
/* Procurar qualquer valor que tenha o id valor-hora e atribui 
o resultado encontrado na variavel  inputValorHora */


var inputHorasProjeto = document.querySelector('#horas-projeto')
/* Procurar qualquer valor que tenha o id horas-projeto e atribui 
o resultado encontrado na variavel inputHorasProjeto */


var resposta = document.querySelector('#resposta')
/* Procurar qualquer valor que tenha o id resposta e atribui 
o resultado encontrado na variavel resposta */


function calcular() {
    // declaracao da funcao  

    var horaValor = inputValorHora.valueAsNumber
    /* variavel horaValor recebendo variavel de entrada
    inputValorHora, uso de valueAsNumber significa a conversao do tipo texto(string)
    para tipo numerico(Number) */

    var horasTrabalhadas = inputHorasProjeto.valueAsNumber
    /* variavel horasTrabalhadas recebendo variavel de entrada inputHorasProjeto convertida de string
    para tipo numerico */ 

    var totalHorasTrabalhadasProjeto = horasTrabalhadas * horaValor
    // variavel totalHorasTrabalhadasProjeto recebendo o calculo do total de horas trabalhadas no projeto 

    var valorTotalHoraTrabalhadasPDuasCasas = totalHorasTrabalhadasProjeto.toFixed(2)
    /* saida da totalHorasTrabalhadasProjeto com duas casas decimais, usa-se o toFixed(numero de casas
    decimais desejada na saida) */

    resposta.textContent = " Resposta: R$ " + valorTotalHoraTrabalhadasPDuasCasas
    /* a partir da variavel resposta com o uso do .textContent permite imprimir na tela o que for escrito após
    o sinal de igualdade. O texto(string) por meio de aspas duplas e 
    a concatenacao da variavel por meio do sinal +
    */

}