"use strict";
// receber um input do usuario com o texto simples e a chave
// fazer um sistema para numerar as letras1
// adicionar o valor das letras com a chave
// transformar os numeros em letras
// dar o texto cifrado(criptografado)
const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let number = [];
let textoCifrado = [];
function TransformarLetraEmNum(texto, key = 1) {
    texto.match(/[a-z]/ig).map((evt) => {
        if (evt.charCodeAt(0) + key > 123) {
            number.push(evt.charCodeAt(0) - 26 + key);
        }
        else {
            number.push(evt.charCodeAt(0) + key);
        }
    });
    TransformandoNumEmLetras();
    return number;
}
function TransformandoNumEmLetras() {
    number.map((evt) => {
        textoCifrado.push(String.fromCharCode(evt));
    });
    console.log(textoCifrado.toString());
}
console.log(TransformarLetraEmNum('hello, world', 13));
