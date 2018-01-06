var quickSort = require("../sorting-algo/quickSort");

function binarySearch(arr,left,right,elementToSearch){
    while(left<=right){
        var middle = Math.floor((left + right) / 2);
        if(arr[middle]===elementToSearch){
            return "element "+ elementToSearch +" is found at index "+middle;
        }else if(elementToSearch<arr[middle]){
            return binarySearch(arr,left,middle-1,elementToSearch);
        }else if(elementToSearch>arr[middle]){
           return  binarySearch(arr,middle+1,right,elementToSearch);
        }
    }
    return "Element " +elementToSearch +" is not found";
        
}

var arr = new Array();
var arrLength = 20;
for (i = 0; i < arrLength; i++) {
  arr[i] = Math.floor(Math.random() * 100);
}
console.log("original  array");
console.log("-------------------------------------------------------------------------------");
console.log(arr);
quickSort.quickSort(arr,0,arrLength-1);
console.log("---------------------------------------------------------------------------------");
console.log("sorted  array");
console.log("-------------------------------------------------------------------------------");
console.log(arr);
console.log("---------------------------------------------------------------------------------");
var  result = binarySearch(arr,0,arrLength-1,Math.floor(Math.random() * 100));
console.log("After Searching");
console.log("-------------------------------------------------------------------------------");
console.log(result);
console.log("---------------------------------------------------------------------------------");