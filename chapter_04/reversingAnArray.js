

const reverseArray = array => {
  let newArr = []; 
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}


console.log(reverseArray([1, 2, 3, 4]));


const reverseArrayInPlace = array => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}