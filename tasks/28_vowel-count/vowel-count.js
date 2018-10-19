/* eslint-disable */

export function getVowelCount(str){
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;
  
  for(let i = 0; i < str.length ; i++)
  {
    if (vowel_list.indexOf(str[i]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}