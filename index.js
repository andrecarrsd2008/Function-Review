// console.log(6 === 4 + 2)

// console.log(6 === addStuff(2, 4))

function addStuff(a, b){
    return a + b
}

function subStuff(a, b){
    return a - b
}

// console.log(-2 === subStuff(2, 4))

// console.log(18 === multiply(3, 6))

function multiply(a, b) {
  return a * b
}

console.log(2 === divide(6, 3))

function divide(a, b) {
  return a / b
}

function assert(expected, actual, message){
    if(expected === actual){
        return true;
    }
    else{
        console.log(message);
    }
}

// function functionName (p) {...}
assert(6, addStuff(4,2), "add happy path") // =>
assert(6, addStuff(4,2), "add happy path") // => "add unhappy path"

