
function flipCard()
{
    const card = document.getElementById("card1");
    card.style.opacity = "100%";
    setTimeout(function(){
        card.style.opacity = "0%";
    }, 2000);
}

function flipCard1()
{
    const card = document.getElementById("card2");
    card.style.opacity = "100%";
    setTimeout(function(){
        card.style.opacity = "0%";
    }, 2000);
}