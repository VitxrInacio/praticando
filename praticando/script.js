// Define reusable function for adding click event listeners
function adicionarEventoDeClique(elemento, mensagem) {
    elemento.addEventListener("click", function() {
      alert(mensagem);
    });
  }
  
  // Define reusable function for scrolling to a section
  function scrollIntoView(sectionClass) {
    const section = document.querySelector(sectionClass);
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
  
  // Add event listeners to buttons and links
  const confiraCardapioButton = document.getElementById("confira-cardapio");
  confiraCardapioButton.addEventListener("click", () => {
    alert("Confira nosso cardápio:\n\n- X-Burguer: R$ 12,99\n- X-Salada: R$ 14,99\n- X-Frango: R$ 12,99\n- Refrigerante Lata: R$ 4,99\n- Suco Natural: R$ 4,99\n- Água Mineral: R$ 2,99");
  });
  
  const homeLink = document.getElementById("home-link");
  const cardapioLink = document.getElementById("cardapio-link");
  const contatoLink = document.getElementById("contato-link");
  
  homeLink.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  cardapioLink.addEventListener("click", () => {
    scrollIntoView(".featured-products");
  });
  
  contatoLink.addEventListener("click", () => {
    scrollIntoView(".contact-us");
  });
  
  // Add event listeners to form submit event
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    form.reset();
  });
  
  // Add click event listeners using reusable function
  adicionarEventoDeClique(document.getElementById("produtos-link"), "Você clicou no link Produtos!");
  adicionarEventoDeClique(document.getElementById("contato-link"), "Você clicou no link Contato!");
  adicionarEventoDeClique(document.getElementById("confira-produtos"), "Você clicou no botão Confira nossos produtos!");
  adicionarEventoDeClique(document.getElementById("ver-todos-produtos"), "Você clicou no botão Ver todos os produtos!");
  adicionarEventoDeClique(document.getElementById("produto1"), "Você clicou no produto 1!");
  adicionarEventoDeClique(document.getElementById("produto2"), "Você clicou no produto 2!");
  adicionarEventoDeClique(document.getElementById("produto3"), "Você clicou no produto 3!");
  