function split(data, l, r) {
  if (l < r) {
    var middle = Math.floor((l + r) / 2);
    split(data, l, middle);
    split(data, middle + 1, r);
    merge(arr, l, middle, r);
  }

}

function merge(arr, l, m, r) {
  var left = m - l + 1;
  var right = r - m;
  var leftArr = new Array();
  var rightArr = new Array();
  var mergearr = new Array();
  for (var i = 0; i < left; i++) {
    leftArr.push(arr[i + l]);
  }
  // console.log("left",leftArr);
  for (i = 0; i < right; i++) {
    rightArr.push(arr[m + 1 + i]);
  }
  // console.log("Right",rightArr);
  i = 0, j = 0, k = l;
  while (i < left && j < right) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < left) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < right) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }

}

var arr = new Array();
for (i = 0; i < 20; i++) {
  arr[i] = Math.floor(Math.random() * 100);
}

function mergeSort(arr) {
  split(arr, 0, arr.length - 1);
}

console.log("Before Sorting");
console.log("-------------------------------------------------------------------------------");
console.log(arr);
console.log("---------------------------------------------------------------------------------");
mergeSort(arr);
console.log("After Sorting");
console.log("-------------------------------------------------------------------------------");
console.log(arr);
console.log("---------------------------------------------------------------------------------");