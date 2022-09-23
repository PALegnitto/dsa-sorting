function merge(arr1,arr2) {
  let i=0;
  let j=0;
  let arr3= [];

  while( arr3.length !== arr1.length + arr2.length){
    console.log('3',arr3.length,'2', arr1.length,'1', arr2.length)
    debugger;
    if (arr1[i] < arr2[j]){
      arr3.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]){
      arr3.push(arr2[j]);
      j++;

    } else if (arr1[i] === arr2[j]){
      arr3.push(arr1[i]);
      arr3.push(arr2[j]);
      i++;
      j++;
    }
    if (arr1.length === i){
      debugger;
      arr3 = arr3.concat(arr2.slice(j));
    } else if (arr2.length === j){
      arr3 = arr3.concat(arr1.slice(i));
    };
  }
  return arr3;
}
merge([2,4,5], [3,7,8])

/**
 * compare  array1[0] to array2[0]
 * take lesser value and add to new array
 *
 */

function mergeSort() {}

module.exports = { merge, mergeSort};