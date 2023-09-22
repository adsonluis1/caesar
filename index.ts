// receber um input do usuario com o texto simples e a chave
// fazer um sistema para numerar as letras1
// adicionar o valor das letras com a chave
// transformar os numeros em letras
// dar o texto cifrado(criptografado)

let number:number[] = []
let textoCifrado:string[]= []

function hehe (texto:string,key:number=1){
    // 33 = ! , 44= ,
    let tam:number = texto.length
    let final:string = ''

    for(let i = 0;tam > i;i++){
        number.push(texto.charCodeAt(i))
    }

    number.map((evt)=>{
        if(evt +key > 122){
        textoCifrado.push(String.fromCharCode(evt + key - 26))
        } else if(evt > 65 && evt < 90 ){
            if(evt + key > 90){
            textoCifrado.push(String.fromCharCode(evt + key - 26))
            }else{
                textoCifrado.push(String.fromCharCode(evt + key))
            }
        } else if(evt == 32 || evt == 44){
            textoCifrado.push(String.fromCharCode(evt))
        }
        else{
            textoCifrado.push(String.fromCharCode(evt + key))
        }
       
    })

    console.log(textoCifrado)
    console.log(textoCifrado.join(''))
    console.log(number)
}

hehe('be, sure, to drink your Ovaltine' , 13)

