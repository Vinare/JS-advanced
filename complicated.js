const num = 266219

let arr = Array.from(String(num), Number)

let result = 1

for(let i = 0; i < arr.length; i++) {
  result = result * arr[i]
}

console.log(result)

result **= 3

console.log(result)

console.log(String(result).slice(0,2))