function getIndexToIns(arr, num) {
 
  var times = arr.length; 
  var count = 0; 
  for (i=0;i<times;i++){
    if(num>arr[i]){
      count++;} 
    } 
  return count; 
}
