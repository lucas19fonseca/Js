function adcTarefa() {
    const mensagem = document.getElementById("mensagem")
    const inputTarefa = document.getElementById("inputTarefa")
    const tarefa = inputTarefa.value.trim()
    if (tarefa === "") {
        var mensagemErro = "O campo tem que ter preencido"
        mensagem.textContent = mensagemErro
        mensagem.style.color = "#A34743";
    }
    else {
        var mensagemSucesso = "Tarefa adicionada com sucesso"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "#28A745";
        var listaTarefas = document.getElementById("listaTarefas")
        var novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
    }



    listaTarefas.appendChild(novaTarefa)

    inputTarefa.value = ""
}