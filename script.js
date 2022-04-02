function selecionarPrato(opcao) {
    const procura = document.querySelector(".pratoselecionado");
    const verde = document.querySelector(".verdeprato");
    const icone = opcao.querySelector(".check");
        if (opcao.classList.contains("pratoselecionado") === true && icone.classList.contains("check")){
            opcao.classList.remove("pratoselecionado");
            icone.classList.remove("verdeprato");
        } else {
            if (procura !== null && verde !== null ) {
            procura.classList.toggle("pratoselecionado"); 
            verde.classList.toggle("verdeprato");
            }
            opcao.classList.toggle("pratoselecionado");
            icone.classList.toggle("verdeprato");
        }
        
}

function selecionarBebida(opcao) {
    const procura = document.querySelector(".bebidaselecionada")
    const verde = document.querySelector(".verdebebida");
    const icone = opcao.querySelector(".check");
    if (opcao.classList.contains("bebidaselecionada") === true && icone.classList.contains("check")){
        opcao.classList.remove("bebidaselecionada");
        icone.classList.remove("verdebebida");
    } else {
        if (procura !== null  && verde !== null) {
        procura.classList.toggle("bebidaselecionada"); 
        verde.classList.toggle("verdebebida");
        }
        opcao.classList.toggle("bebidaselecionada");
        icone.classList.toggle("verdebebida"); 
    }
       
}

function selecionarSobremesa(opcao) {
    const procura = document.querySelector(".sobremesaselecionada")
    const verde = document.querySelector(".verdesobremesa");
    const icone = opcao.querySelector(".check");
    if (opcao.classList.contains("sobremesaselecionada") === true && icone.classList.contains("check")){
        opcao.classList.remove("sobremesaselecionada");
        icone.classList.remove("verdesobremesa");
    } else {
        if (procura !== null  && verde !== null) {
        procura.classList.toggle("sobremesaselecionada"); 
        verde.classList.toggle("verdesobremesa");
        }
        opcao.classList.toggle("sobremesaselecionada");
        icone.classList.toggle("verdesobremesa");
    }
       
}