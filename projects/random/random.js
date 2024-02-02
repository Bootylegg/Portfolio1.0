var audio = new Audio('default.mp3')
var audio2 = new Audio('petah.mp3')
var audio3 = new Audio('cleveland-no.mp3')
var audio4 = new Audio('Hallelujah.mp3')

function randochance() {
    const button = document.getElementById("button") 
    button.onclick = null;
    setTimeout(() => {
        button.onclick = randochance
    }, 2505);
    chance = Math.floor(Math.random() * 50)
    if(chance == 1) {
           document.getElementById("vidsrc").style.maxWidth = "400px"
           audio2.play()
           generate()
    } else{
       generate()
    }
}

function generate() {

    const who = ["Peter Griffin", "Lois Griffin","Stewie Griffin","Glenn Quagmire","Meg Griffin","Brian Griffin","Joe Swanson","Chris Griffin","Adam West","Cleveland Brown","Herbert","Bonnie Swanson","Ernie","Cleveland Brown Jr.","Tricia Takanawa","Jillian Russell","Kevin Swanson","Bertram","Loretta Brown","Tomik","Mort Goldman","Tom Tucker","Diane Simmons","Jonathan Weed","Carter Pewterschmidt","Jesus"]
    const where = ["the Drunken Clam","the Drunken Clam","the Adam West High school","Goldman's House","Spooner Street","Petoria","Joehio","Quagmire's house","Joe's house","Cleveland's house","heaven","florida","the simpsons"]
    const what = ["write a tv pilot","drive a hummer", "get a new staircase","join the police force","punch a chicken","fart","eat rice crackers","drink","time travel", "do crack"]
    const how = ["walking", "running", "swimming", "biking", "flying", "crawling", "driving"]
    const and = ["Peter Griffin", "Lois Griffin","Stewie Griffin","Glenn Quagmire","Meg Griffin","Brian Griffin","Joe Swanson","Chris Griffin","Adam West","Cleveland Brown","Herbert","Bonnie Swanson","Ernie","Cleveland Brown Jr.","Tricia Takanawa","Jillian Russell","Kevin Swanson","Bertram","Loretta Brown","Tomik","Mort Goldman","Tom Tucker","Diane Simmons","Jonathan Weed","Carter Pewterschmidt","Jesus"]

    randomwho = who[Math.floor(Math.random() * 26)]
    randomwhere = where[Math.floor(Math.random() * 13)]
    randomwhat = what[Math.floor(Math.random() * 10 )]
    randomhow = how[Math.floor(Math.random() * 7 )]
    randomand = and[Math.floor(Math.random()*26)]
    
    if(randomwho == randomand) {
        generate()
    } else {
        write()
    }

    if(who[0] == randomwho) {
        audio2.play()
        document.getElementById("img").style.backgroundImage = 'url("petah.gif")'
        document.getElementById("img2").style.backgroundImage = 'url("petah.gif")'
        document.getElementById("img3").style.backgroundImage = 'url("petah.gif")'
        setTimeout(() => {
            document.getElementById("img").style.backgroundImage = 'url("")'
            document.getElementById("img2").style.backgroundImage = 'url("")'
            document.getElementById("img3").style.backgroundImage = 'url("")'
        }, 2500);
    } else if(who[9] == randomwho) {
        audio3.play()
        document.getElementById("img").style.backgroundImage = 'url("cleveland.gif")'
        document.getElementById("img2").style.backgroundImage = 'url("cleveland.gif")'
        document.getElementById("img3").style.backgroundImage = 'url("cleveland.gif")'
        setTimeout(() => {
        document.getElementById("img").style.backgroundImage = 'url("")'
        document.getElementById("img2").style.backgroundImage = 'url("")'
        document.getElementById("img3").style.backgroundImage = 'url("")'
    }, 2500);
    } else if(who[25] == randomwho) {
        audio4.play()
        document.getElementById("img").style.backgroundImage = 'url("jesus.gif")'
        document.getElementById("img2").style.backgroundImage = 'url("jesus.gif")'
        document.getElementById("img3").style.backgroundImage = 'url("jesus.gif")'
        let changeimg3 = setTimeout(() => {
        document.getElementById("img").style.backgroundImage = 'url("")'
        document.getElementById("img2").style.backgroundImage = 'url("")'
        document.getElementById("img3").style.backgroundImage = 'url("")'
    }, 2500);
    } else {
        audio.play()
        document.getElementById("img").style.backgroundImage = 'url("hihi.gif")'
        document.getElementById("img2").style.backgroundImage = 'url("hihi.gif")'
        document.getElementById("img3").style.backgroundImage = 'url("hihi.gif")'
        setTimeout(() => {
        document.getElementById("img").style.backgroundImage = 'url("")'
        document.getElementById("img2").style.backgroundImage = 'url("")'
        document.getElementById("img3").style.backgroundImage = 'url("")'
    }, 2500);
    } 
}

function write() {
    document.getElementById("text").innerHTML = (randomwho + " is " + randomhow + " to " + randomwhere +  " to " + randomwhat + " with " + randomand)
}
