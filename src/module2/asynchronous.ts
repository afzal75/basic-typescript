// json placeholder

interface Itodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


const getTodo = async (): Promise <Itodo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    return data
}

const getTodoData = async (): Promise<void> => {
    const result = await getTodo()
    console.log(result)
}
getTodoData()



// mocking

const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'Data is Facthing'
        if (data) {
            resolve(data)
        }
        else {
            reject('Failed to fatch data')
        }
    })
}


const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true
        if (data) {
            resolve(data)
        }
        else {
            reject('Failed to fatch data')
        }
    })
}

type DataType = {
    data: string;
}

const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: 'jjj' }
        if (data) {
            resolve(data)
        }
        else {
            reject('Failed to fatch data')
        }
    })
}

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise()
    return data;
}
const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean()
    return data;
}
const getPromiseDataObject = async (): Promise<DataType> => {
    const data = await makePromiseObject()
    return data;
}