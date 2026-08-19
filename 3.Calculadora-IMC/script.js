let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let resultado = document.getElementById ('resultado')
let botao = document.getElementById('botao');

let classificacao = "";


botao.onclick =() => {
    let pesonovo = peso.value.trim();
    let pesoformatado = pesonovo.replace(",",".")
    if(pesonovo == "" || isNaN (pesoformatado)){
        alert("corrija os campos")
        return
    }
    let alturanovo = altura.value.trim()
    let alturaformatado = alturanovo.replace(",",".")
    if(alturanovo == "" || isNaN(alturaformatado)){
        alert("corrija os campos")
        return
    }
    let imc = Number(pesoformatado) / Number (alturaformatado*alturaformatado)
if (imc<18.5){
    classificacao = "abaixo do peso"
}else if ((imc>18.5) && (imc<=24.9)){
    classificacao = "peso normal"
}else if ((imc>25) && (imc<=29.9)){
    classificacao = "sobrepeso"
}else if ((imc>30) && (imc<=34.9)){
    classificacao = "obesidade 1"
}else if ((imc>35) && (imc<=39.9)){
    classificacao = "obesidade 2"
}else {
    classificacao = "obesidade 3"
}
resultado.innerText = `seu imc é: ${imc.toFixed(2)} \n classsificação: ${classificacao}`
peso.value = "";
altura.value = "";

}
