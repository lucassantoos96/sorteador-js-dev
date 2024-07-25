const showResult = document.querySelector(".show-result")

function generatNumber(){

    const min = Math.ceil(document.querySelector(".input-min").value) 
    const max = Math.floor( document.querySelector(".input-max").value)
    
if(min >= max){

showResult.innerHTML = (" Valor mínimo tem que ser <u>menor</u> que o valor máximo !")

}
 else {

const result = Math.floor(Math.random() * (max - min + 1)) + min;

   showResult.innerHTML = result 

}

}