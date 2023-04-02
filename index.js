const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// want to TitleCase the string so => // "What Does The This Keyword Mean?"

// const capitalizeFirstLetter = (word) => {
//     return word[0].toUpperCase() + word.slice(1)
// } 

// capitalizeFirstLetter("funkytown")

// const titleCaseString = (str) => {
//   return str.split(' ').map(function (word) {
//     return (word[0].toUpperCase() + word.slice(1))
//   }).join(' ')
// }

// titleCaseString(testString)

//that works! Now need to iterate through an array of strings executing toTitleCase funciton on each string in the array. Will .map work?

// This works but does not pass the npm test .... no idea why...
const titleCased = (arrayToTitleCase) => {
  return arrayToTitleCase.map(function (str) {
    return str.split(' ').map(function (word) {
      return (word[0].toUpperCase() + word.slice(1))
    }).join(' ')
  })
  }

console.log(titleCased(tutorials))


//This also works but also does not pass the npm test...
// const titleCaseStrings = (arrayToTitleCase) => {
//   return arrayToTitleCase.map(function (str) {
//       return str.split(' ').map(function (word) {
//           return (word[0].toUpperCase() + word.slice(1))
//       }).join(' ')
//       })
//   }

// const titleCased = (titleCaseStrings, arrayOfStrings) => {
//   return titleCaseStrings(arrayOfStrings)
// }

// // Here it is as an arrow funciton... a little unclearer to me in a away but very clean haha
// const titleCased = (arrayToTitleCase) => {
//   return arrayToTitleCase.map((str) => str.split(' ').map((word) => (word[0].toUpperCase() + word.slice(1))).join(' '))
//   }
