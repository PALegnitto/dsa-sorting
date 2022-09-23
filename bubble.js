function bubbleSort(arr) {

  for (let num of arr){
    for (let i = 0; i < arr.length; i++){

      if ( arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [[arr[i+1], arr[i]]];
    }
  }
  return arr;
}

module.exports = bubbleSort;