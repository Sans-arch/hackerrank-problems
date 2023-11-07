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
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
/**
 * a = Alice triplet
 * b = Bob triplet
 * a[0] > b[0]
 * a[1] > b[1]
 * a[2] > b[2]
 *
 */
function compareTriplets(a, b) {
  const [aliceProblemClarity, aliceProblemOriginality, aliceProblemDifficulty] =
    a;
  const [bobProblemClarity, bobProblemOriginality, bobProblemDifficulty] = b;
  let alicePoints = 0;
  let bobPoints = 0;

  const [aliceProblemClarityPoints, bobProblemClarityPoints] = compareProblem(
    aliceProblemClarity,
    bobProblemClarity
  );

  const [aliceProblemOriginalityPoints, bobProblemOriginalityPoints] =
    compareProblem(aliceProblemOriginality, bobProblemOriginality);

  const [aliceProblemDifficultyPoints, bobProblemDifficultyPoints] =
    compareProblem(aliceProblemDifficulty, bobProblemDifficulty);

  alicePoints =
    aliceProblemClarityPoints +
    aliceProblemOriginalityPoints +
    aliceProblemDifficultyPoints;
  bobPoints =
    bobProblemClarityPoints +
    bobProblemOriginalityPoints +
    bobProblemDifficultyPoints;

  return [alicePoints, bobPoints];
}

function compareProblem(a, b) {
  let alicePoints = 0;
  let bobPoints = 0;

  if (a > b) {
    alicePoints += 1;
  } else if (b > a) {
    bobPoints += 1;
  }

  return [alicePoints, bobPoints];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const b = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((bTemp) => parseInt(bTemp, 10));

  const result = compareTriplets(a, b);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
