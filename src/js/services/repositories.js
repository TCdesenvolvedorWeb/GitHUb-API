import { baseUrl , quantityRepositories} from "../variables.js";

async function getRepositories(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/repos?per_page=${quantityRepositories}`
  );
  return response.json();
}

export {getRepositories}