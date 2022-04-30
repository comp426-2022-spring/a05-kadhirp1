// Focus div based on nav button click
const coin = document.getElementById("coinFlip");

coin.addEventListener("click", flipCoin)

async function flipCoin() {
    await fetch('http://localhost:5000/app/flip', {mode: 'cors'})
    .then(function(response){
        return response.json();
    }).then(function(json){
        //json here can be anything (not just called)
        document.getElementById("result").innerHTML = json.flip;
        document.getElementById("quarter").setAttribute("src", "assets/img/"+json.flip+".png");
        console.log(json.flip)
        
        console.log(json)
        //coin.disabled = true
    })
}



// Flip one coin and show coin image to match result when button clicked

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button



function homeNav() {
    document.getElementById("homenav").className = "active";
    document.getElementById("home").className = "active";
    document.getElementById("singlenav").className = "active";
    document.getElementById("single").className = "hidden";
    document.getElementById("multinav").className = "active";
    document.getElementById("multi").className = "hidden";
    document.getElementById("guessnav").className = "active";
    document.getElementById("guesscoin").className = "hidden";
  }
  function singleNav() {
    document.getElementById("homenav").className = "active";
    document.getElementById("home").className = "hidden";
    document.getElementById("singlenav").className = "active";
    document.getElementById("single").className = "active";
    document.getElementById("multinav").className = "active";
    document.getElementById("multi").className = "hidden";
    document.getElementById("guessnav").className = "active";
    document.getElementById("guesscoin").className = "hidden";
  }
  function multiNav() {
    document.getElementById("homenav").className = "active";
    document.getElementById("home").className = "hidden";
    document.getElementById("singlenav").className = "active";
    document.getElementById("single").className = "hidden";
    document.getElementById("multinav").className = "active";
    document.getElementById("multi").className = "active";
    document.getElementById("guessnav").className = "active";
    document.getElementById("guesscoin").className = "hidden";
  }
  function guessNav() {
    document.getElementById("homenav").className = "active";
    document.getElementById("home").className = "hidden";
    document.getElementById("singlenav").className = "active";
    document.getElementById("single").className = "hidden";
    document.getElementById("multinav").className = "active";
    document.getElementById("multi").className = "hidden";
    document.getElementById("guessnav").className = "active";
    document.getElementById("guess").className = "active";
  } 