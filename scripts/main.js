document.addEventListener("DOMContentLoaded", () => {
  // Botão "Embananado!"

  // Botão "Coletar bananas"
  const botaoBananas = document.getElementById("coletar-bananas");
  const contadorBananas = document.getElementById("bananas-coletadas");
  let bananas = 0;

  botaoBananas.addEventListener("click", () => {
    bananas++;
    contadorBananas.textContent = `Bananas coletadas: ${bananas}`;

    // Cria uma banana animada 🍌
    const banana = document.createElement("span");
    banana.textContent = "";
    banana.classList.add("banana");

    // Define posição aleatória
    banana.style.left = `${Math.random() * window.innerWidth}px`;
    banana.style.top = `${Math.random() * window.innerHeight}px`;

    document.body.appendChild(banana);

    // Remove após a animação
    setTimeout(() => banana.remove(), 1200);
  });
});
