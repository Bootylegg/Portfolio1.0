let planmon = document.getElementById("planmon");
let donemon = document.getElementById("donemon");
let plantue = document.getElementById("plantue");
let donetue = document.getElementById("donetue");
let planwed = document.getElementById("planwed");
let donewed = document.getElementById("donewed");
let planthu = document.getElementById("planthu");
let donethu = document.getElementById("donethu");
let planfri = document.getElementById("planfri");
let donefri = document.getElementById("donefri");

let year = 2

// dropdown maken met jaar en weeknummer

function color(event) {

    let btns = document.querySelectorAll(".weekbtn");

    btns.forEach(function(element) {
        element.style.backgroundColor = '#202060';
    });

    event.target.style.backgroundColor = '#373773';
}

let buttons = document.querySelectorAll(".weekbtn");

buttons.forEach(function(button) {
  button.addEventListener("click", color);
});

// year

function coloryear(event) {

    let btns = document.querySelectorAll(".yearbtn");

    btns.forEach(function(element) {
        element.style.backgroundColor = '#202060';
    });

    event.target.style.backgroundColor = '#373773';
}

let buttonsyear = document.querySelectorAll(".yearbtn");

buttonsyear.forEach(function(button) {
  button.addEventListener("click", coloryear);
});

// im gonna make this in the most retarded way i can! :3

function year1() {
  year = 1
}

function year2() {
  year = 2
}

function year3() {
  year = 3
}

function week37() {
  if(year == 1) {
    planmon.innerHTML = "- working on logbook"
    donemon.innerHTML = "- done"
    plantue.innerHTML = "- working on logbook"
    donetue.innerHTML = "- done"
    planwed.innerHTML = "- working on logbook"
    donewed.innerHTML = "- done"
    planthu.innerHTML = "- working on logbook"
    donethu.innerHTML = "- 1"
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  } else if (year == 2) {
    planmon.innerHTML = "- working on logbook"
    donemon.innerHTML = "- done"
    plantue.innerHTML = "- working on logbook"
    donetue.innerHTML = "- done"
    planwed.innerHTML = "- working on logbook"
    donewed.innerHTML = "- done"
    planthu.innerHTML = "- working on logbook"
    donethu.innerHTML = "- 2"
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}

function week38() {
  if(year == 1) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}

function week39() {
  if(year == 1) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week40() {
  if(year == 1) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week41() {
  if(year == 1) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week42() {
  if(year == 1) {
    planmon.innerHTML = "-";
    donemon.innerHTML = "-";
    plantue.innerHTML = "-";
    donetue.innerHTML = "-";
    planwed.innerHTML = "- Starting work on logbook and starting with the Js";
    donewed.innerHTML = "- Logbook and js almost finished ";
    planthu.innerHTML = "- Finishing the logbook";
    donethu.innerHTML = "- Made the logbook more responsive";
    planfri.innerHTML = "- Making the site more responsive";
    donefri.innerHTML = "- Made the site more responsive";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week43() {
  if(year == 1) {
    planmon.innerHTML = "- No Info";
    donemon.innerHTML = "- No Info";
    plantue.innerHTML = "- No Info";
    donetue.innerHTML = "- No Info";
    planwed.innerHTML = "- No Info";
    donewed.innerHTML = "- No Info";
    planthu.innerHTML = "- Updating projects page";
    donethu.innerHTML = "- Updating project page";
    planfri.innerHTML = "- No Info";
    donefri.innerHTML = "- No Info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week44() {
  if(year == 1) {
    planmon.innerHTML = "- Choose other color scheme";
    donemon.innerHTML = "- Changed colors from gray to purple";
    plantue.innerHTML = "- Making a about me page";
    donetue.innerHTML = "- Made the about me page and updated the logbook";
    planwed.innerHTML = "- No Info";
    donewed.innerHTML = "- No Info";
    planthu.innerHTML = "- No Info";
    donethu.innerHTML = "- No Info";
    planfri.innerHTML = "- No Info";
    donefri.innerHTML = "- No Info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week45() {
  if(year == 1) {
    planmon.innerHTML = "- No Info";
    donemon.innerHTML = "- No Info";
    plantue.innerHTML = "- No Info";
    donetue.innerHTML = "- No Info";
    planwed.innerHTML = "- No Info";
    donewed.innerHTML = "- No Info";
    planthu.innerHTML = "- No Info";
    donethu.innerHTML = "- No Info";
    planfri.innerHTML = "- No Info";
    donefri.innerHTML = "- No Info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week46() {
  if(year == 1) {
    planmon.innerHTML = "- No Info";
    donemon.innerHTML = "- No Info";
    plantue.innerHTML = "- No Info";
    donetue.innerHTML = "- No Info";
    planwed.innerHTML = "- No Info";
    donewed.innerHTML = "- No Info";
    planthu.innerHTML = "- No Info";
    donethu.innerHTML = "- No Info";
    planfri.innerHTML = "- No Info";
    donefri.innerHTML = "- No Info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week47() {
  if(year == 1) {
    planmon.innerHTML = "- No Info";
    donemon.innerHTML = "- No Info";
    plantue.innerHTML = "- No Info";
    donetue.innerHTML = "- No Info";
    planwed.innerHTML = "- No Info";
    donewed.innerHTML = "- No Info";
    planthu.innerHTML = "- No Info";
    donethu.innerHTML = "- No Info";
    planfri.innerHTML = "- No Info";
    donefri.innerHTML = "- No Info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week48() {
  if(year == 1) {
    planmon.innerHTML = "- No Info";
    donemon.innerHTML = "- No Info";
    plantue.innerHTML = "- No Info";
    donetue.innerHTML = "- No Info";
    planwed.innerHTML = "- No Info";
    donewed.innerHTML = "- No Info";
    planthu.innerHTML = "- No Info";
    donethu.innerHTML = "- No Info";
    planfri.innerHTML = "- No Info";
    donefri.innerHTML = "- No Info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week49() {
  if(year == 1) {
    planmon.innerHTML = "- No Info";
    donemon.innerHTML = "- No Info";
    plantue.innerHTML = "- No Info";
    donetue.innerHTML = "- No Info";
    planwed.innerHTML = "- No Info";
    donewed.innerHTML = "- No Info";
    planthu.innerHTML = "- No Info";
    donethu.innerHTML = "- No Info";
    planfri.innerHTML = "- No Info";
    donefri.innerHTML = "- No Info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week50() {
  if(year == 1) {
    planmon.innerHTML = "- Finishing 'irritante website'";
    donemon.innerHTML = "- 'Irritante website' is almost done";
    plantue.innerHTML = "- Adding the last touches to the website";
    donetue.innerHTML = "- 'Irritante website' is done";
    planwed.innerHTML = "- Make a reflection report";
    donewed.innerHTML = "- Finished the portfolio reflection report";
    planthu.innerHTML = "- Doing english homework";
    donethu.innerHTML = "- Made english homework";
    planfri.innerHTML = "- Make a reflection report about the 'irritante webpagina'";
    donefri.innerHTML = "- Made a reflection report about the 'irritante webpagina'";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week51() {
  if(year == 1) {
    planmon.innerHTML = "- No info (dont remember)";
    donemon.innerHTML = "- No info (dont remember)";
    plantue.innerHTML = "- No info (dont remember)";
    donetue.innerHTML = "- No info (dont remember)";
    planwed.innerHTML = "- No info (dont remember)";
    donewed.innerHTML = "- No info (dont remember)";
    planthu.innerHTML = "- No info (dont remember)";
    donethu.innerHTML = "- No info (dont remember)";
    planfri.innerHTML = "- No info (dont remember)";
    donefri.innerHTML = "- No info (dont remember)";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week52() {
  if(year == 1) {
    planmon.innerHTML = "- Vacation";
    donemon.innerHTML = "- Vacation";
    plantue.innerHTML = "- Vacation";
    donetue.innerHTML = "- Vacation";
    planwed.innerHTML = "- Vacation";
    donewed.innerHTML = "- Vacation";
    planthu.innerHTML = "- Vacation";
    donethu.innerHTML = "- Vacation";
    planfri.innerHTML = "- Vacation";
    donefri.innerHTML = "- Vacation";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week1() {
  if(year == 1) {
    planmon.innerHTML = "-Vacation";
    donemon.innerHTML = "-Vacation";
    plantue.innerHTML = "-Vacation";
    donetue.innerHTML = "-Vacation";
    planwed.innerHTML = "-Vacation";
    donewed.innerHTML = "-Vacation";
    planthu.innerHTML = "-Vacation";
    donethu.innerHTML = "-Vacation";
    planfri.innerHTML = "-Vacation";
    donefri.innerHTML = "-Vacation";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week2() {
  if(year == 1) {
    planmon.innerHTML = "- Make a webgame";
    donemon.innerHTML = "- Made a cookie clicker";
    plantue.innerHTML = "- Update project";
    donetue.innerHTML = "- Updated Project";
    planwed.innerHTML = "- Update Js cat clicker";
    donewed.innerHTML = "- Updated Js cat clicker";
    planthu.innerHTML = "- Update Css cat clicker";
    donethu.innerHTML = "- Updated Css cat clicker";
    planfri.innerHTML = "- Bug fixes cat clicker";
    donefri.innerHTML = "- Fixed bugs cat clicker";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week3() {
  if(year == 1) {
    planmon.innerHTML = "- Add funtions to cat clicker";
    donemon.innerHTML = "- Added the gold cat";
    plantue.innerHTML = "- Add mroe stuff to cat clicker"
    donetue.innerHTML = "- Optimized code";
    planwed.innerHTML = "- Making cat clicker reactive";
    donewed.innerHTML = "- Made cat clicker reative";
    planthu.innerHTML = "- Sick";
    donethu.innerHTML = "- Sick";
    planfri.innerHTML = "- Update cat gold function";
    donefri.innerHTML = "- Added clicks pers second";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week4() {
  if(year == 1) {
    planmon.innerHTML = "- Add more things to catclicker";
    donemon.innerHTML = "- Updated color scheme main site";
    plantue.innerHTML = "- Update projects page";
    donetue.innerHTML = "- Started on updating projects page";
    planwed.innerHTML = "- Sick";
    donewed.innerHTML = "- Sick";
    planthu.innerHTML = "- Update projects page";
    donethu.innerHTML = "- Updated Projects page";
    planfri.innerHTML = "- Adding random things to logbook";
    donefri.innerHTML = "- Added fireworks and spinning cat";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week5() {
  if(year == 1) {
    planmon.innerHTML = "- Finishing site for Kim"
    donemon.innerHTML = "- Finished site for Kim"
    plantue.innerHTML = "- Finishing project";
    donetue.innerHTML = "- Finished project";
    planwed.innerHTML = "- Presenting project";
    donewed.innerHTML = "- Presented project";
    planthu.innerHTML = "- Updating portfolio";
    donethu.innerHTML = "- Updated portfolio";
    planfri.innerHTML = "- Switched domain";
    donefri.innerHTML = "- Switched domain";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week6() {
  if(year == 1) {
    planmon.innerHTML = "- No school";
    donemon.innerHTML = "- No school";
    plantue.innerHTML = "- No school";
    donetue.innerHTML = "- No school";
    planwed.innerHTML = "- Assesment catclicker";
    donewed.innerHTML = "- Finished assesment catclicker";
    planthu.innerHTML = "- No school";
    donethu.innerHTML = "- No school";
    planfri.innerHTML = "- No school";
    donefri.innerHTML = "- No school";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week7() {
  if(year == 1) {
    planmon.innerHTML = "- Reading C# documentation";
    donemon.innerHTML = "- Read a bit of the C# documentation";
    plantue.innerHTML = "- No info";
    donetue.innerHTML = "- No info";
    planwed.innerHTML = "- No info";
    donewed.innerHTML = "- No info";
    planthu.innerHTML = "- No info";
    donethu.innerHTML = "- No info";
    planfri.innerHTML = "- No info";
    donefri.innerHTML = "- No info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week8() {
  if(year == 1) {
    planmon.innerHTML = "- Vacation";
    donemon.innerHTML = "- Vacation";
    plantue.innerHTML = "- Vacation";
    donetue.innerHTML = "- Vacation";
    planwed.innerHTML = "- Vacation";
    donewed.innerHTML = "- Vacation";
    planthu.innerHTML = "- Vacation";
    donethu.innerHTML = "- Vacation";
    planfri.innerHTML = "- Vacation";
    donefri.innerHTML = "- Vacation";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week9() {
  if(year == 1) {
    planmon.innerHTML = "-No info";
    donemon.innerHTML = "-No info";
    plantue.innerHTML = "-No info";
    donetue.innerHTML = "-No info";
    planwed.innerHTML = "-No info";
    donewed.innerHTML = "-No info";
    planthu.innerHTML = "-No info";
    donethu.innerHTML = "-No info";
    planfri.innerHTML = "-No info";
    donefri.innerHTML = "-No info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week10() {
  if(year == 1) {
    planmon.innerHTML = "- Started project";
    donemon.innerHTML = "- Started project";
    plantue.innerHTML = "- Starting on voice recognition";
    donetue.innerHTML = "- Started on voice recognition";
    planwed.innerHTML = "- Starting with js for project";
    donewed.innerHTML = "- No info";
    planthu.innerHTML = "- No info";
    donethu.innerHTML = "- No info";
    planfri.innerHTML = "- No info";
    donefri.innerHTML = "- No info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week11() {
  if(year == 1) {
    planmon.innerHTML = "- No info";
    donemon.innerHTML = "- No info";
    plantue.innerHTML = "- No info";
    donetue.innerHTML = "- No info";
    planwed.innerHTML = "- No info";
    donewed.innerHTML = "- No info";
    planthu.innerHTML = "- No info";
    donethu.innerHTML = "- No info";
    planfri.innerHTML = "- No info";
    donefri.innerHTML = "- No info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week12() {
  if(year == 1) {
    planmon.innerHTML = "- No info";
    donemon.innerHTML = "- No info";
    plantue.innerHTML = "- No info";
    donetue.innerHTML = "- No info";
    planwed.innerHTML = "- No info";
    donewed.innerHTML = "- No info";
    planthu.innerHTML = "- No info";
    donethu.innerHTML = "- No info";
    planfri.innerHTML = "- No info";
    donefri.innerHTML = "- No info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week13() {
  if(year == 1) {
    planmon.innerHTML = "- No info";
    donemon.innerHTML = "- No info";
    plantue.innerHTML = "- No info";
    donetue.innerHTML = "- No info";
    planwed.innerHTML = "- No info";
    donewed.innerHTML = "- No info";
    planthu.innerHTML = "- No info";
    donethu.innerHTML = "- No info";
    planfri.innerHTML = "- No info";
    donefri.innerHTML = "- No info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


function week14() {
  if(year == 1) {
    planmon.innerHTML = "- No info";
    donemon.innerHTML = "- No info";
    plantue.innerHTML = "- No info";
    donetue.innerHTML = "- No info";
    planwed.innerHTML = "- No info";
    donewed.innerHTML = "- No info";
    planthu.innerHTML = "- No info";
    donethu.innerHTML = "- No info";
    planfri.innerHTML = "- No info";
    donefri.innerHTML = "- No info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}

function week15() {
  if(year == 1) {
    planmon.innerHTML = "- No info";
    donemon.innerHTML = "- No info";
    plantue.innerHTML = "- No info";
    donetue.innerHTML = "- No info";
    planwed.innerHTML = "- No info";
    donewed.innerHTML = "- No info";
    planthu.innerHTML = "- No info";
    donethu.innerHTML = "- No info";
    planfri.innerHTML = "- No info";
    donefri.innerHTML = "- No info";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}

function week16() {
  if(year == 1) {
    planmon.innerHTML = "- Updating logbook again";
    donemon.innerHTML = "-";
    plantue.innerHTML = "-";
    donetue.innerHTML = "-";
    planwed.innerHTML = "-";
    donewed.innerHTML = "-";
    planthu.innerHTML = "-";
    donethu.innerHTML = "-";
    planfri.innerHTML = "-";
    donefri.innerHTML = "-";
  } else if (year == 2) {
    planmon.innerHTML = "- "
    donemon.innerHTML = "- "
    plantue.innerHTML = "- "
    donetue.innerHTML = "- "
    planwed.innerHTML = "- "
    donewed.innerHTML = "- "
    planthu.innerHTML = "- "
    donethu.innerHTML = "- "
    planfri.innerHTML = "- "
    donefri.innerHTML = "- "
  }
}


