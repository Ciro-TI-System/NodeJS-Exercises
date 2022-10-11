const url = 'http://localhost:5500/api'

//GET
function getUsers() {
  fetch(url)
    /*.then(function (response) {
      return response.json()
    })*/
    .then(response => response.json()) //Anonymous Function
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

//GET with parameters
function getUser() {
  fetch(`${url}/1`)
    .then(response => response.json()) //Anonymous Function
    .then(data => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

//POST
function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}
const newUser = {
  name: "Olívia Zars",
  avatar: "http://picsum.photos/200/300",
  city: "Rio do Sul"
}
addUser(newUser)



getUsers()
getUser()