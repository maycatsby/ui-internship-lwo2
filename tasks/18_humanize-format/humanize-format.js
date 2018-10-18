/* eslint-disable */ 

export function humanizeFormat(num) {
    let final = '';
    if(num){
        let str = num.toString();
        let str_len = str.length-1;
        if(str[str_len]==1) {
            return str+'st';
        } 
        if (str[str_len] == 2) {
            return str+'nd';
        } 
        if (str[str_len] == 3) {
            return str+'rd';
        } 
        if (str[str_len] >= 4){
            return str+'th';
        } else {
            return final;
        }}
    else {
        return final;
    }
}

  