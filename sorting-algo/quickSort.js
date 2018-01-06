var quickSort = function (arr, low, high) {  
  if(low<=high){
    var pivot = partition(arr, low, high);
    quickSort(arr,low,pivot-1);
    quickSort(arr,pivot+1,high);
  }  
}

function partition(arr, low, high) {
  var pivot = arr[high];
  var pIndex = low;
  for(var i=low;i<high;i++){
    if(arr[i]<=pivot){
      var temp = arr[i];
      arr[i] = arr[pIndex];
      arr[pIndex] = temp;
      pIndex++;
    }
  }
  //placing pivot element to currect position
  arr[high] = arr[pIndex];
  arr[pIndex] = pivot;
  // console.log(arr);
  return pIndex;
}

var arr = new Array();
for (i = 0; i < 5; i++) {

  arr[i] = Math.floor(Math.random() * 100);
}

module.exports= {
  quickSort:quickSort
};
// console.log("Before Sorting");
// console.log("-------------------------------------------------------------------------------");
// console.log(arr);
// console.log("---------------------------------------------------------------------------------");
// quickSort(arr, 0, arr.length - 1);
// console.log("After Sorting");
// console.log("-------------------------------------------------------------------------------");
// console.log(arr);
// console.log("---------------------------------------------------------------------------------");