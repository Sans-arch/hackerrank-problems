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

// Test
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
