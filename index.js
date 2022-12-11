let numero_um;
let numero_dois;
let soma;

var escolha_usuario = 
prompt("Escolha uma opão: 1 - Soma; 2 - Subtração; 3 - Multiplicação; 4 - Divisão Real; 5 - Divisão Inteira; 6 - Potenciação; 7 - Encerra a aplicação;");

while(!(escolha_usuario == '7')){
switch(escolha_usuario){

    case '1' :
    alert ("Soma, digite dois números.");
    numero_um = parseFloat(prompt("Número 1:"));
    numero_dois = parseFloat(prompt ("Número dois:"));

    if((!numero_um || !numero_dois)){
    alert("Você não digitou um número, tente novamente!")
    }else{
    soma = Number(numero_um) + Number(numero_dois)
    alert(`${numero_um} + ${numero_dois} = ${soma}`)
    }
    break;

    case '2' :
        alert ("Subtração, digite dois números.");
    numero_um = parseFloat(prompt("Número 1:"))
    numero_dois = parseFloat(prompt ("Número dois:"))

    if((!numero_um || !numero_dois)){
        alert("Você não digitou um número, tente novamente!")
        }else{
    alert(`${numero_um} - ${numero_dois} = ${numero_um - numero_dois}`)
        }

    break;

    case '3': 
    alert ("Multiplicação, digite dois números.");
    numero_um = parseFloat(prompt("Número 1:"));
    numero_dois = parseFloat(prompt ("Número dois:"));

    if((!numero_um || !numero_dois)){
        alert("Você não digitou um número, tente novamente!")
        }else{
    alert(`${numero_um} * ${numero_dois} = ${numero_um * numero_dois}`)
        }

    break;

    case '4':
        alert ("Divisão, digite dois números.");
        numero_um = parseFloat(prompt("Número 1:"));
        numero_dois = parseFloat(prompt ("Número dois:"));

        if((!numero_um || !numero_dois)){
            alert("Você não digitou um número, tente novamente!")
            }else{
        alert(`${numero_um} / ${numero_dois} = ${numero_um / numero_dois}`)
            }
        break;

    case '5':
        alert ("Divisão inteira, digite dois números.");
    numero_um = parseFloat(prompt("Número 1:"));
    numero_dois = parseFloat(prompt ("Número dois:"));
    if((!numero_um || !numero_dois)){
        alert("Você não digitou um número, tente novamente!")
        }else{
    alert(`${numero_um} % ${numero_dois} = ${numero_um % numero_dois}`)
        }
    break;

    case '6':
        alert ("Potenciação, digite dois números.");
    numero_um = parseFloat(prompt("Número 1:"));
    numero_dois = parseFloat(prompt ("Número dois, potência a ser elevada:"));
    if((!numero_um || !numero_dois)){
        alert("Você não digitou um número, tente novamente!")
        }else{
    alert(`${numero_um} ** ${numero_dois} = ${numero_um ** numero_dois}`)
        }
    break;

    default:
        alert("Opção Inválida, tente novamente!")
        

}
escolha_usuario = 
prompt("Escolha um numero: 1 - Soma; 2 - Subtração; 3 - Multiplicação; 4 - Divisão Real; 5 - Divisão Inteira; 6 - Potenciação; 7 - Encerra a aplicação;");

}