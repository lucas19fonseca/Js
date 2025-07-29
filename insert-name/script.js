function mudarNome() {
    var nome = prompt("Qual seu nome?")
    nome = nome.trim()
    if (nome == "") {
        alert("insira um nome!")
    }
    else {
        alert("Que nome bonito, " + nome + "!")
        document.getElementById("mensagemsaudacao").textContent = "Olá " + nome
    }
}