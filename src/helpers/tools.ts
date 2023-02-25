export const randomIntUpTo = (nMax:number):number => {
    return Math.floor(Math.random() * nMax);
}

export const randomFloatUpTo = (nMax:number):number => {
    return Math.round((Math.random() * nMax)*100)/100;
}

export const getRandomElement = (array: string[]|number[]|any): string|number|any => {
    return array[randomIntUpTo(array.length)]
}

export const resStatus = (status: number, response: any): any => {
    let msg;
    
    if (status === 200) {
        // msg = {statuscode:status, body: response};
        msg = {response};
    }
    else {
        msg = { statuscode: status, response};
        // msg = { statuscode: status, response:"Not Found" };
    }
    
    return msg
}