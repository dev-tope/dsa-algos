function mergeSort(arr) {
  //base case
  if(arr.length <= 1) {
    return arr;
  }
  
  //find mid point and divide the array into two halves
  const mid = Math.floor(arr.length / 2)
  
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  //ecursively sort each hal of the array
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  // merge both sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let temp = []
  let lIndex = 0;
  let rIndex = 0;
  
  //compare values in both halves andadd them to temp array
  while (lIndex < left.length && rIndex < right.length) {
    if(left[lIndex] < right[rIndex]) {
      temp.push(left[lIndex]);
      lIndex++
    } else {
      temp.push(right[rIndex]);
      rIndex++;
    }   
  }
  // add leftovers to the array
  return temp.concat(left.slice(lIndex).concat(right.slice(rIndex)));
}

const unsortedArr = [105, 79, 100, 110];
const sortedArr = mergeSort(unsortedArr);
console.log(sortedArr)