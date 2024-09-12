var revealed = 1;
function reveal() {
  if(revealed % 2 !== 0) {
    document.getElementById('nav3').style.display = "block";
    document.getElementById('navlist').style.display = "block";
    document.getElementById('nav2').style.boxShadow = "none";
    revealed += 1;
  } else if(revealed % 2 === 0) {
    document.getElementById('nav3').style.display = "none";
    document.getElementById('navlist').style.display = "none";
    document.getElementById('nav2').style.boxShadow = "0 1px 15px black";
    revealed += 1;
  }
}
function scrollFunction() {
  if ((document.body.scrollTop > 100 && document.body.scrollTop < 110) || (document.documentElement.scrollTop > 100 && document.body.scrollTop < 110)) {
    document.getElementById("logoimg").style.display = "none";
  } else {
    document.getElementById("logoimg").style.width = "150px";
    document.getElementById("logoimg").style.display = "inline";
  }
}