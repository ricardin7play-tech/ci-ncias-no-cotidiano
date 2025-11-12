document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!email || !senha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Simulação simples de login
  if (email === "kaneko4582@gmail.com" && senha === "123456") {
    alert("Login bem-sucedido!");
    window.location.href = "index.html";
  } else {
    alert("E-mail ou senha incorretos.");
  }
});

// Botão de cadastro redireciona para a página de cadastro
document.getElementById("btnCadastro").addEventListener("click", function () {
  window.location.href = "cadastro.html"; // Altere para o caminho real da sua página de cadastro
});
