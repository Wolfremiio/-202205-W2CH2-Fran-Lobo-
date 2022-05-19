export function length(array) {
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    return array.length;
}
export function push(array, element) {
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    array[array.length] = element;
    return array.length;
}
export function pop(array) {
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    const element = array[array.length - 1];
    array.length = array.length - 1;
    return element;
}
export function shift(array, elem) {
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }

    const newArray = [elem];
    for (let i = 1; i <= array.length; i++) {
        newArray[i] = array[i - 1];
    }
    array = newArray;

    return array.length;
}

export function unshift(array) {
    if (typeof array === 'function') {
        console.log('Es una funcion');
        throw new Error('This parameters are function');
    }
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }

    const newArray = [];
    for (let i = 1; i < array.length; i++) {
        newArray[i - 1] = array[i];
    }
    array = newArray;
    console.log(array.length);
    return array.length;
}

export function some(array, funcion) {
    /* if (typeof array === 'function') {
        console.log('Es una funcion');
        throw new Error('This parameters are function');
    }
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');  De aquí sacar funcion a parte para testear todas mis funciones.
    } */

    for (let i = 0; i < array.length; i++) {
        if (funcion(array[i]) === true) {
            return true;
        }
    }
    return false;
}
export function every(array, funcion) {
    /* if (typeof array === 'function') {
        console.log('Es una funcion');
        throw new Error('This parameters are function');
    }
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');  De aquí sacar funcion a parte para testear todas mis funciones.
    } */

    for (let i = 0; i < array.length; i++) {
        if (funcion(array[i]) === false) {
            return false;
        }
    }
    return true;
}

export function find(array, funcion) {
    /* if (typeof array === 'function') {
        console.log('Es una funcion');
        throw new Error('This parameters are function');
    }
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');  De aquí sacar funcion a parte para testear todas mis funciones.
    } */

    for (let i = 0; i < array.length; i++) {
        if (funcion(array[i]) === true) {
            return array[i];
        }
    }
}
