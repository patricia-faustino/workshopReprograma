var inputSalario = document.querySelector('#ganho-mes')

var inputHoras = document.querySelector('#horas-dia')

var resultado= document.querySelector('#resposta') 


function calcularValorHora() {

var salario= inputSalario.valueAsNumber

var horas = inputHoras.valueAsNumber 

var horasMes = horas * 22 

var valorHora = salario/ horasMes 

var valorHoraDuasCasas = valorHora.toFixed(2) 

resultado.textContent = "R$ " + valorHoraDuasCasas 


}