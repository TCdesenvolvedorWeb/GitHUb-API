const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `
      <div class="info">
        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
        <div class="data">
          <h1> ${user.name ?? "Não possui nome cadastrado 😅"} </ h1>
          <p> ${user.bio ?? "Não possui bio cadastrada 😅"}</p>
          <p> Seguidores: ${user.followers ?? "Não possui seguidores 😅"}</p>
          <p> Seguindo: ${user.following ?? "Não segue ninguém 😅"}</p>
        </div>
      </div>
    `;

    let repositoriesItens = "";
    user.repositories.forEach( (repo) => (repositoriesItens += `
      <li>
        <a href="${repo.html_url}" target="_blank">${repo.name} 
          <p>
            <span class="span">🍴 ${ repo.forks ?? "sem forks" }</span>
            <span class="span">⭐ ${repo.stargazers_count ?? 'Sem estrelas' } </span>
            <span class="span">👀 ${repo.watchers ?? "Sem vizualizações" } </span>
            <span class="span">💻 ${repo.language ?? "Linguagem não definida" } </span>
          </p>
        </a>
      </li>
    `));

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `
        <div class="repositories section">
          <h2> Repositórios <h2>
          <ul>${repositoriesItens}</ul>
        </div>
      `;
    }

    let eventsItens = '';
    user.events.forEach( elemente => {
      if (elemente.type === 'PushEvent') {
        eventsItens +=`
          <div class='container-events'>
            <h3> ${elemente.repo.name} </h3>
            <p>  ${elemente.payload.commits[0].message} </p>
          </div>
        `
      } else {
        eventsItens +=`
          <div class='container-events'>
            <h3> ${elemente.repo.name} </h3>
            <p> Sem mensagem de commit </p>
          </div>
        `
      }
    }
    );

    if (user.events.length > 0 ){ this.userProfile.innerHTML += `
      <div>
        <h2> Eventos </h2>
        <div class="container-events">
          <ul>
            ${ eventsItens ?? "Não há eventos" }
          </ul>
        </div>
      </div>`
    }
  },
  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
  },
};

export { screen };
