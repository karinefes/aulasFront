let formContato = document.getElementById('form-contato');
let divLista =  document.getElementById ('lista');
let nome = [];
let email = [];
let telefone = [];
let assunto = [];
let msg = [];

formContato.addEventListener ("submit", (event) =>{
    event.preventDefault();
    //atribuindo valores
    nome.push(formContato.nome.value);
    email.push(formContato.email.value);
    telefone.push(formContato.telefone.value);
    assunto.push(formContato.assunto.value);
    mensagen.push(formContato.mensagen.value)

    gerarLista();
})

function gerarLista (){
    let auxlista = "";

    for(let posicao =0;posicao < nome.length;posicao++){
        auxlista += `<div class="card">
        <div class="dados-label">
        <div>Nome Completo:</div>
        <div>${nome[posicao]}</div>
        </div>` 

        `<div class="card">
        <div class="dados-label">
        <div>Email:</div>
        <div>${email[posicao]}</div>
        </div>` 

        `<div class="card">
        <div class="dados-label">
        <div>Telefone:</div>
        <div>${telefone[posicao]}</div>
        </div>`

        `<div class="card">
        <div class="dados-label">
        <div>Assunto:</div>
        <div>${assunto[posicao]}</div>
        </div>`

        `<div class="card">
        <div class="dados-label">
        <div>Mensagem:</div>
        <div>${mensagen[posicao]}</div>
        </div>` 

    }

    divLista.innerHTML = auxlista;
}