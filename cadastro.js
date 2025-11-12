document.getElementById("cadastroForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  if (!nome || !email || !senha || !confirmarSenha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem.");
    return;
  }

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  alert("Cadastro realizado com sucesso!");
  console.log("Usuário cadastrado:", { nome, email });

  // Redireciona para login após o cadastro
  window.location.href = "login.html";
});

document.getElementById("btnLogin").addEventListener("click", function () {
  window.location.href = "login.html";
});
