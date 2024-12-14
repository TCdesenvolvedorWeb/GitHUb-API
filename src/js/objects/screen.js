const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                      <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                      <div class="data">
                        <h1> ${user.name ?? "Não possui nome cadastrado 😅"} </ h1>
                        <p> ${user.bio ?? "Não possui bio cadastrada 😅"}</p>
                        <p> Seguidores: ${user.followers ?? "Não possui seguidores 😅"}</p>
                        <p> Seguindo: ${user.following ?? "Não segue ninguém 😅"}</p>
                      </div>
                    </div>`;

        let repositoriesItens = '';
        user.repositories.forEach(repo => repositoriesItens += 
            `<li>
                <a href="${repo.html_url}" target="_blank">${repo.name} 
                    <p><span class="span">🍴 ${repo.forks}</span> <span class="span">⭐ ${repo.stargazers_count}</span> <span class="span">👀 ${repo.watchers}</span>  <span class="span">💻 ${repo.language}</span></p>
                </a>
            </li>`);

        if (user.repositories.length > 0){
            this.userProfile.innerHTML +=  
            `<div class="repositories section">
                <h2> Repositórios <h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }

        user.events.forEach((events) => {
            if (events.type !== "CreateEvent") {
              this.userProfile.innerHTML += `<div class="container events">
                    <h3>${events.repo.name}</h3>
                    <p>${events.payload.commits[0].message}</p>
              </div>`;
            } else if (events.type !== "PushEvent") {
              this.userProfile.innerHTML += `<div class="container events">
                    <h3>${events.repo.name}</h3>
                    <p>Sem mensagem de commit</p>
                <div>`;
            }
          });
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }