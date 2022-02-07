// This is just allowing us to use the dataset from the other file. You can ignore this line.
const UFO_SIGHTINGS = require("./nyc-ufo-sightings.json");

// * Write a function called `calculateMinutes` that takes in an argument called `seconds` and coverts returns how many minutes it is equal to, rounding down.
function calculateMinutes(seconds) {
  console.log(Math.floor(seconds / 60));
}

// * Write a function called `getRandomSighting` that returns a **random** ufo sighting object from the `UFO_SIGHTINGS` dataset. If you need help or a hint, [click here](https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array).
function getRandomSighting() {
  const randomElement =
    UFO_SIGHTINGS[Math.floor(Math.random() * UFO_SIGHTINGS.length)];
  return randomElement;
  console.log(randomElement);
}

// * Write a function called `getRandomSightings` that takes a number as an argument and returns an array with that many random sightings.
function getRandomSightings(number) {
  let emptyArr = [];

  for (i = 0; i < number; i++) {
    let randomElement =
      UFO_SIGHTINGS[Math.floor(Math.random() * UFO_SIGHTINGS.length)];
    console.log(randomElement);
  }
}

// * Write a function called `getLongestSighting` that takes in an array of ufo sightings and returns the longest one.
function getLongestSighting() {
  //return an array with duration
  let durationArr = UFO_SIGHTINGS.map((el) => el.duration);

  const max = Math.max(...durationArr);
  console.log(max);
}

// * Write a function called `getComment` that takes in a ufo sighting object as an argument and returns the comment as a string.

function getComment(UFOSightingObj) {
  const { comments } = UFOSightingObj;
  console.log(comments);
}

// * Write a function called `getFirstWordInComment` that takes a ufo sighting object as an argument and returns the first word in the comment.
function getFirstWordInComment(UFOSightingObj) {
  const { comments } = UFOSightingObj;
  const commentsArr = comments.split(" ");
  console.log(commentsArr[0]);
}
// * Write a function called `shapeTypes` that returns an array of all the different shapes that are present in the `UFO_SIGHTINGS`. There should only be one copy of each shape in the returned array (no duplicates).
function shapeTypes() {
  const arr = UFO_SIGHTINGS.map((el) => el["shape"]);
  let arrNoDuplicates = (arr) => arr.filter((v, i) => arr.indexOf(v) === i);
  console.log(arrNoDuplicates(arr));
}

// * Write a function called `calculateViewDuration` that takes in a ufo sighting object and returns the string `"Short"` if the object's duration is under 120, `"Average"` if the time is between 120 and 240, and `"Long"` if the time is greater than 240.
function calculateViewDuration(ufoSightingObj) {
  if (ufoSightingObj.duration < 120) {
    console.log("Short");
  } else if (ufoSightingObj.duration >= 120 && ufoSightingObj <= 240) {
    console.log("Average");
  } else {
    console.log("Long");
  }
}

// * Write a function that calculates the average duration of all sighting objects in `UFO_SIGHTINGS`.
function AverageDuration() {
  let arr = UFO_SIGHTINGS.map((el) => el.duration);
  const average = Math.round(
    arr.reduce(function (sum, value) {
      return sum + value;
    }, 0) / arr.length
  );
  console.log(average);
}

// * Write a function that returns the first ufo sighting in `UFO_SIGHTINGS` that's over 10 minutes long.
function over10Min() {
  const arr = UFO_SIGHTINGS.find((el) => el.duration > 10 * 60);
  console.log(arr);
}

// * Write a function that returns an array of all the comments from ufo sightings that were less than one minute.
function lessThanOneMinComments() {
  const arr = UFO_SIGHTINGS.filter((el) => {
    return el.duration < 10 * 60;
  });
  let newArr = arr.map((el) => el.comments);
  console.log(newArr);
}
