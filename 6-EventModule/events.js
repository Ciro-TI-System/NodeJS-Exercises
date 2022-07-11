const {EventEmitter} = require('events')

const ev = new EventEmitter()
console.log(ev)

//Usando o 'once' o evento é ouvido uma única vez.
//ev.once('saySomething', (message) => {
ev.on('saySomething', (message) => {
  console.log('Eu ouvi você:', message)
})

ev.emit('saySomething', "Ciro")
ev.emit('saySomething', "Kely")
ev.emit('saySomething', "Kyara")