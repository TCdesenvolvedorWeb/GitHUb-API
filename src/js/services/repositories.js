import { baseUrl } from "../variables.js";

async function getRepositories(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/repos` //poderia usar ?per_page=10 para filtrar a quantidade de repositórios.
  );
  return response.json();
}

export {getRepositories}