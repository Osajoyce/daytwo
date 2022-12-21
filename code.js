//level 1, 20-25
let string = " 30 Days Of JavaScript "
console.log(string.trim())
console.log(string.startsWith(" "))
console.log(string.endsWith(" "))
console.log(string.match(/a/gi))
let sub = "30 Days of"
console.log(sub.concat(" JavaScript"))
console.log(string.repeat(2))
//level 2
let jargn = "I hope this course is not full of jargon."
console.log(jargn.includes("jargon"))

console.log(Math.floor(Math.random()*101))

let word = "JavaScript"
console.log(word[Math.floor(Math.random()*word.length)])

console.log("1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n5 1 5 25 125")

let phrase = "You cannot end a sentence with because because because is a conjuction"
console.log(phrase.substr(31, 24))
//level 3
let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let count = sentence.match(/love/gi)
console.log(count.length)

let countt = phrase.match(/because/gi)
console.log(countt.length)

let text = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let numbers = text.match(/\d+/g)
console.log(numbers)

