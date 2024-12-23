import { baseUrl , quantityEvents} from "../variables.js";

async function getEvent(userName) {
  const response = await fetch(`${baseUrl}/${userName}/events`);
  const events = await response.json();
  return events.filter( elemente => elemente.type === 'CreateEvent' || elemente.type === 'PushEvent' ).slice( 0 , quantityEvents )
}

export {getEvent}
