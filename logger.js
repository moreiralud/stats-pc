const EventEmitter = require('events')
const fs = require('fs')
const path = require('path') //independente da maquina, pega o arquivo no endereço onde ele estiver

const emitter = new EventEmitter()

emitter.on('log',(message)=>{
    fs.appendFile(path.join(__dirname,'log.txt'), message, err=>{
        if (err) throw err 
    })


})

//emitter.emit('log','mensagem')

function log(message){
    emitter.emit('log', message)
}

log("Oi")

log("bom te ver!")

module.exports = log
