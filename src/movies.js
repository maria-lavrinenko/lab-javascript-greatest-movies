// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const arrayOfDirectors = moviesArray.map((movie) => movie.director);

  return arrayOfDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spilbergDrama = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );

  return spilbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const newScoreArray = [];
  for (movie of moviesArray) {
    if (typeof movie.score === "number") {
      newScoreArray.push(movie.score);
    }
  }

  if (newScoreArray.length === 0) {
    return 0;
  }

  const newSumOfScore = newScoreArray.reduce((sum, score) => sum + score, 0);

  const newAverageScore = newSumOfScore / moviesArray.length;

  return Number(newAverageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const scoreArray = [];
  for (movie of moviesArray) {
    if (typeof movie.score === "number" && movie.genre.includes("Drama")) {
      scoreArray.push(movie.score);
    }
  }

  if (scoreArray.length === 0) {
    return 0;
  }

  const sumOfScores = scoreArray.reduce((sum, score) => sum + score, 0);

  const averageSumScore = sumOfScores / scoreArray.length;

  return Number(averageSumScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedArray = structuredClone(moviesArray);
  orderedArray.sort((a, b) => {
    if (b.year === a.year) {
      return a.title.localeCompare(b.title, undefined, { sensivity: "base" });
    }
    return a.year - b.year;
  });
  return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArrayToSort = structuredClone(moviesArray);
  newArrayToSort.sort((a, b) => {
    return a.title.localeCompare(b.title, undefined, { sensitivity: "base" });
  });

  const onlyTitles = newArrayToSort.map((movie) => movie.title);

  return onlyTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// // BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {
//   if (typeof moviesArray.year === "string") {
//     const sortedYear = structuredClone(moviesArray);
//     const maxScore = -Infinity;
//     const bestYear = 0;
//     const scoreArray = []

//     sortedYear.sort((a, b) => {
//       return a.year.localeCompare(b.year, undefined, { sensitivity: "base" });
//     });
//     for (
//       let i = 0;
//       i < sortedYear.length - 1;
//       i++
//     ) {
//       if (sortedYear[i].year === sortedYear[i+1].year) {
//         scoreArray.push(sortedYear.year)
//       }
//       const scoreArray = sortedYear[i].reduce(
//         (sum, movie) => sum + movie.score,
//         0
//       );
//       if (scoreArray > maxScore) {
//         maxScore = scoreArray;
//         bestYear = sortedYear.year;
//       }
//     }
//   }
//   const avrScore = maxScore /
//   return `The best year was ${bestYear} with an average score of ${avrScore}`;
