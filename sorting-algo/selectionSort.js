function selectionSort(data) {
  for (var i = 0; i < data.length; i++) {
    var minimumIndex = i;
    var minimumValue = data[i];
    // This Loop is used to find minimum element
    for (var j = i + 1; j < data.length; j++) {
      if(data[j]<minimumValue){
        minimumValue = data[j];
        minimumIndex = j;
      }
    }
    // Swapping of value only required if element in not at it's currect position 
    if(minimumIndex!==i){
      var temp = data[i];
      data[i] = minimumValue;
      data[minimumIndex] = temp;
    }
  }
}

var arr = new Array();
for (i = 0; i < 5; i++) {
  arr[i] = Math.floor(Math.random() * 100);
}

console.log("Before Sorting");
console.log("-------------------------------------------------------------------------------");
console.log(arr);
console.log("---------------------------------------------------------------------------------");
selectionSort(arr);
console.log("After Sorting");
console.log("-------------------------------------------------------------------------------");
console.log(arr);
console.log("---------------------------------------------------------------------------------");