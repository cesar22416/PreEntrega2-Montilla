import { products } from "./asyncMock";

export const pedirDatos = () => {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(products);
        }, 500)
    })
}