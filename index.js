// Part1: Stack Overflow
let counter = 0;
function incrementForever() {
    counter++;
    incrementForever();
}

try {
    // incrementForever();
} catch (error) {
    console.log(error)
    console.log(counter)
}

function incrementTo(num) {
    if(num <= 0) {
        return
    }
    if (num === counter) {
        return;
    }
    counter +=1;
    incrementTo(num)
}

try {
    incrementTo(100);
    console.log(counter)
} catch (error) {
    console.log(error)
    
}

//Part3: Deferred Execution

const primeNumber = document.getElementById("primeList");

function getPrimeNumber  (num) {
    if(num <=1){
        return false;
    }
    for(let i =2; i <= Math.sqrt(num); i++){
        if(num % 2 === 0){
            return false;
        }
    }
    return true;
}
console.log(getPrimeNumber(5));

function addPrimeNumber(n){
    let primeList = [];
    for(let i = 2; i <= n; i++){
        if(getPrimeNumber(i)){
            primeList.push(i)
        }
    }
    primeNumber.textContent = primeList.join(", ");

}

// function of alert
function alertToUser () {
    alert("Prime number calculation is finished");
}