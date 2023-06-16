document.getElementById("heading").innerText = "Hello World"
document.getElementById("paragraph").innerText = "Javascript 101"
document.getElementById("anchor").innerText = "Javascript"
document.getElementById("image").src = "step-3.webp"

// styling elements
document.getElementById("heading").style.color = "red"
document.getElementById("heading").style.fontSize = "50px"
document.getElementById("paragraph").style.color = "blue"
document.getElementById("paragraph").style.fontStyle ="italic"
document.getElementById("anchor").style.color = "green"
document.getElementById("image").style.height = "200px"
document.getElementById("image").style.width = "400px"

// using variables
let firstName="Amos"
let secondName="Muhindi"
let surname="Shirinah"

let fullName=firstName+ " " + secondName + " " + surname

document.getElementById("firstName").innerText = firstName
document.getElementById("secondName").innerText = secondName
document.getElementById("surname").innerText = surname
document.getElementById("fullName").innerText = fullName


// operators
let string1=10
let string2=20
console.log(string1+string2)
string1="10"
string2="20"
console.log(string1+string2)
string1="20"
string2="500"
console.log(string1+string2)
string1=30
string2=40
console.log(string2-string1)
console.log(string1*string2)
console.log(string1/string2)



// equality operators (==) checks equality of values
string1=500
string2=500
console.log(string1==string2)

// equality operators (===) checks for equality of value and type
string1=500
string2="500"
console.log(string1===string2)
console.log(string1)
console.log(string2)

// greater than (>)
string1=20
string2=40
console.log(string1<string2)
console.log(string2>string1)

// less than (<)
console.log(string1<string2)
console.log(string2<string1)

// greater than  or equal to (>=)
console.log(string1>=string2)
console.log(string2>=string1)

// and (&&)
console.log(string1<string2 && string2>string1)
console.log(string2<=string1 && string2>string1)

// or (||)
console.log(string1<string2 || string2>string1)
console.log(string2<=string1 || string2>string1)

// data types
/*
boolean
number
undefined
null
bigint
symbol
object
string
*/
