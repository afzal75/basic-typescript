const searchName = (value: string | null) => {
    if(value === null){
        console.log('There is nothing to search')
    }
    else{
        console.log('Searching')
    }
}

searchName(null);

const getMyCar = (speed: unknown) => {
    if(typeof speed === 'number'){
        const convertSpeed = (speed * 1000) /3600
        console.log(`My Car Speed ${convertSpeed}`)
    }
    if(typeof speed === 'string'){
        const [value, unit] = speed.split("")
    
        const convertSpeed = (parseFloat(value) * 1000) /3600
        console.log(`My Car Speed ${convertSpeed}`)
    }
    else{
        console.log("there is wrong type")
    }
}

getMyCar(10)
getMyCar('10 kmh^-1')
getMyCar(true)

function throwError(message:string): never{
    throw new Error(message)
}

throwError('kkek')
// const new Error('Error is Mortal')