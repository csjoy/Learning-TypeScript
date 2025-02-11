///////////////////////
// GRAMMAR AND TYPES //
///////////////////////

var x
console.log(x) // undefined

if (Math.random() > 0.5) {
  const y = 5
}
// console.log(y) // will throw error

if (true) {
  var z = 5
}
console.log(z)

function foo() {
  console.log(x) // undefined
  var x = "local value"
}
foo()

// console.log(y) // will throw error
const y = 3

// console.log(globalThis)

const myObject = { key: "value" }
myObject.key = "otherValue"
console.log(myObject)

const myArray = ["HTML", "CSS"]
myArray.push("JAVASCRIPT")
console.log(myArray)

var answer = 42
answer = "Thanks for all the fish"

answer = "The answer is " + 42
console.log(answer)

answer = 42 + " is the answer"
console.log(answer)

answer = "37" + 7
console.log(answer)

answer = "37" - 7
console.log(answer)

answer = "37" * 7
console.log(answer)

console.log(parseInt("37.2", 8))
console.log(parseFloat("37.32"))

const creature = ["Lion", , "Angel", ,]
console.log(creature, creature.length)

const sales = "Toyota"
function carTypes(name) {
  return name === "Honda" ? name : `Sorry we don't sale ${name}`
}

const car = {
  myCar: "Saturn",
  getCar: carTypes("Honda"),
  special: sales,
  manyCars: { a: "Saab", b: "Jeep" },
  7: "Mazda",
  '': "An empty string",
}
console.log(car)
console.log(car[7], car[''], car.manyCars.b)
console.log("Joyo's cat".length)

const aname = 'Leve', time = 'today'
console.log(`Hello ${aname}, how are you ${time}`)

function formatArg(arg) {
  if (Array.isArray(arg)) {
    return arg.map(function (part) {
      return `- ${part}`
    }).join("\n")
  }
  if (arg.toString === Object.prototype.toString) {
    return JSON.stringify(arg, null, 2)
  }
  return arg
}

function print(segments, ...args) {
  var message = segments[0]
  segments.slice(1).forEach(function (segment, index) {
    message += formatArg(args[index]) + segment
  })
  console.log(message)
}

const todos = [
  "Learn \u00A9JavaScript",
  "Learn Web\u{2F804} APIs",
  "Set up my website",
  "Profit!",
]

const progress = {
  javascript: 20,
  html: 50,
  css: 10,
}

print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress)

console.log("I need to do:\n%o\nMyCurrent progress is: %o\n", todos, progress)

/////////////////////////////////////
// CONTROL FLOW AND ERROR HANDLING //
/////////////////////////////////////

function isNumber(arg) {
  if (typeof arg === 'number') {
    return true
  } else {
    return false
  }
}
console.log(isNumber(7))

var fruitType
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.")
    break
  case "Apples":
    console.log("Apples are $0.32 a pound.")
    break
  case "Bananas":
    console.log("Cherries are $3.00 a pound.")
    break
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.")
    break
  case "Papayas":
    console.log("Papayas are $2.79 a pound.")
    break
  default:
    console.log(`Sorry, we are out of ${fruitType}.`)
}

function getMonthName(mo) {
  mo--
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ]
  if (months[mo]) {
    return months[mo]
  } else {
    throw new Error("InvalidMonthNo")
  }
}

var monthName
try {
  monthName = getMonthName(0)
  console.log(monthName)
} catch (e) {
  monthName = "unknown"
  console.error(e.message)
}

function bar() {
  try {
    console.log(0)
    throw "bogus"
  } catch (e) {
    console.log(1)
    return true
    console.log(2) // not reachable
  } finally {
    console.log(3)
    return false
    console.log(4) // not reachable
  }

  console.log(5) // not reachable
}
console.log(bar())

/////////////////////////
// LOOPS AND ITERATION //
/////////////////////////

var p = 0, q = 0
labelCancelLoops: while (true) {
  console.log("Outer loops:", p)
  p += 1
  q = 1
  while (true) {
    console.log("\tInner loops:", q)
    q += 1
    if (q === 10 && p === 10) {
      break labelCancelLoops
    } else if (q === 10) {
      break
    }
  }
}

const arr = [3, 5, 7]
arr.foo = "hello"
console.log(arr)

for (const i in arr) {
  console.log(i)
}

for (const i of arr) {
  console.log(i)
}

const obj = { foo: 1, bar: 2 }
for (const [key, val] of Object.entries(obj)) {
  console.log(key, val)
}

///////////////
// FUNCTIONS //
///////////////

function factorial(n) {
  if (n < 2) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}
console.log(factorial(5))

function pet(name) {
  function getName() {
    return name
  }
  return getName
}
const myPet = pet("Vivie")
console.log(myPet())

function outside() {
  const x = 5
  function inside(x) {
    console.log(arguments[0])
    return x * 2
  }
  return inside
}
console.log(outside()(10))

function myConcat(separator) {
  var result = ""
  for (var i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator
  }
  return result
}
console.log(myConcat(", ", "red", "orange", "blue"))
console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"))
console.log(myConcat(". ", "sage", "basil", "oregano", "pepper"))

function multiply(a, b = 1) {
  return a * b
}
console.log(multiply(5))

function multiply1(multiplier, ...theArgs) {
  return theArgs.map(function (x) {
    return multiplier * x
  })
}

const arr1 = multiply1(7, 1, 2, 3)
console.log(arr1)

function Person() {
  const self = this
  self.age = 0
  setInterval(function growUp() {
    self.age++
  }, 1000)
}

///////////////////////////////
// EXPRESSIONS AND OPERATORS //
///////////////////////////////

const arr2 = ["one", "two", "three"]
const [one, two, three] = arr2
console.log(one, two, three)
console.log(+"3", 4 ** 4)

const n1 = null ?? 1
console.log(n1)
const n2 = undefined ?? 2
console.log(n2)
const n3 = false ?? 3
console.log(n3)
const n4 = 0 ?? 4
console.log(n4)

const age = 17
const astatus = age >= 18 ? "adult" : "minor"
console.log(astatus)

const myObj = { h: 4, n: 2 }
console.log(myObj)
delete myObj.h
console.log(myObj)

const myFun = new Function("5+2")
const shape = "round"
const size = 1
const arr3 = ["Apple", "Mango", "Orange"]
const today = new Date()

console.log(typeof myFun)
console.log(typeof shape)
console.log(typeof size)
console.log(typeof arr3)
console.log(typeof today)
console.log(typeof doesntExist)
console.log(typeof true)

const trees = ["redwood", "bay", "cedar", "oak", "maple"]
console.log(0 in trees)
console.log(6 in trees)
console.log("bay" in trees)
console.log("length" in trees)
console.log("PI" in Math)

/////////////////////////
// NUMBERS AND STRINGS //
/////////////////////////

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

console.log("hello".toUpperCase())
console.log("string text line 1\n\
string text line 2")

console.log(`
string text line 1
string text line 2
`)

/////////////////////////
// REGULAR EXPRESSIONS //
/////////////////////////

const myRe = /d(b+)d/g
const arr4 = myRe.exec("cdbbdbsbz")
console.log(arr4, myRe.lastIndex)

/////////////////////////
// INDEXED COLLECTIONS //
/////////////////////////

const nonsparseArray = ["first", "second", undefined, "fourth"]
nonsparseArray.forEach(function (element) {
  console.log(element)
})

const arr5 = ["Wind", "Rain", "Fire"]
console.log(arr5.concat("a", "b", "c"))
console.log(arr5.join(" - "))
arr5.push("Earth")
console.log(arr5)
arr5.pop()
console.log(arr5)
arr5.unshift("Earth")
console.log(arr5)
arr5.shift()
console.log(arr5)
console.log(arr5.slice(1, 4))
arr5.push("1", "2", "3")
console.log(arr5.at(-2))

const arr6 = ["1", "2", "3", "4", "5"]
arr6.splice(1, 3, "a", "b", "c", "d")
console.log(arr6)
console.log(arr6.reverse())

const arr7 = [1, 2, [3, 4]]
console.log(arr7, arr7.flat())
console.log(arr5.sort())
console.log(arr6.indexOf("d"))
const a2 = arr6.map(function (item) {
  return item.toUpperCase()
})
console.log(a2)

const arr8 = ["a", 10, "b", 20, "c", 30]
const a3 = arr8.filter(function (item) {
  return typeof item === "number"
})
console.log(a3)

const a4 = arr8.find(function (item) {
  return typeof item == "number"
})
console.log(a4)

const a5 = arr8.findIndex(function (item) {
  return typeof item == "number"
})
console.log(a5)

function isNum(value) {
  return typeof value === "number"
}
const a6 = [1, 2, '3']
console.log(a6.every(isNum))
console.log(a6.some(isNum))

const a7 = [10, 20, 30]
const total = a7.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue
}, 0)
console.log(total)

const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
]
const result = Object.groupBy(inventory, function ({ type }) {
  return type
})
console.log(result)
console.log(Object.values(a7))

const m = new Array(4)
for (var i = 0; i < 4; i++) {
  m[i] = new Array(4)
  for (var j = 0; j < 4; j++) {
    m[i][j] = `[${i}, ${j}]`
  }
}
console.log(m)
arr7.property = "value"
console.log(arr7)

///////////////////////
// KEYED COLLECTIONS //
///////////////////////

const sayings = new Map()
sayings.set("dog", "woof")
sayings.set("cat", "meow")
sayings.set("elephant", "toot")
console.log(sayings.size) // 3
console.log(sayings.get("dog")) // woof
console.log(sayings.get("fox")) // undefined
console.log(sayings.has("bird")) // false
sayings.delete("dog");
console.log(sayings.has("dog")) // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`)
}
sayings.clear()
console.log(sayings)

const mySet = new Set()
mySet.add(1)
mySet.add("some text")
mySet.add("foo")
console.log(mySet.has(1))
mySet.delete("foo")
console.log(mySet.size)

for (const item of mySet) {
  console.log(item)
}

//////////////////////////
// WORKING WITH OBJECTS //
//////////////////////////

const myHonda = {
  color: "red",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 2.2
  }
}

const Animal = {
  type: "Invertebrates",
  displayType() {
    console.log(this.type)
  }
}

const animal1 = Object.create(Animal)
animal1.displayType()

const fish = Object.create(Animal)
fish.type = "Fishes"
fish.displayType()

///////////////////
// USING CLASSES //
///////////////////

const bigDay = new Date(2019, 6, 19)
console.log(bigDay.toLocaleDateString())
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...")
}

class MyClass {
  constructor() {
    // constructor body
  }

  myField = "foo"
  myMethod() {
    console.log(this.#myPrivateField)
  }

  static myStaticField = "bar"
  static myStaticMethod() {
    // myStaticMethod body
  }

  #myPrivateField = "bar"
}

const myClass = new MyClass()
myClass.myMethod()

class Color {
  constructor(r, g, b) {
    this.values = [r, g, b]
  }
  toString() {
    return this.values.join(", ")
  }
  // getRed() {
  //   return this.values[0]
  // }
  // setRed(value) {
  //   this.values[0] = value
  // }
  get red() {
    return this.values[0]
  }
  set red(value) {
    this.values[0] = value
  }

  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

const red = new Color(255, 0, 0)
red.red = 200
console.log(red.red)
console.log(Color.isValid(1000, 0, 0))

class ColorWithAlpha extends Color {
  #alpha
  constructor(r, g, b, a) {
    super(r, g, b)
    this.#alpha = a
  }

  toString() {
    return `${super.toString()}, ${this.#alpha}`
  }

  get alpha() {
    return this.#alpha
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha value must be between 0 and 1")
    }
    this.#alpha = value
  }
}

const color = new ColorWithAlpha(255, 0, 0, 5)
console.log(color.red, color.alpha)
console.log(color.toString())