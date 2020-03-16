
exports.min = function min(array) {
  if (array == undefined || array.length == 0) {
    return 0;
  }
  let n = array[0];
  
  array.forEach(element => {
    n = n < element ? n : element;
  });

  return n;
}

exports.max = function max(array) {
  if (array == undefined || array.length == 0) {
    return 0;
  }
  let n = array[0];
  array.forEach(element => {

    n = n > element ? n : element;
  });

  return n;

}

exports.avg = function avg(array) {

  if (array == undefined || array.length == 0) {
    return 0;
  }
  let sum = 0;
  array.map(element => {
    sum += element;
  });

  return sum / array.length;

}





