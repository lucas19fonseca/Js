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
        let listaTarefas = document.getElementById("listaTarefas")
        let tarefaLi = document.createElement("li")
        listaTarefas.appendChild(tarefaLi)
        tarefaLi.textContent = novaTarefa
    }

    inputTarefa.value = ""
}

function renderizarTarefa() {

}