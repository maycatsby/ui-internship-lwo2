/* eslint-disable */

export function destroyer(arr) {
    let args = Array.prototype.slice.call(arguments, 1);
    function des(smth){
        return args.indexOf(smth) === -1;
    }
    return arr.filter(des);
}