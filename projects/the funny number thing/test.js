function test() {
    let numbers = [];
    
    for (let index = 1; index <= 32; index++) {
        let id = index;
        let element = document.getElementById(id);
        
        if (element) {
            let randomNumber = Math.floor(Math.random() * 32);
            numbers.push(randomNumber);
            element.innerText = randomNumber;
            console.log("id = " + id + ", randomNumber = " + randomNumber);
        } else {
            console.log("Element with id " + id + " not found.");
        }
    }
    
    let duplicateFound = false;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                duplicateFound = true;
                break;
            }
        }
        if (duplicateFound) {
            break;
        }
    }
    
    if (duplicateFound) {
        console.log("Duplicate numbers found.");
        setTimeout(() => {
            test()
        }, 0);
    } else {
        console.log("No duplicate numbers found.");
    }
}