let card = document.querySelectorAll('#card');
card.forEach(function(cards){
    cards.addEventListener('click', function(){
        document.querySelector(".main").style.display = "none";
        document.querySelector("#women").style.display = "none";
        document.querySelector("#men").style.display = "none";
        document.querySelector("#CardImage").appendChild(cards);
    })
})