const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
    .then(response => {
      const data = response.data
      renderApiResult.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

function addNewUser(newUser) {
  axios.post(url, newUser)
    .then(response => {
      alert(JSON.stringify(response.data))
      getUsers()
    })
    .catch(error => console.error(error));
}

function getUser() {
  axios.get(`${url}/2`)
    .then(response => {
      const data = response.data

      userAvatar.src = data.avatar
      userName.textContent = data.name
      userId.textContent = data.id
      userCity.textContent = data.city
    })
    .catch(error => console.log(error))
}

function updateUser(user, id) {
  axios.put(`${url}/${id}`, user)
    .then(response => {
      alert(JSON.stringify(response.data))
      getUsers()
    })
    .catch(error => console.error(error));
}

//calls
getUsers()
getUser()

/*----------------------------------------------------------------------------*/

 //addNewUser({
 //  name: "Olivia Zars",
 //  avatar: "https://picsum.photos/200/300",
 //  city: "Rio do Sul"
 //})

/*----------------------------------------------------------------------------*/

//updateUser({
//  name: "Marcelo Calvis",
//  avatar: "https://picsum.photos/200/300",
//  city: "Recife"
//}, 2)

/*----------------------------------------------------------------------------*/

// deleteUser(2)