const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom",
    "tes bah lu"
];
let score = [
    [100, 30],
    [20, 5],
    [100, 23]
];
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//1 return start = A
console.log(inventors.filter((x) => x[0] === "A"))
    //2 return contain 'n'
console.log(inventors.filter((x) => x.includes("n")))
    //3 returnPrint out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
let doubleChars = inventors.filter(name => {
    let splitName = name.split('')
    let result = false

    splitName.map((_, i) => {
        if (splitName[i] === splitName[i + 1]) {
            result = true
        }
    })
    return result
})
console.log(doubleChars)

//extra for same letter twice
for (i = 0; i < inventors.length; i++) {
    stringArray = inventors[i].split('')
    t = isNaN(stringArray.filter((x, index) => stringArray.indexOf(x) != index))
    if (t === true) {
        console.log(inventors[i])
    }
}
//4 Print out an array of the numbers which are odd.
console.log(numbers.filter((num) => num % 2 != 0))
    //5 Print out an array of the numbers that have two digits.
console.log(numbers.filter((num) => Math.floor(num / 10) >= 1))

//6 Print out an array of the numbers which are prime.

console.log(numbers.filter((num) => {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }))
    //7
let result = inventors.filter((name) => {
        splited = name.split('')
        splited.map((el, index) => {
            if (el === ' ') {
                splited.splice(splited.indexOf(el), (splited.length - splited.indexOf(el)))
                console.log(splited.join(''))
            }
        })
        return
    })
    //8 print out length of invetor full name

let result = inventors.filter((name) => {
        splited = name.split('')
        let len = 0;
        splited.map((el) => {
            if (el.toLowerCase() != el.toUpperCase()) {
                len += 1
            }
        })
        console.log(len)
    })
    //to upper case
console.log(inventors.map((name) => name.toUpperCase()))
    //Innitial

//Print out an array of every number multiplied by 100.
console.log(numbers.map((no) => no = no * 100))

//sort accen
console.log(inventors.sort())
    //sort decen
console.log(inventors.sort((a, b) => a - b))
    //sort lenght decen

console.log(inventors.sort(function(a, b) {
    return b.length - a.length;
}));

//sort accen 

console.log(inventors.sort(function(a, b) {
    return a.length - b.length;
}));

//reduce
console.log(score.reduce(total, num) { return total - num })
    //
console.log(score.filter(i => i % 2 === 0).reduce((a, b) => a += b));
//first name
console.log(inventors.map((name, index) => name.split(' ').reduce((a) => (a))))
    //
console.log(inventors.some((name) => (name.includes('a'))))
    // every include
console.log(inventors.every((name) => (name.toLowerCase().includes("e"))))
    //Does every inventor have first name that's longer than 4 characters

// //
// Find the inventor that has a middle name.
// Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above.)

// Find the number divisible by 7.

// Bonus: Return a new array, that only has the numbers that are not divisible by 7.