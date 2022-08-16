// This is just allowing us to use the dataset from the other file. You can ignore this line.
const UFO_SIGHTINGS = require("./nyc-ufo-sightings.json");

// Math functions
const randInt = (min, max) => { return parseInt((Math.random() * (max-min)) + min) }

//Write a function called calculateMinutes that takes in an argument called seconds and returns how many minutes it is equal to, rounding down.
function calculateMinutes(seconds) {
    return parseInt(seconds/60)
}

// Write a function called getRandomSighting that returns a random ufo sighting object from the UFO_SIGHTINGS dataset. If you need help or a hint, click here.
function getRandomSighting() {
    return UFO_SIGHTINGS[randInt(0,UFO_SIGHTINGS.length)]
}
//console.log(getRandomSighting())

// Write a function called getRandomSightings that takes a number as an argument and returns an array with that many random sightings.
function getRandomSightings(numSightings) {
    let randomSightings = []
    for (let i = 0; i < numSightings; i++) {
        randomSightings.push(getRandomSighting())
    }
    return randomSightings
}

// Write a function called getLongestSighting that takes in an array of ufo sightings and returns the longest one.
function getLongestSighting(sightings) {
    let maxDuration = 0;
    let longestSighting = {};

    for (let sightingIndex in sightings) {
        let sighting = sightings[sightingIndex];
        if (sighting["duration"] > maxDuration) {
            maxDuration = sighting["duration"]
            longestSighting = sighting
        }
    }
    return longestSighting
}

// Write a function called getComment that takes in a ufo sighting object as an argument and returns the comment as a string.
function getComment(sighting) {
    return sighting["comments"]
}
//console.log(getComment(UFO_SIGHTINGS[0]))

// Write a function called getFirstWordInComment that takes a ufo sighting object as an argument and returns the first word in the commnent.
function getFirstWordInComment(sighting) {
    let comment = getComment(sighting)
    return comment.slice(0,comment.indexOf(" "))
}
//console.log(getFirstWordInComment(UFO_SIGHTINGS[0]))

// Write a function called shapeTypes that returns an array of all the different shapes that are present in the UFO_SIGHTINGS. There should only be one copy of each shape in the returned array (no duplicates).
function shapeTypes() {
    let shapes = []

    UFO_SIGHTINGS.forEach(sighting => {
        if (shapes.indexOf(sighting["shape"]) == -1) {
            shapes.push(sighting["shape"])
        }
    });

    return shapes
}
//console.log(shapeTypes())

// Write a function called calculateViewDuration that takes in a ufo sighting object and returns the 
//  "Short" if the object's duration is under 120, 
//  "Average" if the time is between 120 and 240,
//  "Long" if the time is greater than 240.
function calculateViewDuration(sighting) {
    let duration = sighting["duration"]
    if (duration<120) {
        return "short"
    } else if (duration<=240) {
        return "Average"
    }
    return "Long"
}
//console.log(calculateViewDuration(UFO_SIGHTINGS[0]))

// Write a function that calculates the average duration of all sighting objects in UFO_SIGHTINGS.
function AverageDuration() {
    let total = 0;
    for (const sightingIndex in UFO_SIGHTINGS) {
        if (Object.hasOwnProperty.call(UFO_SIGHTINGS, sightingIndex)) {
            const sighting = UFO_SIGHTINGS[sightingIndex];
            total += sighting["duration"]
        }
    }
    return total/UFO_SIGHTINGS.length
}
//console.log(AverageDuration())

// Write a function that returns the first ufo sighting in UFO_SIGHTINGS that's over 10 minutes long.
function firstOverTenMinutes() {
    for (const key in UFO_SIGHTINGS) {
        if (Object.hasOwnProperty.call(UFO_SIGHTINGS, key)) {
            const element = UFO_SIGHTINGS[key];
            
            if (element["duration"] > 10*60) {
                return element
            }
        }
    }
    return undefined;
}
//console.log(firstOverTenMinutes())

// Write a function that returns an array of all the comments from ufo sightings that were less than one minute.
function allCommentsUnderOneMinute() {
    let comments = []

    for (const key in UFO_SIGHTINGS) {
        if (Object.hasOwnProperty.call(UFO_SIGHTINGS, key)) {
            const element = UFO_SIGHTINGS[key];
            
            if (element.duration < 60){
                comments.push(element["comments"])
            }
        }
    }

    return comments
}
//console.log(allCommentsUnderOneMinute())