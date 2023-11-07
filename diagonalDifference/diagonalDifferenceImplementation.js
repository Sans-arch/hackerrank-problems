/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] == undefined || !arr[i][j]) {
        arr[i][j] = 0;
      }
    }
  }

  let i = 0;
  let j = 0;
  let k = arr.length - 1;
  const firstDiagonalArray = [];
  const secondDiagonalArray = [];
  while (i < arr.length) {
    firstDiagonalArray.push(arr[i][j]);
    secondDiagonalArray.push(arr[i][k]);
    i++;
    j++;
    k--;
  }
  const firstDiagonalSum = firstDiagonalArray.reduce((prev, current) => {
    return prev + current;
  }, 0);
  const secondDiagonalSum = secondDiagonalArray.reduce((prev, current) => {
    return prev + current;
  }, 0);

  return Math.abs(firstDiagonalSum - secondDiagonalSum);
}
