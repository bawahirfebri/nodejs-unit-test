export class MyExceptioon extends Error {

}

export const callMe = (name) => {
    if(name === 'Eko') {
        throw new MyExceptioon('Ups my exceptions happen')
    } else {
        return 'ok'
    }
}