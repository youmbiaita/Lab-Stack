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