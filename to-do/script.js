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
