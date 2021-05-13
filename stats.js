const os = require('os')
const { mainModule } = require('process')
const log = require('./logger')



setInterval(()=>{

    const {freemem, totalmem} = os

    const total = parseInt(totalmem()/1024 /1024)
    const mem = parseInt(freemem() /1024 /1024) 
    const percents = parseInt((mem/total * 100))
    
    //console.log(mem, total, percents)
    
    const stats= {
        free: `${mem}MB`,
        total:`${total}MB`,
        usage:`${percents}MB`
    
    }
    console.clear()
    console.log("==* STATS PC *==")
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)

},1000)

