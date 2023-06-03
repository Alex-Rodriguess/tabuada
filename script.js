function tabuada() {

let num = parseInt(document.getElementById('numero').value);
let resposta = document.getElementById('resposta');
let tabuada = '';

    

    for(let count=1; count<=10; count++)
    tabuada += num+ " X " +count+ " = " +num*count+"<br />";

    if(num || null){
        resposta.innerHTML = tabuada;
    }else{
        
        alert('Digite um número!')
    }
    
}
        
    
