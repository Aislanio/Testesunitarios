const somar = (a,b) =>{
    return a + b
}


const inOneHour = () =>{
    const now = Date.now()
    const OneHourInmili =  1*60*60*1000
    
    return now + OneHourInmili
}


module.exports = {somar, inOneHour}

