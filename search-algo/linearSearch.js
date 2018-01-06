function linearSearch(arr,elemetToSearch){
    for(var i=0;i<arr.length;i++){
        if(arr[i]===elemetToSearch){
            return "element "+ elemetToSearch +" is found at index "+i;
        }
    }
    return "Element " +elemetToSearch +" is not found"
}

var arr = new Array();
for (i = 0; i < 20; i++) {
  arr[i] = Math.floor(Math.random() * 100);
}

console.log("original  array");
console.log("-------------------------------------------------------------------------------");
console.log(arr);
console.log("---------------------------------------------------------------------------------");
var  result = linearSearch(arr,Math.floor(Math.random() * 100));
console.log("After Searching");
console.log("-------------------------------------------------------------------------------");
console.log(result);
console.log("---------------------------------------------------------------------------------");