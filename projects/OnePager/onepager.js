let phone = document.getElementById("phone")

function removeelement() {
    phone.style.opacity = 0
}

function addelement() {
    phone.style.opacity = 1
}

let hovercheck = 0;

let colorInterval;

function startColorLoop() {
    let hovercheck = 0;
    let colorchange = document.getElementById('text');

    colorInterval = setInterval(() => {
        switch (hovercheck) {
            case 0:
                colorchange.style.color = "blue";
                break;
            case 1:
                colorchange.style.color = "red";
                break;
                case 2:
                colorchange.style.color = "green";
                break;
                case 3:
            default:
                colorchange.style.color = "black";
                break;
        }
        hovercheck = (hovercheck + 1) % 3;
    }, 100);
}

function startColorLoop2() {
    let hovercheck = 0;
    let colorchange2 = document.getElementById('text2');

    colorInterval = setInterval(() => {
        switch (hovercheck) {
            case 0:
                colorchange2.style.color = "blue";
                break;
            case 1:
                colorchange2.style.color = "red";
                break;
                case 2:
                colorchange2.style.color = "green";
                break;
                case 3:
            default:
                colorchange2.style.color = "black";
                break;
        }
        hovercheck = (hovercheck + 1) % 3;
    }, 100);
}

function stopColorLoop() {
    clearInterval(colorInterval);
    document.getElementById('text').style.color = "black";
}

function stopColorLoop2() {
    clearInterval(colorInterval);
    document.getElementById('text2').style.color = "black";
}