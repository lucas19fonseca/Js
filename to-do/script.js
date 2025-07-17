function adcTarefa(){
    var inputTarefa = document.getElementById("inputTarefa")
    var tarefa = inputTarefa.value.trim()

    if(tarefa === ""){
    alert("por favor preencha o campo")
    return;
    }

    var ulLista = document.getElementById("ulLista")
    var novaTarefa = document.createElement("li")
    ulLista.appendChild(novaTarefa)
    novaTarefa.textContent = tarefa

    inputTarefa.value = ""

    alert ("tarefa adicionada com sucesso")
}