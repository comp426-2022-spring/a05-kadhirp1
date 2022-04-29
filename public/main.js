// Focus div based on nav button click

// Flip one coin and show coin image to match result when button clicked

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button



function homeNav() {
    document.getElementById("homenav").className = "active";
    document.getElementById("home").className = "active";
    document.getElementById("singlenav").className = "";
    document.getElementById("single").className = "hidden";
    document.getElementById("multinav").className = "";
    document.getElementById("multi").className = "hidden";
    document.getElementById("guessnav").className = "";
    document.getElementById("guesscoin").className = "hidden";
  }
  function singleNav() {
    document.getElementById("homenav").className = "";
    document.getElementById("home").className = "hidden";
    document.getElementById("singlenav").className = "active";
    document.getElementById("single").className = "active";
    document.getElementById("multinav").className = "";
    document.getElementById("multi").className = "hidden";
    document.getElementById("guessnav").className = "";
    document.getElementById("guesscoin").className = "hidden";
  }
  function multiNav() {
    document.getElementById("homenav").className = "";
    document.getElementById("home").className = "hidden";
    document.getElementById("singlenav").className = "";
    document.getElementById("single").className = "hidden";
    document.getElementById("multinav").className = "active";
    document.getElementById("multi").className = "active";
    document.getElementById("guessnav").className = "";
    document.getElementById("guesscoin").className = "hidden";
  }
  function guessNav() {
    document.getElementById("homenav").className = "";
    document.getElementById("home").className = "hidden";
    document.getElementById("singlenav").className = "";
    document.getElementById("single").className = "hidden";
    document.getElementById("multinav").className = "";
    document.getElementById("multi").className = "hidden";
    document.getElementById("guessnav").className = "active";
    document.getElementById("guess").className = "active";
  } 