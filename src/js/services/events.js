import { baseUrl , quantityEvents} from "../variables.js";

async function seeEvent(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/events?per_page=${quantityEvents}`
  );
  return response.json();
}

export {seeEvent}
