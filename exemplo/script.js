//console.log('Hello Reprograma!')
var entrada = document.querySelector('input')//procure e selecione o input dentro do documento

var saida = document.querySelector('#respostaAno')// procura ququer valor que tenha respostaAno no id e salva na variavel saída

//saida.textContent = ano crava a resposta, texto que está no contet vire ano, aí não fica cravado  na resposta

//funcao:conjunto de instrucoes que vai executar uma tarefa

function cliquei(){
    var ano = entrada.value// o valor que escrever no input entrada vira a variavel ano
// pega o valor que tá na entrada e transforma em ano
     console.log(ano)
     saida.textContent = ano // saida que aparece na tela


}
// cliquei() chamar a função, só assim ela aparece, mas ela já foi chamada no html, aqui fica redundante 
//apenas para lembrar

//onclick: cliquei, no clique, quando eu clicar em pronto chama a função cliquei
