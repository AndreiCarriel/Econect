const form = document.getElementById("cadastroForm");
const usuario = document.getElementById("novoUsuario");
const email = document.getElementById("email");
const senha = document.getElementById("novaSenha");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (usuario.value === "" || email.value === "" || senha.value === "") {
        mensagem.textContent = "Preencha todos os campos!";
        return;
    }

    // Simulação de cadastro (sem banco)
    localStorage.setItem("usuario", usuario.value);
    localStorage.setItem("senha", senha.value);

    mensagem.style.color = "#03dac6";
    mensagem.textContent = "Cadastro realizado com sucesso!";

    setTimeout(() => {
        window.location.href = "index.html"; // volta pro login
    }, 1500);
});