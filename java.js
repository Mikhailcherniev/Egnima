// Função para atualizar o contador regressivo
function atualizarContagem() {
    const dataCyberMonday = new Date('2023-11-28T00:00:00');
    const agora = new Date().getTime();
    const diferenca = dataCyberMonday - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos para a Cyber Monday, o que vamos fazer?`;
  }

  // Atualizar a cada segundo
  setInterval(atualizarContagem, 1000);

  // Iniciar a contagem
  atualizarContagem();
 
