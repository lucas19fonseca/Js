let listaDeTarefas = []

function adcTarefa() {
    let mensagem = document.getElementById("mensagem")
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    if (tarefa === "") {
        mensagem.textContent = "Campo vazio! Insira algo."
        mensagem.style.color = "#A34747"
        return
    }
    else {
        mensagem.textContent = "Tarefa adicionada com sucesso!"
        mensagem.style.color = "#098f14ff"
    }

    listaDeTarefas.push(tarefa)
    renderizarTarefa()

    inputTarefa.value = ""
}

function renderizarTarefa() {
    let listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    for (let i = 0; i < listaDeTarefas.length; i++) {
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = listaDeTarefas[i]


        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)
    }
}

function removerTarefa(i) {
    listaDeTarefas.splice(i, 1)
    renderizarTarefa()
}
function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa:", listaDeTarefas[i])
    
    if (tarefaEditada && tarefaEditada.trim() !== "") {
        listaDeTarefas[i] = tarefaEditada.trim()
        renderizarTarefa()
    }
}
