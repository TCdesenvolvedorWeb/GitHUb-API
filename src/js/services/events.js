async function eventos(userName) {
  const response = await fetch(
    `https://api.github.com/users/TCdesenvolvedorWeb/events?per_page=5`
  );
  return response.json();
}

async function mostrarParaMim() {
  const eventosResponse = await eventos("TCdesenvolvedorWeb");

  const event = {
    events: [],
    setEvent(events) {
      this.events = events;
    },
  };

  const mostrar = {
    userp: document.querySelector(".profile-data"),
    mostra(event) {
      event.events.forEach((events) => {
        let ver = events;
        console.log(ver);
        if (events.type !== "CreateEvent") {
          this.userp.innerHTML += 
          `<div class="container eventos">
                <h3>${events.repo.name}</h3>
                <p>${events.payload.commits[0].message}</p>
          </div>`;
        } else if (events.type !== "PushEvent"){
            this.userp.innerHTML +=
            `<div class="container eventos">
                <h3>${events.repo.name}</h3>
                <p>Sem mensagem de commit</p>
            <div>`
        }
      });
    },
  };

  event.setEvent(eventosResponse);

  mostrar.mostra(event);
}
mostrarParaMim();
