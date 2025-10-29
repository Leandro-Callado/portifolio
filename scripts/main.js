document.addEventListener("DOMContentLoaded", () => {
  const botaoNerd = document.getElementById("coletar-nerd");
  const contadorNerd = document.getElementById("nerd-coletadas");
  let nerds = 0;

  botaoNerd.addEventListener("click", () => {
    nerds++;
    contadorNerd.textContent = `Nerds coletados: ${nerds}`;

    // Cria o nerd animado 🤓
    const nerd = document.createElement("span");
    nerd.textContent = "🤓";
    nerd.classList.add("nerd");

    // Posição aleatória
    nerd.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    nerd.style.top = `${Math.random() * (window.innerHeight - 100)}px`;

    document.body.appendChild(nerd);

    // Remove após a animação
    setTimeout(() => nerd.remove(), 1200);
  });
});
