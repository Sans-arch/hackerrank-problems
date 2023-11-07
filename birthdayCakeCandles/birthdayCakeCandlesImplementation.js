/**
 * Bolo vai ter uma vela pra cada ano de idade da pessoa.
 * Elas serao somente capazez de cortar a maior das velas.
 * Conte quantas velas são as maiores.
 *
 *
 */
function birthdayCakeCandles(candles) {
  let taller = 0;
  let tallerRepeatedTimes = 0;

  candles.forEach((candle) => {
    if (candle > taller) {
      taller = candle;
    }
  });

  candles.forEach((candle) => {
    if (candle === taller) {
      tallerRepeatedTimes += 1;
    }
  });

  return tallerRepeatedTimes;
}

// Test
birthdayCakeCandles([4, 4, 1, 3]);
birthdayCakeCandles([4, 5, 1, 3]);
