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

//calls
getUsers()
//getUser()
 addNewUser({
   name: "Olivia Zars",
   avatar: "https://picsum.photos/200/300",
   city: "Rio do Sul"
 })

// updateUser({
//   name: "Marcelo Calvis",
//   avatar: "http://lorempixel.com/400/200",
//   city: "Recife"
// }, 3)
// deleteUser(2)