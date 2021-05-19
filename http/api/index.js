const http = require('http')
const URL = require('url')
const fs = require('fs') //s funcionalidades muito úteis para acessar e interagir com o sistema de arquivos.
const path = require('path')

const data = require('./urls.json')

function writeFile(cb){
    fs.writeFile(
        path.join(__dirname, "urls.json"),
        JSON.stringify(data, null, 2),
        err => {
            if(err) throw err; 

            cb(JSON.stringify({message:"ok"})) 
        }
        
        )

}


http.createServer((req,res) => { //solicitacao e resposta
    const { name, url, del}= URL.parse(req.url,true).query   //ele retornará um objeto URL 

    res.writeHead(200,{
        'Acess-Control-Allow-Origin':'*' //permite o acesso ao navegador
    })

    //todas as URL's
    if(!name || !url)
        return res.end(JSON.stringify(data)) // converte valores em javascript para uma String  JSON

    //delete    
    if(del){
        data.urls = data.urls.filter(item => String(item.url) !== String(url))
        return  writeFile((message)=> res.end(message))
    }
        
                
    //create
    data.urls.push({name, url})
    return writeFile((message)=>res.end(message))


}).listen(3000,() => console.log('api is running'))