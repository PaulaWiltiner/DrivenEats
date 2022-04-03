
function botaoPedido() {
    const botao = document.querySelector("button");
    if (document.querySelector(".pratoselecionado")!==null && document.querySelector(".bebidaselecionada")!==null && document.querySelector(".sobremesaselecionada")!==null){
        botao.querySelector("h2").innerText= 'Fechar pedido';
        botao.classList.add("verdebotao");
        botao.disabled = false;
    } else {
        botao.querySelector("h2").innerText= 'Selecione os 3 itens para fechar o pedido';
        botao.classList.remove("verdebotao");
        botao.disabled = true;
    }
}


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
        botaoPedido()
        
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
    botaoPedido()
       
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
    botaoPedido()
       
}

function fazerPedido(){
    let nome =prompt("Por favor, digite o seu nome:");
    let endereco = prompt("Por favor, digite o seu endereço:");
    const hei =0;
    if (nome!=="" && endereco !==""){
        const check = document.querySelector(".checarpedido");
        check.innerHTML= "<div class='checkaviso' > </div>"
        if ( hei !=0 ){
            const padrao = "Olá, gostaria de fazer o pedido: \n - Prato: Frango Yin Yang \n - Bebida: Coquinha Gelada \n - Sobremesa: Pudim \n Total: R$ 27.70";
            const texto= padrao + '\n\n' + "Nome: " + nome + '\n' + "Endereço: " + endereco;
            window.open(` https://web.whatsapp.com/send?phone=5575988164646&text=${encodeURIComponent(texto)}`);
    }
}
}