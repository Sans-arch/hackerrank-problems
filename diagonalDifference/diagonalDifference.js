"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

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

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + "\n");

  ws.end();
}
