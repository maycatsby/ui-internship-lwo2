// export function whatIsInAName(a, b) {
//  return a.filter(function(v) {
//     return b.some(function(v2) {
//       return v.first== v2.first && v.last == v2.last;
//     });
//   });
// }

// // var result = a.filter(function(v) {
// //     return b.some(function(v2) {
// //         return v.id == v2.id && v.item == v2.item;
// //     })
// // });



export function whatIsInAName(arr1, arr2) {
    var idx = 0, arr3 = [];
    var tmp = []; // временный массив JSON

    for(var i in arr1){ // переводим в JSON
        tmp.push(JSON.stringify(arr1[i]));
    }
    for (var i = 0; i < arr2.length; i++) {
        idx = tmp.indexOf(JSON.stringify(arr2[i])); // сравниваем в формате JSON
        if (idx >= 0) arr3.push(arr2[i]);
    }

    return arr3;
}