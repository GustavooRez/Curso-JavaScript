/*VARIÁVEIS
Responsáveis por guardar dados na memória.

Inicia com a palavra var, let ou const*/

var nome = 'André';
let idade = 28;
const possuiFaculdade = true;

/* EVITAM REPETIÇÕES
DRY (Don't repeat yourself) */ 

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

/* SINTAXE
Palavra chave var seguida do nome, sinal de igual e o valor. */

var nome = 'André';
var idade = 28;
var possuiFaculdade = true;

/* VÍRGULA
Utilizei a vírgula para criar mais de uma variável, sem repetir a palavra chave var. */ 

var nome = 'André',
    idade = 28,
    possuiFaculdade = true;

/* SEM VALOR
Pode declarar ela e não atribuir valor inicialmente. */

var precoAplicativo;
// retorna undefined


/* NOME
Os nomes podem iniciar com $, _, ou letras.

Podem conter números mas não iniciar com eles

Case sensitive

nome é diferente de Nome

Não utilizar palavras reservadas

https://www.w3schools.com/js/js_reserved.asp

Camel case

É comum nomearmos assim: abrirModal */ 

// Inválido
//var §nome;
//var function;
//var 1possuiFaculdade;

// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

