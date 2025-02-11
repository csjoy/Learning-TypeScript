/////////////////
// GET STARTED //
/////////////////

const früh = "foobars"
console.log(früh)

var helloWorld = "Hello World"

interface User {
  name: string
  id: number
}

const user: User = {
  name: "Hayes",
  id: 0,
}

class UserAccount {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

const user1: User = new UserAccount("Murphy", 1)
console.log(user1)

type Point = {
  x: number
  y: number
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`)
}

const point: Point = { x: 12, y: 26 }
logPoint(point)

////////////////
// THE BASICS //
////////////////

const message = "hello"
// message()

const user2 = {
  name: "Daniel",
  age: 26,
}

// console.log(user.location)

function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

const bigDate = new Date(2019, 6, 19);
greet("Brendan", bigDate);
// greet("Maddison", Date())
greet("Maddison", new Date());
export { };

////////////////////
// EVERYDAY TYPES //
////////////////////

function greet1(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!")
}
greet1("Alice")

function getFavoriteNumber(): number {
  return 42
}
getFavoriteNumber()

async function getFavoriteNumberAsync(): Promise<number> {
  return 23
}
console.log(await getFavoriteNumberAsync())

const names: string[] = ["Alice", "Bob", "Chris", "Danny", "Eve"]
names.forEach(function (s: string) {
  console.log(s.toUpperCase())
})

function printCoord(point: Point) {
  console.log("The coordinate's x value is " + point.x)
  console.log("The coordinate's y value is " + point.y)
}
printCoord({ x: 3, y: 4, })

function printName(obj: { first: string, last?: string }) {
  if (obj.last) {
    console.log(obj.first + " " + obj.last)
  } else {
    console.log(obj.first)
  }
}
printName({ first: "Bob" })
printName({ first: "Alice", last: "Alisson" })

function printId(id: number | string) {
  if (typeof id == "string") {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}
printId(101)
printId("202")
printId("abc")

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "))
  } else {
    console.log("Welcome lone traveler " + x)
  }
}
welcomePeople(names)
welcomePeople(helloWorld)

function getFirstThree(x: number[] | string) {
  return x.slice(0, 3)
}
console.log(getFirstThree([1, 2, 3, 4, 5]))
console.log(getFirstThree("hello world"))

type Position = {
  name: string
  point: Point
}

type ID = number | string
type Animal = {
  name: string
}
type Bear = Animal & {
  honey: boolean
}
const bear: Bear = {
  name: "Bear",
  honey: false,
}
console.log(bear)

// const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas")
// const wrong = "hello" as number

function printText(s: string, alignment: "left" | "right" | "center") {
  console.log(s + ": " + alignment)
}
printText("G'day mate", "left")
// printText("Hello world", "centre")

type cmp = -1 | 0 | 1
function compare(a: string, b: string): cmp {
  return a == b ? 0 : (a > b ? 1 : -1)
}

type Options = {
  width: number
  height: number
}
function configure(x: Options | "auto"): void {
  console.log(x)
}
configure({ width: 100, height: 100 })
configure("auto")
// configure("automatic")

function doSomething(x: string | null): void {
  if (x == null) {
    // do something
  } else {
    console.log("Hello, " + x.toUpperCase())
  }
}

function liveDangerously(x?: number | null) {
  console.log(x!.toFixed())
}

///////////////
// NARROWING //
///////////////

function padLeft(padding: number | string, input: string): string {
  // throw new Error("Not implemented yet!")
  if (typeof padding == "number") {
    return " ".repeat(padding) + input
  }
  return padding + input
}

function printAll(strs: string[] | string | null): void {
  // if (typeof strs == "object") {
  //   for (const s of strs) {
  //     console.log(s)
  //   }
  // }

  if (Array.isArray(strs)) {
    for (const s of strs) {
      console.log(s)
    }
  } else if (typeof strs == "string") {
    console.log(strs)
  } else {
    // do nothing
  }
}

function multiplyAll(values: number[] | undefined, factor: number): number[] | undefined {
  if (!values) {
    return values
  } else {
    return values.map(function (x: number) {
      return x * factor
    })
  }
}

function example(x: string | number, y: string | boolean): void {
  if (x == y) {
    x.toUpperCase()
    y.toLowerCase()
  } else {
    console.log(x)
    console.log(y)
  }
}

type Container = {
  value: number | null | undefined
}
function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type
  if (container.value != null) {
    console.log(container.value)

    // Now we can safely multiply 'container.value'
    container.value *= factor
  }
}

type Fish = { swim: Function }
type Bird = { fly: Function }
type Human = {
  swim?: Function
  fly?: Function
}

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim()
  }
  return animal.fly()
}
function swimf() {
  console.log("swimming")
}
function birdf() {
  console.log("flying")
}
move({ fly: birdf, swim: swimf })

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString())
  } else {
    console.log(x.toUpperCase())
  }
}
logValue(new Date)

var x = Math.random() < 0.5 ? 10 : "hello world"
x = 1
console.log(x)
x = "goodbye!"
console.log(x)
// x = true

function example1() {
  var x: string | number | boolean
  x = Math.random() < 0.5
  console.log(x)

  if (Math.random() < 0.5) {
    x = "hello"
    console.log(x)
  } else {
    x = 100
    console.log(x)
  }

  return x
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim != undefined
}

function example2(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim()
  } else {
    pet.fly()
  }
}
example2({ fly: birdf })

type Shape = {
  kind: "circle" | "square"
  radius?: number
  sideLength?: number
}
function handleShape(shape: Shape) {
  if (shape.kind == "square") {
    // do something
  }
}

function getArea(shape: Shape) {
  if (shape.kind == "circle") {
    return Math.PI * shape.radius! ** 2
  }
}

interface Circle {
  kind: "circle"
  radius: number
}
interface Squre {
  kind: "square"
  sideLenth: number
}
interface Triangle {
  kind: "triangle"
  sideLength: number
}
type Shape1 = Circle | Squre

function getArea1(shape: Shape1) {
  if (shape.kind == "circle") {
    return Math.PI * shape.radius ** 2
  }
}

function getArea2(shape: Shape1) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2
    case "square":
      return shape.sideLenth ** 2
    default:
      const exhaustiveCheck: never = shape
      return exhaustiveCheck
  }
}

///////////////////////
// MORE ON FUNCTIONS //
///////////////////////

function greeter(fn: (a: string) => void) {
  fn("Hello, World")
}
function printToConsole(s: string) {
  console.log(s)
}
greeter(printToConsole)

type DescribableFunction = {
  description: string
  (someArg: number): boolean
}
function doSomething1(fn: DescribableFunction) {
  console.log(fn.description + " returned ", fn(6))
}
function myFunc(someArg: number) {
  return someArg > 3
}
myFunc.description = "default description"
doSomething1(myFunc)

interface CallOrConstruct {
  (n?: number): string
  new(s: string): Date
}

function fn(ctor: CallOrConstruct) {
  console.log(ctor(10))
  console.log(new ctor("10"))
}
fn(Date)

function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0]
}
const s = <string>firstElement(["a", "b", "c"])
const n = <number>firstElement([1, 2, 3])
const u = firstElement([])

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2)
}
// const arr = combine([1, 2, 3], ["Hello"])

function multiply(n: number, ...m: number[]) {
  return m.map(function (x) {
    return n * x
  })
}
console.log(multiply(10, 1, 2, 3))

type ABC = {
  a: number
  b: number
  c: number
}
function sum({ a, b, c, }: ABC) {
  console.log(a + b + c)
}

//////////////////
// OBJECT TYPES //
//////////////////

type PaintOptions = {
  name: string
  xPos?: number
  yPos?: number
}
function paintShape({ name, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log(name, xPos, yPos)
  // var x = opts.xPos == undefined ? 0 : opts.xPos
  // var y = opts.yPos == undefined ? 0 : opts.yPos
}
paintShape({ name: "a shape" })
paintShape({ name: "another shape", xPos: 100 })
paintShape({ name: "yet another shape", xPos: 100, yPos: 100 })

type Person = {
  name: string
  age: number
}
type ReadonlyPerson = {
  readonly name: string
  readonly age: number
}

var writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
}
var readonlyPerson: ReadonlyPerson = writablePerson
console.log(readonlyPerson.age)
writablePerson.age++
console.log(readonlyPerson.age)

function doStuff(values: readonly string[]) {
  const copy = values.slice()
  console.log("The first value is " + values[0])
  // but we can't mutate 'values'
  // values.push("hello")
}

var arr1: readonly string[] = []
var arr2: string[] = []

arr1 = arr2 // ok
// arr2 = arr1 // no ok

type StringNumberPair = [string, number]
function doSomething2(pair: StringNumberPair) {
  const a = pair[0]
  const b = pair[1]
  // const c = pair[2]
  const [inputString, hash] = pair
}

type StringNumberBooleans = [string, number, ...boolean[]]
type StringBooleansNumber = [string, ...boolean[], number]
type BooleansStringNumber = [...boolean[], string, number]

const t1: StringNumberBooleans = ["hello", 1]
const t2: StringNumberBooleans = ["beautiful", 2, true]
const t3: StringNumberBooleans = ["world", 3, true, false, true, false, true]

///////////////////////
// TYPE MANIPULATION //
///////////////////////

class GenericNumber<NumType> {
  zeroValue: NumType
  add: (x: NumType, y: NumType) => NumType
}
var myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}
console.log(myGenericNumber.add(2, 3))

type P = keyof Point
type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish
type Mapish = { [k: string]: boolean }
type M = keyof Mapish

/////////////
// CLASSES //
/////////////

class PointClass {
  x: number
  y: number

  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  scale(n: number): void {
    this.x *= n
    this.y *= n
  }

  get coord() {
    return [this.x, this.y]
  }
  set coord(value: [number, number]) {
    this.x = value[0]
    this.y = value[1]
  }
}