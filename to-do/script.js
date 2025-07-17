function adcTarefa() {
    var mensagem = "tarefa adicionada com sucesso!";

    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    document.getElementById("mensagem").textContent = mensagem;
    var listaTarefas = document.getElementById("listaTarefas")
    var novaTarefa = document.createElement("li")

    novaTarefa.textContent = tarefa

    listaTarefas.appendChild(novaTarefa)



    inputTarefa.value = ""
}