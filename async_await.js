//es otra forma de trabajar con promesas
//de forma asincrona
//las tareas se van resolviendo de forma asincrona
//con el callback se utilizaba lo sincrono
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function fetchDataAsync() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}