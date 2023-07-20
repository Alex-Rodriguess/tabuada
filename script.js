function tabuada() {

let num = parseInt(document.getElementById('numero').value);
let resposta = document.getElementById('resposta');
let tabuada = '';

    

    for(let count=1; count<=10; count++)
    tabuada += num + " X " +count+ " = " + num * count + "<br />";

    if(num || null){
        resposta.innerHTML = tabuada;
    }else{
        
        alert('Digite um número!')
    }
    
}
    
let tela = document.querySelectorAll('main')
let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark);
btnLight.addEventListener('click', modoLight);

function modoDark() {
    console.log("modoDark")
    tela.classList.add("dark");
    tela.classList.remove("light");
 
}

function modoLight() {
    console.log("modoLight")
    tela.classList.add("light");
    tela.classList.remove("dark");

}


    
