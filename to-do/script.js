<<<<<<< HEAD
let tarefa = JSON.parse(localStorage.getItem("tarefa")) || [];

function adcTarefa() {
    let inputTarefa = document.getElementById("inputTarefa").value.trim();
    const mensagem = document.getElementById("mensagem");

    if (inputTarefa === "") {
        mensagem.textContent = "Campo vazio, insira algo!";
        mensagem.style.color = "#a34a34";
    } else {
        mensagem.textContent = "Tarefa adicionada com sucesso!";
        mensagem.style.color = "green";
        tarefa.push(inputTarefa);
        localStorage.setItem("tarefa", JSON.stringify(tarefa)); // salva no localStorage
        renderizarTarefa();
    }

    document.getElementById("inputTarefa").value = "";
}

function renderizarTarefa() {
    let listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    for (let i = 0; i < tarefa.length; i++) {
        let TarefaLi = document.createElement("li");
        TarefaLi.textContent = tarefa[i];

        let btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.onclick = function () {
            removerTarefa(i);
        };

        TarefaLi.appendChild(btnRemover);
        listaTarefas.appendChild(TarefaLi);
    }
}

function removerTarefa(i) {
    tarefa.splice(i, 1);
    localStorage.setItem("tarefa", JSON.stringify(tarefa)); // atualiza no localStorage
    renderizarTarefa();
}

renderizarTarefa();
=======
let tarefas = []

function adcTarefa() {
    let mensagem = document.getElementById("mensagem")
    let inputTarefa = document.getElementById("inputTarefa")
    let novaTarefa = inputTarefa.value.trim()

    if (novaTarefa == "") {
        const mensagemErro = "Campo vazio, insira algo"
        mensagem.textContent = mensagemErro
        mensagem.style.color = "#a34a34"
    }
    else {
        const mensagemSucesso = "tarefa adicionada com sucesso"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "green"
        tarefas.push(novaTarefa)
        renderizarTarefa()
    }

    inputTarefa.value = ""
}

function renderizarTarefa() {
    let listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = "";
    
    for (let i = 0; i < tarefas.length; i++) {
        let tarefaLi = document.createElement("li")
        tarefaLi.textContent = tarefas[i]

        let botaoRemover =document.createElement("button")
        tarefaLi.appendChild(botaoRemover)
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar =document.createElement("button")
        tarefaLi.appendChild(botaoEditar)
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick=() => editarTarefa(i)

        listaTarefas.appendChild(tarefaLi)
    }
}

function removerTarefa(i){
    tarefas.splice(i,1)
    renderizarTarefa()
}
function editarTarefa(i){
    let tarefaEditada =prompt("editar tarefa!")
    if( tarefaEditada.trim() !== ""){
        tarefas[i] = tarefaEditada
        renderizarTarefa()
    }
}
function limparTudo(){
    
        let mensagem = document.getElementById("mensagem")
        if (tarefas == 0 ){
            const mensagemLimpar = "Não a nada para limpar!"
            mensagem.textContent = mensagemLimpar
            mensagem.style.color = "#a34a34"
        } 
        else{
            tarefas.length = 0
            const limpou = "lista de tarefas limpada com sucesso!"
            mensagem.textContent = limpou
            mensagem.style.color = "green"
            renderizarTarefa()
        }

        setTimeout(() => {
        mensagem.textContent = "";
    }, 3000);
}
>>>>>>> e2bf08a30f2aaec151bccc49f451ef34a008042e
