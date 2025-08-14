function atualizarRelogio() {
  const agora = new Date();

  let horas = agora.getHours();
  let minutos = agora.getMinutes();
  let segundos = agora.getSeconds();

  // Adiciona zero à esquerda se for menor que 10
  horas = horas < 10 ? '0' + horas : horas;
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;

  const horaAtual = `${horas}:${minutos}:${segundos}`;

  document.getElementById('relogio').textContent = horaAtual;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Chama uma vez para não esperar o primeiro segundo
atualizarRelogio();
