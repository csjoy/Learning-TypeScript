const firstName = "Georgia"
const nameLength = firstName.length()

function sayMyName(fullName) {
  console.log(`You acting kind of shady, ain't calling' me ${fullName}`)
}

sayMyName("Beyonce", "Knowles")

interface Painter {
  finish(): boolean
  ownMaterials: Material[]
  paint(painting: string, materials: Material[]): boolean
}

function paintPainting(painter: Painter, painting: string): boolean {
  painter.
}

let arr: number[] = [1, 2]
console.log(arr.toString())

console.log("Nothing is worth more than laughter.")

let singer = "Ella Fitzgerald"

let bestSong = Math.random() > 0.5 ? 0 : 1;

let rapper = "Queen Latifah"
rapper.length
rapper.push("!")

let cher = {
  firstName: "Cherilyn",
  lastName: "Sarkisian",
}

cher.middleName

let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg"

let thinker: string | null = null

if (Math.random() > 0.5) {
  thinker = "Susanne Langer"
}

console.log(thinker.length)

let physicist = Math.random() > 0.5 ? "Marie Curie" : 84
physicist.toString()
physicist.toFixed()

let admiral: number | string
admiral = "Grace Hopper"
admiral.toUpperCase()
admiral = 7
admiral.toFixed()

let inventor: number | string = "Hedy Lamarr"
inventor.toUpperCase()
inventor.toFixed()

let scientist = Math.random() > 0.5 ? "Rosalind Franklin" : 51

if (scientist === "Rosalind Franklin") {
  scientist.toUpperCase()
}

scientist.toUpperCase()

let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51
if (!(typeof researcher === "string")) {
  researcher.toFixed()
} else {
  researcher.toUpperCase()
}

typeof researcher === "string" ? researcher.toUpperCase() : researcher.toFixed()

const philosopher = "Hypatia"
const mathematician1 = "Mark Goldberg"
let mathematician2 = "Mark Goldberg"

let lifespan: number | "ongoing" | "uncertain"
lifespan = 75
lifespan = "ongoing"
lifespan = "daying"
lifespan = "uncertain"

const firstName: string = null

let geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined

if (geneticist) {
  geneticist.toUpperCase();
}

geneticist.toUpperCase()
geneticist && geneticist.toUpperCase()
geneticist?.toUpperCase()

let biologist = Math.random() > 0.5 && "Rachel Carson"

if (biologist) {
  biologist
} else {
  biologist
}

let mathematician: string | undefined

mathematician?.length
mathematician = "Mark Goldberg"
mathematician.length

type RawData = boolean | number | string | null | undefined
let rawDataFirst: RawData
let rawDataSecond: RawData
let rawDataThird: RawData

type SomeType = string | undefined
console.log(SomeType)

type ID = number | string
type IDmaybe = ID | null | undefined

type IDmaybe = ID | null | undefined
type ID = number | string

const poet = {
  born: 1935,
  name: "Mary Oliver"
}

poet['born'];
poet.name
poet.end

let poetLater: {
  born: number
  name: string
}

poetLater = {
  born: 1935,
  name: "Mary Oliver",
}

poetLater = "Sappho"

type Poet = {
  born: number
  name: string
}

let poetLater: Poet

poetLater = {
  born: 1935,
  name: "Sara Teasdale"
}

poetLater = "Emily Dickinson"

type WithFirstName = {
  firstName: string
}
type WithLastName = {
  lastName: string
}
const hasBoth = {
  firstName: "Lucille",
  lastName: "Clifton",
}

let withFirstName: WithFirstName = hasBoth
let withLastName: WithLastName = hasBoth
console.log(withFirstName.firstName)
console.log(withLastName.lastName)

type FirstAndLastNames = {
  first: string
  last: string
}

const hasBoth: FirstAndLastNames = {
  first: "Sarojini",
  last: "Naidu",
}

const hasOnlyOne: FirstAndLastNames = {
  first: "Sappho"
}

type TimeRange = {
  start: Date
}

const hasStartString: TimeRange = {
  start: "1879-02-13T"
}

type Poet = {
  born: number
  name: string
}

const poetMatch: Poet = {
  born: 1928,
  name: "Maya Angelou"
}

const extraProperty: Poet = {
  activity: "walking",
  born: 1935,
  name: "Mary Oliver",
}

const existingObject = {
  activity: "walking",
  born: 1935,
  name: "Mary Oliver"
}

const extraPropertyButOk: Poet = existingObject
extraPropertyButOk.activity

type Poem = {
  author: {
    firstName: string
    lastName: string
  }
  name: string
}

const poemMatch: Poem = {
  author: {
    firstName: "Sylvia",
    lastName: "Plath",
  },
  name: "Lady Lazarus"
}

const poemMismatch: Poem = {
  author: {
    name: "Sylvia Plath"
  },
  name: "Tulips"
}

type Author = {
  firstName: string
  lastName: string
}

type Poem = {
  author: Author
  name: string
}

const poemMismatch: Poem = {
  author: {
    name: "Sylvia Plath"
  },
  name: "Tulips"
}

type Book = {
  author?: string
  pages: number
}

const ok: Book = {
  author: "Rita Dove",
  pages: 80
}

const missing: Book = {
  author: "Rita Dove"
}

type Writers = {
  author: string | undefined
  editor?: string
}

const hasRequired: Writers = {
  author: undefined
}

const missingRequired: Writers = {}

const poem = Math.random() > 0.5 ? { name: "The Double Image", pages: 7 } : { name: "Her Kind", rhymes: true }
poem.name
poem.pages
poem.rhymes

type PoemWithPages = {
  name: string
  pages: number
}

type PoemWithRhymes = {
  name: string
  rhymes: boolean
}

type Poem = PoemWithPages | PoemWithRhymes

const poem: Poem = Math.random() > 0.5 ? { name: "The Double Image", pages: 7 } : { name: "Her Kind", rhymes: true }

poem.name
poem.pages
poem.rhymes

if ("pages" in poem) {
  poem.pages
} else {
  poem.rhymes
}

if (poem.pages) {
  //
}

type PoemWithPages = {
  name: string
  pages: number
  type: "pages"
}
type PoemWithRhymes = {
  name: string
  rhymes: boolean
  type: "rhymes"
}
type Poem = PoemWithPages | PoemWithRhymes

const poem: Poem = Math.random() > 0.5
  ? { name: "The Double Image", pages: 7, type: "pages" }
  : { name: "Her Kind", rhymes: true, type: "rhymes" }

if (poem.type === "pages") {
  console.log(`It's got pages: ${poem.pages}`)
} else {
  console.log(`It rhymes: ${poem.rhymes}`)
}

poem.type
poem.pages

type Artwork = {
  genre: string
  name: string
}
type Writing = {
  pages: number
  name: string
}
type WrittenArt = Artwork & Writing

type ShortPoem = { author: string } & (| {
  kigo: string
  type: "haiku"
} | {
  meter: number
  type: "villanelle"
}
)

const morningGlory: ShortPoem = {
  author: "Fukada Chiyo-ni",
  kigo: "Morning Glory",
  type: "haiku",
}

const oneArt: ShortPoem = {
  author: "Elizabeth Bishop",
  type: "villanelle"
}

type ShortPoemBase = { author: string }
type Haiku = ShortPoemBase & {
  kigo: string
  type: "haiku"
}
type Villanelle = ShortPoemBase & {
  meter: number
  type: "villanelle"
}
type ShortPoem = Haiku | Villanelle

const oneArt: ShortPoem = {
  author: "Elizabeth Bishop",
  type: "villanelle"
}

type NotPossible = number & string
let notNumber: NotPossible = 0
let notString: never = ""

function singTwo(first: string, second: string) {
  console.log(`${first} / ${second}`)
}

singTwo("Ball and Chain")
singTwo("I will Survive", "Higher Love")
singTwo("Go Your Own Way", "The Chain", "Dreams")

function announceSong(song: string, singer?: string) {
  console.log(`Song: ${song}`)

  if (singer) {
    console.log(`Singer: ${singer}`)
  }
}

announceSong("Greensleeves")
announceSong("Greenleeves", undefined)
announceSong("Chandelier", "Sia")

function announceSongBy(song: string, singer: string | undefined) { }
announceSongBy("Greensleeves")
announceSongBy("Greensleeves", undefined)
announceSongBy("Chandelier", "Sia")

function announceSinger(singer: string, song?: string) { }

function rateSong(song: string, rating = 0) {
  console.log(`${song} gets ${rating}/5 stars`)
}

rateSong("Photograph")
rateSong("Set Fire to the Rain", 5)
rateSong("Set Fire to the Rain", undefined)
rateSong("At Last!", "100")

function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`${song}, by ${singer}`)
  }
}

singAllTheSongs("Alicia Keys")
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker face")
singAllTheSongs("Ella Fitzgerald", 2000)

function singSong(songs: string[]) {
  for (let song of songs) {
    console.log(song)
  }
  return songs.length
}

function getSongAt(songs: string[], index: number) {
  return index < songs.length ? songs[index] : undefined;
}

function signSongsRecursive(songs: string[], count: number = 0): number {
  return songs.length ? signSongsRecursive(songs.slice(1), count + 1) : count;
}

const singSongRecursive = (songs: string[], count = 0): number => songs.length ? singSongRecursive(songs.slice(1), count + 1) : count

function geteSongRecordingDate(song: string): Date | undefined {
  switch (song) {
    case "Strange Fruit":
      return new Date("April 20, 1939")
    case "Greensleeves":
      return "unknown"
    default:
      return undefined
  }
}

let nothingInGivesString: () => string
let inputAndOutput: (songs: string[], count?: number) => number

const songs = ["Juice", "Shake It Off", "What's Up"]
function runOnSongs(getSongAt: (index: number) => string) {
  for (let i = 0; i < songs.length; i++) {
    console.log(getSongAt(i))
  }
}

function getSongAt(index: number) {
  return songs[index]
}

runOnSongs(getSongAt)

function logSong(song: string) {
  return song
}

runOnSongs(logSong)

let returnsStringOrUndefined: () => string | undefined
let maybeReturnsString: (() => string) | undefined

let singer: (song: string) => string
singer = function (song) {
  return `Singing: ${song.toUpperCase()}`
}

const songs = ["Call Me", "Jolene", "The Chain"]

songs.forEach((song, index) => {
  console.log(`${song} is at index ${index}`)
})

type StringToNumber = (input: string) => number
let stringToNumber: StringToNumber

stringToNumber = (input) => input.length
stringToNumber = (input) => input.toUpperCase()

type NumberToString = (input: number) => string

function usesNumberToString(numberToString: NumberToString) {
  console.log(`The string is: ${numberToString(1234)}`)
}

usesNumberToString((input) => `${input}! Hooray!`)
usesNumberToString((input) => input * 2)

function logSong(song: string | undefined): void {
  if (!song) {
    return
  }
  console.log(song)
  return true
}

let songLogger: (song: string) => void
songLogger = (song) => {
  console.log(song)
}
songLogger("Heart of Glass")

function returnsVoid(): void {
  return
}
let lazyValue: string | undefined
lazyValue = returnsVoid()

const records: string[] = []

function saveRecords(newRecords: string[]) {
  newRecords.forEach(record => records.push(record))
}

saveRecords(["21", "Come On Over", "The Bodyguard"])

function fail(message: string): never {
  throw new Error(`Invalid failure: ${message}`)
}

function workWithUnsafeParam(param: unknown) {
  if (typeof param !== "string") {
    fail(`param should be a string, not ${typeof param}`)
  }
  param.toUpperCase()
}

function createDate(timestamp: number): Date
function createDate(month: number, day: number, year: number): Date
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
  return day === undefined || year === undefined ? new Date(monthOrTimestamp) : new Date(year, monthOrTimestamp, day)
}

createDate(554356800)
createDate(7, 27, 1987)
createDate(4, 1)

function format(data: string): string
function format(data: string, needle: string, haystack: string): string
function format(getData: () => string): string
function format(data: string, needle?: string, haystack?: string) {
  return needle && haystack ? data.replace(needle, haystack) : data
}

const warriors: string[] = ["Artemisia", "Boudica"]
warriors.push("Zenobia")
warriors.push(true)

const namesMaybe = [
  "Aqualtune",
  "Blenda",
  undefined
]

let arrayOfArrayOfNumbers: number[][]
const defenders = ["Clarenza", "Dina"]
const soldiersOrDates = ["Deborah Sampson", new Date(1782, 6, 3)]
const soldiersOrDate = soldiersOrDates[0]

function withElements(elements: string[]) {
  console.log(elements[9001].length)
}
withElements(["it's", "over"])

const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"]
const soldierAges = [90, 19, 45]
const conjoined = [...soldiers, ...soldierAges]

function logWarriors(greeting: string, ...names: string[]) {
  for (let name of names) {
    console.log(greeting, name)
  }
}

const warriors = ["Cathay Williams", "Lozen", "Nzinga"]
logWarriors("Hello", ...warriors)
const birthYears = [1844, 1840, 1583]
logWarriors("Born in", ...birthYears)

let yearsAndWarrior: [number, string]
yearsAndWarrior = [530, "Tomyris"]
yearsAndWarrior = [false, "Tomyris"]
yearsAndWarrior = [530]

let [year, warrior] = Math.random() > 0.5 ? [340, "Archidamia"] : [1828, "Rani of Jhansi"]

const pairLoose = [false, 123]
const pairTupleLoose: [boolean, number] = pairLoose

const tupleThree: [boolean, number, string] = [false, 1583, "Nzinga"]
const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]]
const tupleTwoExtra: [boolean, number] = tupleThree

function logPair(name: string, value: number) {
  console.log(name, value)
}
const pairArray = ["Amage", 1]
logPair(...pairArray)

const pairTupleIncorrect: [number, string] = [1, "Amage"]
logPair(...pairTupleIncorrect)

const pairTupleCorrect: [string, number] = ["Amage", 1]
logPair(...pairTupleCorrect)

function logTrio(name: string, value: [number, boolean]) {
  console.log(name, value[0], value[1])
}

const trios: [string, [number, boolean]][] = [
  ["Amanitore", [1, true]],
  ["Athelfled", [2, false]],
  ["Ann E. Dunwoody", [3, false]]
]
trios.forEach(trio => logTrio(...trio))
trios.forEach(logTrio)

function firstCharAndSize(input: string) {
  return [input[0], input.length]
}

const [firstChar, size] = firstCharAndSize("Gudit")

function firstCharAndSizeExplicit(input: string): [string, number] {
  return [input[0], input.length]
}

const [firstChar, size] = firstCharAndSizeExplicit("Cathay Williams")

const unionArray = [1157, "Tomoe"]
const readonlyTuple = [1157, "Tomoe"] as const;

const pairMutable: [number, string] = [1157, "Tomoe"]
pairMutable[0] = 1247

const pairAlsoMutable: [number, string] = [1157, "Tomoe"] as const

const pairConst = [1157, "Tomoe"] as const
pairConst[0] = 1247

function firstCharAndSizeAsConst(input: string) {
  return [input[0], input.length] as const
}

const [firstChar, size] = firstCharAndSizeAsConst("Ching Shih")

type Poet = {
  born: number
  name: string
}

interface Poet1 {
  born: number
  name: string
}

let valueLater: Poet
valueLater = {
  born: 1935,
  name: "Sara Teasdale"
}
valueLater = "Emily Dickinson"
valueLater = {
  born: true,
  name: "Sappho"
}

interface Book {
  author: string
  pages: number
}

const ok: Book = {
  author: "Rita Dove",
  pages: 80
}

const missing: Book = {
  pages: 80
}

interface Page {
  readonly text: string
}
function read(page: Page) {
  console.log(page.text)

  page.text += "!"
}

const pageIsh: Page = {
  text: "hello World"
}

pageIsh.text += "!"
read(pageIsh)

interface HasBothFunctionTypes {
  property: () => string
  method(): string
}

const hasBoth: HasBothFunctionTypes = {
  property: () => "",
  method() {
    return ""
  }
}

hasBoth.property()
hasBoth.method()

interface OptionalReadonlyFunctions {
  readonly optionalProperty?: () => string
  readonly optionalMethod?(): string
}

type FunctionAlias = (input: string) => number
interface CallSignature {
  (input: string): number
}

const typedFunctionAlias: FunctionAlias = (input) => input.length
const typedCallSignature: CallSignature = (input) => input.length

interface FunctionWithCount {
  count: number
  (): void
}

let hasCallCount: FunctionWithCount

function keepsTrackOfCalls() {
  keepsTrackOfCalls.count += 1
  console.log(`I've been called ${keepsTrackOfCalls.count} times!`)
}

keepsTrackOfCalls.count = 0

hasCallCount = keepsTrackOfCalls

function doesNotHaveCount() {
  console.log("No idea!")
}

hasCallCount = doesNotHaveCount

interface WordCounts {
  [i: string]: number
}
const counts: WordCounts = {}
counts.apple = 0
counts.banana = 1
counts.cherry = false

interface DatesByName {
  [i: string]: Date
}
const publishDates: DatesByName = {
  Frankenstein: new Date("1 January 1818")
}
publishDates.Frankenstein
console.log(publishDates.Frankenstein.toString())
publishDates.Beloved
console.log(publishDates.Beloved.toString())

interface HistoricalNovels {
  Oroonoko: number
  [i: string]: number
}

const novels: HistoricalNovels = {
  Outlander: 1991,
  Oroonoko: 1688,
}

const missingOroonoko: HistoricalNovels = {
  Outlander: 1991
}

interface ChapterStarts {
  preface: 0
  [i: string]: number
}

const correctPreface: ChapterStarts = {
  preface: 0,
  night: 1,
  shopping: 5,
}

const wrongPreface: ChapterStarts = {
  preface: 1
}

interface MoreNarrowNumbers {
  [i: number]: string
  [i: string]: string | undefined
}

const mixesNumbersAndStrings: MoreNarrowNumbers = {
  0: "",
  key1: "",
  key2: undefined
}

interface MoreNarrowStrings {
  [i: number]: string
  [i: string]: string
}

interface Novel {
  author: {
    name: string
  }
  setting: Setting
}

interface Setting {
  place: string
  year: number
}

let myNovel: Novel = {
  author: {
    name: "Jane Austen"
  },
  setting: {
    place: "England",
    year: 1812
  }
}

myNovel = {
  author: {
    name: "Emily Bronte"
  },
  setting: {
    place: "West Yorkshire"
  }
}

interface Writing {
  title: string
}

interface Novella extends Writing {
  pages: number
}

let myNovella: Novella = {
  pages: 195,
  title: "Ethan Frome"
}

let missingPages: Novella = {
  title: "The Awakening"
}

interface WithNullableName {
  name: string | null
}
interface WithNonNullableName extends WithNullableName {
  name: string
}
interface WithNumericName extends WithNullableName {
  name: number | string
}

interface GivesNumber {
  giveNumber(): number
}
interface GivesString {
  giveString(): string
}
interface GivesBothAndEither extends GivesNumber, GivesString {
  giveEither(): number | string
}

function useGivesBoth(instance: GivesBothAndEither) {
  instance.giveEither()
  instance.giveNumber()
  instance.giveString()
}

interface Merged {
  fromFirst: string
}
interface Merged {
  fromSecond: number
}

let a: Merged

interface Window {
  myEnvironmentVariable: string
}

window.myEnvironmentVariable

interface MergedProperties {
  same: (input: boolean) => string
  different: (input: string) => string
}

interface MergedProperties {
  same: (input: boolean) => string
  different: (input: number) => string
}

interface MergedMethods {
  different(input: string): string
}
interface MergedMethods {
  different(input: number): string
}

class Greeter {
  greet(name: string) {
    console.log(`${name}, do your stuff!`)
  }
}

new Greeter().greet("Miss Frizzle")
new Greeter().greet()

class Greeted {
  constructor(message: string) {
    console.log(`As I always say: ${message}`)
  }
}

new Greeted("take chances, make mistakes, get messy")
new Greeted()

class FieldTrip {
  destination: string
  constructor(destination: string) {
    this.destination = destination
    console.log(`We're going to ${this.destination}`)
    this.nonexistent = destination
  }
}

const trip = new FieldTrip("planetarium")
trip.destination
trip.nonexistent

class WithMethod {
  myMethod() { }
}
new WithMethod().myMethod === new WithMethod().myMethod

class WithProperty {
  myProperty: () => {}
}
new WithProperty().myProperty === new WithProperty().myProperty

class WithPropertyParameters {
  takesParameters = (input: boolean) => input ? "Yes" : "No"
}

const instance = new WithPropertyParameters()
instance.takesParameters(true)
instance.takesParameters(123)

class WithValue {
  immediate = 0
  later: number
  mayBeUndefined: number | undefined
  unused: number
  constructor() {
    this.later = 1
  }
}

class MissingInitializer {
  property: string
}

new MissingInitializer().property.length

class ActivitiesQueue {
  pending!: string[]
  initialize(pending: string[]) {
    this.pending = pending
  }
  next() {
    return this.pending.pop()
  }
}

const activities = new ActivitiesQueue()
activities.initialize(["eat", "sleep", "learn"])
activities.next();

class MissingInitializer {
  property?: string
}
new MissingInitializer().property?.length
new MissingInitializer().property.length

class Quote {
  readonly text: string
  constructor(text: string) {
    this.text = text
  }

  emphasize() {
    this.text += "!"
  }
}

const quote = new Quote("There is a brilliant child locked inside every student")
quote.text = "Ha!"

class RandomQuote {
  readonly explicit: string = "Home is the nicest word there is."
  readonly implicit = "Home is the nicest word there is."
  constructor() {
    if (Math.random() > 0.5) {
      this.explicit = "We start learning the minute we're born."
      this.implicit = "We start learning the minute we're born"
    }
  }
}

const quote = new RandomQuote()
quote.explicit
quote.implicit

class Teacher {
  sayHello() {
    console.log("Take chances, make mistakes, get messy!")
  }
}

let teacher: Teacher
teacher = new Teacher()
teacher = "Wahoo!"

class SchoolBus {
  getAbilities(): string[] {
    return ["magic", "shapshifting"]
  }
}

function withSchoolBus(bus: SchoolBus) {
  console.log(bus.getAbilities())
}

withSchoolBus(new SchoolBus())
withSchoolBus({
  getAbilities: () => ["transmogrification"]
})

withSchoolBus({
  getAbilities: () => 123
})

interface Learner {
  name: string
  study(hours: number): void
}

class Student implements Learner {
  name: string
  constructor(name: string) {
    this.name = name
  }
  study(hours: number) {
    for (let i = 0; i < hours; i++) {
      console.log("...studying...")
    }
  }
}

class Slacker implements Learner {
  name: string
  study(hours) { }
}

interface Learner {
  name: string
  study(hours: number): void
}

class Student implements Learner {
  name;
  study(hours) {

  }
}

interface Graded {
  grades: number[]
}
interface Reporter {
  report: () => string
}
class ReportCard implements Graded, Reporter {
  grades: number[]
  constructor(grades: number[]) {
    this.grades = grades
  }
  report() {
    return this.grades.join(", ")
  }
}

class Empty implements Graded, Reporter { }

interface AgeIsNumber {
  age: number
}
interface AgeIsNotANumber {
  age: () => string
}
class AsNumber implements AgeIsNumber, AgeIsNotANumber {
  age = 0
}
class NotAsNumber implements AgeIsNotANumber, AgeIsNumber {
  age() {
    return ""
  }
}

class Teacher {
  teach() {
    console.log("The surest test of discipline is its absence.")
  }
}
class StudentTeacher extends Teacher {
  learn() {
    console.log("I cannot afford the luxury of closed mind.")
  }
}
const teacher = new StudentTeacher()
teacher.learn()
teacher.teach()
teacher.other()

class Lesson {
  subject: string
  constructor(subject: string) {
    this.subject = subject
  }
}
class OnlineLesson extends Lesson {
  url: string
  constructor(subject: string, url: string) {
    super(subject)
    this.url = url
  }
}

let lesson: Lesson
lesson = new Lesson("coding")
lesson = new OnlineLesson("coding", "oreilly.com")

let online: OnlineLesson
online = new OnlineLesson("coding", "oreilly.com")
online = new Lesson("coding")

class PastGrades {
  grades: number[] = []
}
class LabeledPastGrades extends PastGrades {
  label?: string
}
let subClass: LabeledPastGrades
subClass = new LabeledPastGrades()
subClass = new PastGrades()

class GradeAnnouncer {
  message: string
  constructor(grade: number) {
    this.message = grade < 65 ? "Maybe next time..." : "You pass!"
  }
}

class PassingAnnouncer extends GradeAnnouncer {
  constructor() {
    super(100)
  }
}

class FailingAnnouncer extends GradeAnnouncer {
  constructor() { }
}

class GradesTally {
  grades: number[] = []
  addGrades(...grades: number[]): number {
    this.grades.push(...grades)
    return this.grades.length
  }
}

class ContinuedGradesTally extends GradesTally {
  constructor(previousGrades: number[]) {
    this.grades = [...previousGrades]
    super()
    console.log("Starting with length", this.grades.length)
  }
}

class GradeCounter {
  countGrades(grades: string[], letter: string) {
    return grades.filter(grade => grade === letter).length
  }
}

class FailureCounter extends GradeCounter {
  countGrades(grades: string[]) {
    return super.countGrades(grades, "F")
  }
}

class AnyFailureChecker extends GradeCounter {
  countGrades(grades: string[]) {
    return super.countGrades(grades, "F") !== 0
  }
}
const counter: GradeCounter = new AnyFailureChecker()
const count = counter.countGrades(["A", "C", "F"])

class Assignment {
  grade?: number
}
class GradedAssignment extends Assignment {
  grade: number
  constructor(grade: number) {
    super()
    this.grade = grade
  }
}

class NumericGrade {
  value = 0
}
class VagueGrade extends NumericGrade {
  value = Math.random() > 0.5 ? 1 : "..."
}

const instance: NumericGrade = new VagueGrade()
instance.value

abstract class School {
  readonly name: string

  constructor(name: string) {
    this.name = name
  }

  abstract getStudentTypes(): string[]
}

class Preschool extends School {
  getStudentTypes(): string[] {
    return ["preschool"]
  }
}

class absence extends School {

}

let school: School
school = new Preschool("Sunnyside Daycare")
school = new School("Somewhere else")

class Base {
  isPublicImplicit = 0
  public isPublicExplicit = 1
  protected isProtected = 2
  private isPrivate = 3
  #truePrivate = 4
}

class Subclass extends Base {
  example() {
    this.isPublicImplicit
    this.isPublicExplicit
    this.isProtected
    this.isPrivate
    this.#truePrivate
  }
}

new Subclass().isPublicImplicit
new Subclass().isPublicExplicit
new Subclass().isProtected
new Subclass().isPrivate

class TwoKeywords {
  private readonly name: string
  constructor() {
    this.name = "Anne Sullivan"
  }
  log() {
    console.log(this.name)
  }
}

const two = new TwoKeywords()
two.name = "Savitribai Phule"

class Question {
  protected static readonly answer: "bash"
  protected static readonly prompt = "What's an ogre's favorite programming language?"
  guess(getAnswer: (prompt: string) => string) {
    const answer = getAnswer(Question.prompt)
    if (answer === Question.answer) {
      console.log("You got it!")
    } else {
      console.log("Try again...")
    }
  }
}

function a(msg: string): string {
  let ans = prompt
  if (let aa = prompt(msg); aa) {
    return
  }
}
new Question().guess()

let anyValue: any
anyValue = "Lucille Ball"
anyValue = 123
console.log(anyValue)

function greetComedian(name: any) {
  console.log(name.toUpperCase())
}
greetComedian({ name: "Bea Arthur" })

function greetComedian(name: unknown) {
  console.log(name.toUpperCase())
}

function greetComedianSafety(name: unknown) {
  if (typeof name === "string") {
    console.log(name.toUpperCase())
  } else {
    console.log("Well, I'm off.")
  }
}

greetComedianSafety("Betty White")
greetComedianSafety({})

function isNumberOrString(value: unknown) {
  return ["number", "string"].includes(typeof value)
}

function logValueIfExists(value: number | string | null | undefined) {
  if (isNumberOrString(value)) {
    value.toString()
  } else {
    console.log("Value does not exist:", value)
  }
}

function isNumberOrString(value: unknown): value is number | string {
  return ["number", "string"].includes(typeof value)
}

function logValueIfExists(value: number | string | null | undefined) {
  if (isNumberOrString(value)) {
    value.toString()
  } else {
    console.log("value does not exist:", value)
  }
}

interface Comedian {
  funny: boolean
}
interface StandupComedian extends Comedian {
  routine: string
}
function isStandupComedian(value: Comedian): value is StandupComedian {
  return "routine" in value
}
function workWithComedian(value: Comedian) {
  if (isStandupComedian(value)) {
    console.log(value.routine)
  }
  console.log(value.routine)
}

function isLongString(input: string | undefined): input is string {
  return !!(input && input.length >= 7)
}

function workWithText(text: string | undefined) {
  if (isLongString(text)) {
    console.log("Long text:", text.length)
  } else {
    console.log("Short text:", text?.length)
  }
}

interface Ratings {
  audience: number
  critics: number
}

function getRating(ratings: Ratings, key: string): number {
  return ratings[key]
}

const ratings: Ratings = { audience: 66, critics: 84 }
getRating(ratings, "audience")
getRating(ratings, "not valid")

interface Ratings {
  audience: number
  critics: number
}
function getRating(ratings: Ratings, key: "audience" | "critics"): number {
  return ratings[key]
}

const ratings: Ratings = { audience: 66, critics: 84 }
getRating(ratings, "audience")
getRating(ratings, "not valid")

function getCountKeyof(ratings: Ratings, key: keyof Ratings): number {
  return ratings[key]
}

const original = {
  medium: "movie",
  title: "Mean Girls",
}

let adaptation: typeof original

if (Math.random() > 0.5) {
  adaptation = { ...original, medium: "play" }
  console.log(adaptation)
} else {
  adaptation = { ...original, medium: 2 }
}

const ratings = {
  imdb: 8.4,
  metacritic: 82,
}
function logRating(key: keyof typeof ratings) {
  console.log(ratings[key])
}
logRating("imdb")
logRating("invalid")

const rawData = `["grace", "frankie"]`
// Type: any
JSON.parse(rawData)
// Type: string[]
JSON.parse(rawData) as string[]
// Type: [string, string]
JSON.parse(rawData) as [string, string]
// Type: ["grace", "frankie"]
JSON.parse(rawData) as ["grace", "frankie"]

try {
  //
} catch (error) {
  console.warn("Oh no!", (error as Error).message)
}
try {
  //
} catch (error) {
  console.warn("Oh no!", error instanceof Error ? error.message : error)
}

let maybeDate = Math.random() > 0.5 ? undefined : new Date()
maybeDate as Date
maybeDate!

const seasonCounts = new Map([
  ["I Love Lucy", 6],
  ["The Golden Girls", 7],
])
const maybeValue = seasonCounts.get("I love Lucy")
console.log(maybeValue.toUpperCase())
const knownValue = seasonCounts.get("I Love Lucy")!
console.log(knownValue.toString())

const seasonCounts = new Map([
  ["Broad City", 5],
  ["Community", 6],
])

const knownValue = seasonCounts.get("I Love Lucy")!
console.log(knownValue.toString())

interface Entertainer {
  acts: string[]
  name: string
}
const declared: Entertainer = {
  name: "Moms Mabley",
}

const asserted = {
  name: "Moms Mabley"
} as Entertainer

console.log(declared.acts.join(", "))
console.log(asserted.acts.join(", "))

let myValue = "Stella!" as number
let myValueDouble = "1337" as unknown as number
console.log(typeof myValueDouble)

let a = [0, '']
let b = [0, ''] as const

const getName = () => "Maria Bamford"
const getNameConst = () => "Maria Bamford" as const

interface Joke {
  quote: string
  style: "story" | "one-liner"
}

function tellJoke(joke: Joke) {
  if (joke.style === "one-liner") {
    console.log(joke.quote)
  } else {
    console.log(joke.quote.split("\n"))
  }
}

const narrowJoke = {
  quote: "If you stay alive for no other reason do it for spite",
  style: "one-liner" as const
}

tellJoke(narrowJoke)

const wideObject = {
  quote: "Time flies when you are anxious",
  style: "one-liner"
}
tellJoke(wideObject)

function describePreference(preference: "maybe" | "no" | "yes") {
  switch (preference) {
    case "maybe":
      return "I suppose..."
    case "no":
      return "No thanks."
    case "yes":
      return "Yes please!"
  }
}

const preferencesMutable = {
  movie: "maybe",
  standup: "yes",
}

describePreference(preferencesMutable.movie)
preferencesMutable.movie = "no"

const preferencesReadonly = {
  movie: "maybe",
  standup: "yes",
} as const

describePreference(preferencesReadonly.movie)
preferencesReadonly.movie = "no"

function identity(input) {
  return input
}
identity("abc")
identity(123)
identity({ quote: "I think your self emerges more clearly over time." })

let value = identity(42)

function identity<T>(input: T) {
  return input
}

const numeric = identity("me")
const stringy = identity(123)
console.log(numeric, stringy)

function logWrapper<Input>(callback: (input: Input) => void) {
  return (input: Input) => {
    console.log("Input:", input)
    callback(input)
  }
}

logWrapper((input: string) => {
  console.log(input.length)
})

logWrapper((input) => {
  console.log(input.length)
})

logWrapper<string>((input) => {
  console.log(input.length)
})

logWrapper<string>((input: boolean) => {

})

logWrapper<string>((input: string) => { })

function makeTuple<First, Second>(first: First, second: Second) {
  return [first, second] as const
}

let tuple = makeTuple(true, "abc")

function makePair<Key, Value>(key: Key, value: Value) {
  return { key, value }
}

makePair("abc", 123)
makePair<string, number>("abc", 123)
makePair<"abc", 123>("abc", 123)

interface Box<T> {
  inside: T
}

let stringyBox: Box<string> = {
  inside: "abc"
}
let numberBox: Box<number> = {
  inside: 123
}
let incorrectBox: Box<number> = {
  inside: false
}

interface Array<T> {
  pop(): T | undefined
  push(...items: T[]): number
}

interface LinkedNode<Value> {
  next?: LinkedNode<Value>
  value: Value
}

function getLast<Value>(node: LinkedNode<Value>): Value {
  return node.next ? getLast(node.next) : node.value
}

let lastDate = getLast({
  value: new Date("09-13-1993")
})
let lastFruit = getLast({
  next: {
    value: "banana",
  },
  value: "apple"
})
let lastMismatch = getLast({
  next: {
    value: 123
  },
  value: false,
})

interface CrateLike<T> {
  contents: T
}
let missingGeneric: CrateLike = {
  inside: "??"
}
let correctGeneric: CrateLike<number> = {
  contents: 12
}

class Secret<Key, Value> {
  key: Key
  value: Value
  constructor(key: Key, value: Value) {
    this.key = key
    this.value = value
  }
  getValue(key: Key): Value | undefined {
    return this.key === key ? this.value : undefined
  }
}

const storage = new Secret(12345, "luggage");
let a = storage.getValue(1987)
console.log(a)

class CurriedCallback<Input> {
  #callback: (input: Input) => void
  constructor(callback: (input: Input) => void) {
    this.#callback = (input: Input) => {
      console.log("Input", input)
      callback(input)
    }
  }
  call(input: Input) {
    this.#callback(input)
  }
}

new CurriedCallback((input: string) => {
  console.log(input.length)
})

new CurriedCallback((input) => {
  console.log(input.length)
})

new CurriedCallback<string>((input) => {
  console.log(input.length)
})

new CurriedCallback<string>((input: boolean)) = {}

class Quote<T> {
  lines: T
  constructor(lines: T) {
    this.lines = lines
  }
}

class SpokenQuote extends Quote<string[]> {
  speak() {
    console.log(this.lines.join("\n"))
  }
}

new Quote("The only real failure is the failure to try.").lines
new Quote([4, 8, 15, 16, 23, 42]).lines

new SpokenQuote([
  "Greed is so destructive",
  "It destroys everything",
]).lines

new SpokenQuote([4, 8, 15, 16, 23, 42])

class AttributedQuote<Value> extends Quote<Value> {
  speaker: string
  constructor(value: Value, speaker: string) {
    super(value)
    this.speaker = speaker
  }
}

new AttributedQuote(
  "The road to success is always under construction.",
  "Lily Tomlin"
)

interface ActingCredit<Role> {
  role: Role
}
class MoviePart implements ActingCredit<string> {
  role: string
  speaking: boolean

  constructor(role: string, speaking: boolean) {
    this.role = role
    this.speaking = speaking
  }
}

const part = new MoviePart("Miranda Priestly", true)
part.role

class IncorrectExtention implements ActingCredit<string> {
  role: boolean
}

class CreatePairFactory<Key> {
  key: Key
  constructor(key: Key) {
    this.key = key
  }
  createPair<Value>(value: Value) {
    return { key: this.key, value }
  }
}

const factory = new CreatePairFactory("role")
const numberPair = factory.createPair(10)
const stringPair = factory.createPair("Sophie")

class BothLogger<OnInstance> {
  instanceLog(value: OnInstance) {
    console.log(value)
    return value
  }
  static staticLog<OnStatic>(value: OnStatic) {
    let fromInstance: OnInstance
    console.log(value)
    return value
  }
}
const logger = new BothLogger<number[]>
logger.instanceLog([1, 2, 3])
BothLogger.staticLog([false, true])
BothLogger.staticLog<string>("You can't change the music of your soul.")

type Nullish<T> = T | null | undefined
type CreatesValue<Input, Output> = (input: Input) => Output

let creator: CreatesValue<string, number>
creator = text => text.length
creator = text => text.toUpperCase()

type Result<Data> = FailureResult | SuccessfulResult<Data>

interface FailureResult {
  error: Error
  succeeded: false
}
interface SuccessfulResult<Data> {
  data: Data
  succeeded: true
}
function handleResult(result: Result<string>) {
  if (result.succeeded) {
    console.log(`We did it! ${result.data}`)
  } else {
    console.log(`Awww... ${result.error}`)
  }
  result.data
}

interface Quote<T = string> {
  value: T;
}
let explicit: Quote<number> = { value: 123 }
let implicit: Quote = { value: "Be yourself. The world worships the original." }
let mismatch: Quote = { value: 123 }

interface KeyValuePair<Key, Value = Key> {
  key: Key
  value: Value
}
let allExplicit: KeyValuePair<string, number> = {
  key: "rating",
  value: 10,
}
let oneDefaulting: KeyValuePair<string> = {
  key: "rating",
  value: "ten"
}
let firstMissing: KeyValuePair = {
  key: "rating",
  value: 10
}

function inTheEnd<First, Second, Third = number, Fourth = string>() { }
function inTheMiddle<First, Second = boolean, Third = number, Fourth>() { }

interface WithLength {
  length: number
}
function logWithLength<T extends WithLength>(input: T) {
  console.log(`Length: ${input.length}`)
  return input
}

logWithLength("No one can figure out your worth but you.")
logWithLength([false, true])
logWithLength({ length: 123 })
logWithLength(new Date())

function get<T, Key extends keyof T>(container: T, key: Key) {
  return container[key]
}

const roles = {
  favorite: "Fargo",
  others: ["Almost Famous", "Burn After Reading", "Nomadland"]
}

const favorite = get(roles, "favorite")
const others = get(roles, "others")
const missing = get(roles, "extras")

function get<T>(container: T, key: keyof T) {
  return container[key]
}
const roles = {
  favorite: "Fargo",
  others: ["Almost Famous", "Burn After Reading", "Nomadland"]
}
const found = get(roles, "favorite")

class PromiseLike<Value> {
  constructor(
    executor: (
      resolve: (value: Value) => void,
      reject: (reason: unknown) => void,
    ) => void
  ) { /* ... */ }
}

const resolvesUnknown = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000)
})

const resolvesString = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Done!"), 1000)
})

const textEventually = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Done"), 1000)
})
const lengthEventually = textEventually.then((text) => text.length)

async function lengthAfterSecond(text: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return text.length
}

async function lengthImmediately(text: string) {
  return text.length
}

async function givesPromiseForString(): Promise<string> {
  return "Done!"
}

async function givesString(): string {
  return "Done!"
}

function logInput<Input extends string>(input: Input) {
  console.log("Hi!", input)
}
function logInput(input: string) {
  console.log("Hi", input)
}

import { Character } from "./types";

export const character: Character = {
  catchphrase: "Yee-haw!",
  name: "Sandy Cheeks",
}

declare const myGlobalValue: string
console.log(myGlobalValue)

export function logVersion() {
  console.log(`Version: ${version}`)
}

export function logWindowVersion() {
  console.log(`Window version is: ${window.myVersion}`)
  window.alert("Built-in window types still work! Horray")
}

import { Data } from "./data"


function logData(data: Data) {
  console.log(`Data version is: ${data.version}`)
}

logData(globallyDeclared)
logData(locallyDeclared)

import { data } from "./data"

console.log(data)

export function log(...data: unknown[]) {
  console.log(data)
}

class Engineer {
  readonly area: string
  constructor(area: string) {
    this.area = area
    console.log(`I work in the ${area} area.`)
  }
}

new Engineer("mechanical").area

class Engineer {
  constructor(readonly area: string) {
    console.log(`I work in the ${area} area`)
  }
}
new Engineer("Mechanical").area

class NamedEngineer {
  fullName: string
  constructor(name: string, public area: string) {
    this.fullName = `${name}, ${area} engineer`
  }
}

enum StatusCode {
  InternalServerError = 500,
  NotFound = 404,
  Ok = 200,
}

StatusCode.InternalServerError
let statusCode: StatusCode
statusCode = StatusCode.Ok
statusCode = 200
statusCode = 202

enum VisualTheme {
  Dark, // = 0
  Light,
  System
}
enum Direction {
  Top = 1,
  Right,
  Bottom,
  Left
}
enum LoadStyle {
  AsNeeded = "as-needed",
  Eager = "eager"
}
enum Wat {
  FirstString = "first",
  SomeNumber = 9000,
  ImplicitNumber, // 9001
  AnotherString = "another",
  NotAllowed
}
const enum DisplayHint {
  Opaque = 0,
  Semitransparent,
  Transparent
}
let displayHint = DisplayHint.Transparent

namespace Randomized {
  const value = Math.random()
  console.log(`My value is ${value}`)
}

namespace Settings {
  export const name = "My Application"
  export const version = "1.2.3"
  export function describe() {
    return `${Settings.name} at version ${Settings.version}`
  }

  console.log("Initializing", describe())
}

console.log("Initialized", Settings.describe())

import { ClassOne, type ClassTwo } from "my-example-types";

new ClassOne()
new ClassTwo()

type Animals = "alligator" | "baboon" | "cat"

type AnimalCounts = {
  [K in Animals]: number
}

interface AnimalVariants {
  alligator: boolean
  baboon: number
  cat: string
}
type AnimalCount = {
  [K in keyof AnimalVariants]: number
}

interface BirdVariants {
  dove: string
  eagle: boolean
}
type NullableBirdVariants = {
  [K in keyof BirdVariants]: BirdVariants[K] | null
}

interface Researcher {
  researchMethod(): void
  researchProperty: () => string
}
type JustProperties<T> = {
  [K in keyof T]: T[K]
}

type ReasearchProperties = JustProperties<Researcher>

interface Environmentalist {
  area: string
  name: string
}
type ReadonlyEnvironmentalist = {
  readonly [K in keyof Environmentalist]: Environmentalist[K]
}
type OptionalReadonlyEnvironmentalist = {
  [K in keyof ReadonlyEnvironmentalist]?: ReadonlyEnvironmentalist[K]
}

interface Conservationist {
  name: string
  catchphrase?: string
  readonly born: number
  readonly died?: number
}
type WritableConservationist = {
  -readonly [K in keyof Conservationist]: Conservationist[K]
}
type RequiredWritableConservationist = {
  [K in keyof WritableConservationist]-?: WritableConservationist[K]
}

type MakeReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
interface Species {
  genus: string
  name: string
}
type ReadonlySpecies = MakeReadonly<Species>

interface GenusData {
  family: string
  name: string
}
type MakeOptional<T> = {
  [K in keyof T]?: T[K]
}
function createGenusData(overrides?: MakeOptional<GenusData>): GenusData {
  return {
    family: "unknown",
    name: "unknown",
    ...overrides
  }
}

type CheckStringAgainstNumber = string extends number ? true : false

type CheckAgainstNumber<T> = T extends number ? true : false
type CheckString1 = CheckAgainstNumber<"parakeet">
type CheckString2 = CheckAgainstNumber<1891>
type CheckString3 = CheckAgainstNumber<number>

type CallableSetting<T> = T extends () => any ? T : () => T
type GetNumbersSetting = CallableSetting<() => number[]>
type StringSetting = CallableSetting<string>

interface QueryOptions {
  throwIfNotFound: boolean
}
type QueryResult<Options extends QueryOptions> = Options["throwIfNotFound"] extends true ? string : string | undefined

declare function retrieve<Options extends QueryOptions>(
  key: string,
  options?: Options
): Promise<QueryResult<Options>>

await retrieve("Birute Galdikas")

await retrieve("Jane Goodall", { throwIfNotFound: Math.random() > 0.5 })

await retrieve("Dian Fossey", { throwIfNotFound: true })

type ArrayifyUnlessString<T> = T extends string ? T : T[]
type HalfArrayified = ArrayifyUnlessString<string | number>

type ArrayItems<T> = T extends (infer Item)[] ? Item : T

type StringItem = ArrayItems<string>
type StringArrayItem = ArrayItems<string[]>
type String2DItem = ArrayItems<string[][]>

type ArrayItemsRecursive<T> = T extends (infer Item)[] ? ArrayItemsRecursive<Item> : T
type StringItem = ArrayItemsRecursive<string>
type StringArrayItem = ArrayItemsRecursive<string[]>
type String2DItem = ArrayItemsRecursive<string[][]>

type MakeAllMembersFunctions<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? T[K] : () => T[K]
}
type MemberFunctions = MakeAllMembersFunctions<{
  alreadyFunction: () => string,
  notYetFunction: number
}>

type NeverIntersection = never & string
type NeverUnion = never | string

type OnlyStrings<T> = T extends string ? T : never
type RedOrBlue = OnlyStrings<"red" | "blue" | 0 | false>

type FirstParameter<T extends (...args: any[]) => any> = T extends (arg: infer Arg) => any ? Arg : never;

type GetsString = FirstParameter<(arg0: string) => void>

type OnlyStringProperties<T> = {
  [K in keyof T]: T[K] extends string ? K : never
}[keyof T]

interface AllEventData {
  participants: string[]
  location: string
  name: string
  year: number
}

type OnlyStringEventData = OnlyStringProperties<AllEventData>

type Greeting = `Hello${string}`

let matches: Greeting = "Hello, world!"
let outOfOrder: Greeting = "World! Hello"
let missingAltogether: Greeting = "hi"

type Brightness = "dark" | "light"
type Color = "blue" | "red"

type BrightnessAndColor = `${Brightness}-${Color}`
let colorOk: BrightnessAndColor = "light-red"
let colorWrongStart: BrightnessAndColor = "medium-blue"
let colorWrongEnd: BrightnessAndColor = "light-green"

type ExtolNumber = `much ${number} wow`
function extol(extolee: ExtolNumber) { /* ... */ }
extol("much 0 wow")
extol("much -7 wow")
extol("much 9.001 wow")
extol("much false wow")

type FormalGreeting1 = Capitalize<"hello.">
type FormalGreeting2 = Uppercase<"hello.">
type FormalGreeting3 = Lowercase<"heLlo.">
type FormalGreeting4 = Uncapitalize<"Hello.">

type DataKey = "location" | "name" | "year"
type ExistenceChecks = {
  [K in `check${Capitalize<DataKey>}`]: () => boolean
}

function checkExistence(checks: ExistenceChecks) {
  checks.checkLocation()
  checks.checkName()
  checks.checkWrong()
}

interface DataEntry<T> {
  key: T
  value: string
}

type DataKey = "location" | "name" | "year"

type DataEntryGetters = {
  [K in DataKey as `get${Capitalize<K>}`]: () => DataEntry<K>
}

const config = {
  location: "unknown",
  name: "anonymous",
  year: 0
}
type LazyValues = {
  [K in keyof typeof config as `${K}Lazy`]: () => Promise<typeof config[K]>
}
async function withLazyValues(configGetter: LazyValues) {
  await configGetter.locationLazy
  await configGetter.missingLazy
}

type TurnIntoGettersDirect<T> = {
  [K in keyof T as `get${K}`]: () => T[K]
}

const someSymbol = Symbol("")
interface HasStringAndSymbol {
  StringKey: string
  [someSymbol]: number
}

type TurnIntoGetters<T> = {
  [K in keyof T as `get${string & K}`]: () => T[K]
}

type GettersJustString = TurnIntoGetters<HasStringAndSymbol>