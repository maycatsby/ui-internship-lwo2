/* eslint-disable */

export function getIndexToInsert(arr, val) {
    arr.sort(function(a, b) {
        return a - b;
        });
    for (var a in arr){
        if (arr[a] >= val)
            return parseInt(a);
    }
    return arr.length;
}

