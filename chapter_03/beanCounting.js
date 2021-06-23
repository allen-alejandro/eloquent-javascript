





const countBs = str => {
  let count = 0; 
  let arr = str.split(''); 
  arr.map(x => {
    if (x === 'B') {
      count++;
    }
  })
  return count;
}


const countChar = (str, char) => {
  let count = 0;
  let arr = str.split('');
  arr.map(x => {
    if (x === char) {
      count++;
    }
  })
  return count;
}



console.log(countBs('BBC'));
console.log(countChar("kakkerlak", "k"));