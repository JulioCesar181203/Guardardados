// // function mostrarMouse(event){
// //     console.log(`Eixo X: ${event.pageX} e Eixo Y ${event.pageY}`);
// //     if(event.pageX <7 && event.pageY <7){
// //         alert("CONTINUE NAVEGANDO EM NOSSO SITE")
// //     }
    

// // window.onmousemove = mostrarMouse;


// // localStorage.setItem(`nome`, `julin`);

// let nao = document.querySelector ("h2")
// let botao = document.querySelector ("button")
// let caixaDeTexto = document.querySelector ("input")
// let  = document.querySelectorAll("div")
// let 


// function mostarStorage(){

//     if(nome = caixaDeTexto){

//         nao.innerHTML = `É você mesmo ${nome}?`

//     }
    
// }

// function apertarBotao(){



// }


let caixaDeTexto = document.querySelector ("input")
let botao = document.querySelector ("button")
let text = document.querySelector("h2")
let nao = document.querySelector("a")
let div = document.querySelector("div")
let section = document.querySelector("section")

    function local (){
        localStorage.setItem("nome", caixaDeTexto.value);
        div.style.display = "none";
        text.innerHTML =`Seja bem vindo! ${localStorage.nome}`;
        nao.innerHTML = `Não é ${localStorage.nome}? Clique aqui`;
        nao.onclick = limparNome



    }

    function limparNome(){
        localStorage.clear()
    }

        if(localStorage.name){
            div.style.display = "none"
            texto.innerHTML = `Seja bem vindo! ${localStorage.nome}`;
            nao.innerHTML = `Não é ${localStorage.nome}? Clique aqui`;
            nao.onclick = limparNome

        }

        else{
            botao.onclick = local;
        }












// function apertarBotao(){
    
//     localStorage.setItem (`nome, ${caixaDeTexto.value}`)
    


// }



// function limparNome(){
// localStorage.clear (`${caixaDeTexto}`)

// }

// botao.onclick = apertarBotao
// limparNome();

// // // localStorage.setItem (`nome, ${caixaDeTexto}`)

