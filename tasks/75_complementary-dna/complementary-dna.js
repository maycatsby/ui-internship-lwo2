export function DNAStrand(dna) {
  const dnarr = dna.split('');
  const leng = dnarr.length;
  for (let i = 0; i < leng; ++i) {
    if (dnarr[i] === 'A') {
      dnarr.splice(i, 1, 'T');
    } else if (dnarr[i] === 'T') {
      dnarr.splice(i, 1, 'A');
    } else if (dnarr[i] === 'C') {
      dnarr.splice(i, 1, 'G');
    } else if (dnarr[i] === 'G') {
      dnarr.splice(i, 1, 'C');
    }
  }
  return dnarr.join('');
}
