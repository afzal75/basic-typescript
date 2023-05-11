// assertion

let emni: any;

emni = 'Next level web development';

(emni as string).length;


function kgTogram(params: string | number): string | number | undefined{
    if(typeof params === 'string'){
        const value = parseFloat(params)*1000
        return `The converted value is: ${value}`
    }
    if(typeof params === 'number'){
        const value = params * 1000
        return value
    }
}

const toBeNumber = <number> kgTogram(1000);
const toBeString = <string> kgTogram('1000');
// const toBeNumber = kgTogram(1000) as number;
// const toBeString = kgTogram('1000') as string;

type CustomError = {
    message:string;
}

try{

}
catch (error){
    console.log((error as CustomError).message)
}


