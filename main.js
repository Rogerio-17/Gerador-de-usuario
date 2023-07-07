function gerador() {
  event.preventDefault();
  let nome = document.querySelector("#nomesemformtacao").value;
  let valorUsuario = document.querySelector("#nomeformatado");
  let valorLogin = document.querySelector("#login");
  let valorPass = document.querySelector("#senha");
  let registros = document.querySelector("#registros");

  if (nome == "") {
    alert("Por favor preencher campo NOME");
  }

  //Função para formatar nome e entregar o usuario
  function pegaNome() {
    let nomeSemFormatacao = [];
    let nomeS = nome.split(" ");
    nomeSemFormatacao.push(...nomeS);

    // VERIFICA SE POSSUI PELO MENOS DOIS NOMES
    if (nomeSemFormatacao.length < 2) {
      alert(
        "Nome menor do que o permitido! Informe pelo menos 2 nomes para dar continuidade. Exemplo: Rogério José."
      );
    }

    //Retorna o nome do usario com a primeira letra maiuscula
    function formatarNome() {
      let primeiroNome =
        nomeSemFormatacao[0].charAt(0).toUpperCase() +
        nomeSemFormatacao[0].slice(1).toLowerCase();
      let segundoNome =
        nomeSemFormatacao[1].charAt(0).toUpperCase() +
        nomeSemFormatacao[1].slice(1).toLowerCase();

      valorUsuario.value = `${primeiroNome} ${segundoNome}`;
    }
    formatarNome();

    //Formata login para deixar padrão
    function formatarLogin() {
      let primeiroNomeLogin = nomeSemFormatacao[0].toLowerCase();
      let segundoNomeLogin = nomeSemFormatacao[1].toLowerCase();
      let login = `${primeiroNomeLogin}.${segundoNomeLogin}`;
      localStorage.setItem("Login", login);

      valorLogin.value = `${primeiroNomeLogin}.${segundoNomeLogin}`;
    }
    formatarLogin();

    //Cria senha aleatorio
    function criarPass(numC) {
      let charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
      let pass = "";

      for (let i = 0; i < numC; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        pass += charset[randomIndex];
      }
      valorPass.value = `${pass}`;
      localStorage.setItem("Senha", pass);
      return pass;
    }
    criarPass(12);

    // Mostra historico de usuarios criados
    function mostraHistorico() {
      let loginL = localStorage.getItem("Login");
      let passL = localStorage.getItem("Senha");

      registros.value += `
      User: ${loginL}
      Pass: ${passL}
      `;
    }
    mostraHistorico();
  }
  pegaNome();
}
