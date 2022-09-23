function bubbleSort(arr) {

  for (let j = 0; j < arr.length; j++){
    for (let i = 0; i < arr.length-j; i++){
      let holdMyBeer;
      if ( arr[i] > arr[i + 1]) {
          [arr[i],arr[i+1]] = [arr[i+1], arr[i]]
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;