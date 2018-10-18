/* eslint-disable */ 

export function titleCase(str) {
    let newArr = str.split(' ');
    let arr = [];
    let final = [];
    for(let i in newArr) {
        arr.push(newArr[i].toLowerCase());
        final.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    return(final.join(' '));
}