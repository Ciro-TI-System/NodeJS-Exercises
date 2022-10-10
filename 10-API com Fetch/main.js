const url = 'http://localhost:5500/api'

function getUsers() {
  fetch(url)
    /*.then(function (response) {
      return response.json()
    })*/
    .then(response => response.json()) //Anonymous Function
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

getUsers()