var countQuadruplets = function(arr) {
    let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      for (let l = k + 1; l < arr.length; l++) {
        if (arr[i] + arr[j] + arr[k] == arr[l]) {
          count++;
        }
      }
    }
  }
}
return count;
};