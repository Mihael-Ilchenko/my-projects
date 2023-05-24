export function oneSimbolBig(str) {

    let oneSim = str.substring(0, 1).toUpperCase()
    let other = str.substring(1).toLowerCase()
    let result = oneSim.concat(other);
    return result
}