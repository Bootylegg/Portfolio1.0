const eenheden = ["mm", "cm", "dm", "m", "dam", "hm", "km"];

let index_left = 0; 
let index_right = 0;

let dim_select = document.getElementById("dim_select");

let inp_left = document.getElementById("inp_left");
let eenh_left = document.getElementById("eenh_left");

let inp_right = document.getElementById("inp_right");
let eenh_right = document.getElementById("eenh_right");

let opgave_float = 3.14;
let right_answer = 3.14;

let aantal_stappen = 0;


function makeProblem()
{
    //alert("makeProblem doet het " + eenheden[index_left]);
    index_left = Math.floor(Math.random() * 7);
    //nodig om de lus zeker de eerste keer in te gaan,
    //zodat index_right zeker 1 keer random wordt gegenereerd
    index_right = index_left;
    while(index_left == index_right)
    {
        index_right = Math.floor(Math.random() * 7);
    }

    eenh_left.innerHTML = eenheden[index_left] + "<sup>" + dim_select.value + "</sup>";
    eenh_right.innerHTML = eenheden[index_right] + "<sup>" + dim_select.value + "</sup>";

    opgave_float = (Math.random() * 1000).toFixed(3);
    inp_left.value = opgave_float;

    inp_right.value = "";
    inp_right.focus();
}

function checkSolution()
{
    //alert("checkSolution doet het");
    //eerst het juiste antwoord berekenen
    let factor = 10;
    if( dim_select.value > 1 ){
 
        factor = Math.pow(10, dim_select.value);
    }
    
    //als eenh_left kleiner is dan eenh_right, dan wordt het antwoord kleiner
    //oftewel moet de komma naar links
    //oftewel je moet delen door de factor
    if(index_left < index_right)
    {
        aantal_stappen = index_right - index_left;
        right_answer = opgave_float / Math.pow(factor,aantal_stappen);
    }
    //als het andersom, dan wordt het antwoord groter
    //oftewel moet de komma naar rechts
    //oftewel je moet vermenigvuldigen met de factor
    else
    {
        aantal_stappen = index_left - index_right;
        right_answer = opgave_float * Math.pow(factor,aantal_stappen);
    }
    //vergelijk het ingevoerde antwoord met het berekende antwoord en
    //geef op basis daarvan feedback
    if(inp_right.value == right_answer)
    {
        alert("GOED");
    }
    else
    {
        alert("FOUT");
    }
    //alert("de factor = " + factor + ", het aantal stappen = " + aantal_stappen + " het goede antwoord = " + right_answer);
}