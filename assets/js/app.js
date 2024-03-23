const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Correccion: Seleccionando elementos con clases y un ID
const $n = document.querySelector('.name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    // Correccion: comillas inversas para interpolar variables
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Correccion: Accediendo al elemento con la clase "name"
  $n.textContent = `Algo salió mal: ${err}`;
}

// Invocando la función displayUser con el nombre de usuario "stolinski"
displayUser('stolinski').catch(handleError);
