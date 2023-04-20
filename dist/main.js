import { activist, array } from "./activist.json";
console.log(activist);
console.log(array.length);
function defaultNameAndLog(nameMaybe) {
    const name = nameMaybe ?? "anonymous";
    console.log("From", nameMaybe, "to", name);
    return name;
}
const value = "a b c";
value.replaceAll(" ", ", ");
