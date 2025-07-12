 function mudarNome(){
        var nome = prompt("Qual seu nome?")
        alert("Que nome bonito, " + nome + "!")
        document.getElementById("mensagemsaudacao").textContent = "Olá " + nome;
    }