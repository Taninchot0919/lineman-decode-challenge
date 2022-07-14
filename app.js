let secret = "aWFuZ25vVzpOQU06RU5JTDp0YTpzdTpuaW9K"
let sd = Buffer.from(secret, "base64").toString("utf8")

function reverseString(str) {
  return str.split("").reverse().join("");
}
let result = reverseString(sd);

console.log(result);