import { activist, array } from "./activist.json"
console.log(activist)
console.log(array.length)

function defaultNameAndLog(nameMaybe: string | undefined) {
  const name = nameMaybe ?? "anonymous"
  console.log("From", nameMaybe, "to", name)
  return name
}

const value = "a b c"
value.replaceAll(" ", ", ")

const logMessage = (message) => {
  console.log(`Message: ${message}`)
}

type LogMessage = (message: string) => void
const logMessage: LogMessage = (message) => {
  console.log(`Message: ${message}`)
}

function getLength(text: string, trim?: boolean) {
  return trim ? text.trim().length : text.length
}

getLength.apply
getLength.bind(undefined, "abc123")
getLength.call(undefined, "abc123", true)

function checkOnNumber(containsA: (input: number | string) => boolean) {
  return containsA(1337)
}

function stringContainsA(input: string) {
  return !!input.match(/a/i)
}

checkOnNumber(stringContainsA)

let strval: string;

strval = "abc123"
strval = null