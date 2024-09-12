  var status = 1;
  var headerArray = document.getElementsByTagName('h1');
  var headerArray2 = document.getElementsByTagName('h2');
  var headerArray3 = document.getElementsByTagName('h3');
  var headerArray4 = document.getElementsByTagName('h4');
  var textArray = document.getElementsByTagName('p');
  var linkArray = document.getElementsByTagName('a');
  function excecute() {
    if(status % 2 === 0) {
      lightTheme();
    } else {
      darkTheme();
    }
  }
  function darkTheme() {
    for(var i = 0; i < headerArray.length; i++) {
      headerArray[i].style.color = "white";
    }
    for(var i = 0; i < textArray.length; i++) {
      textArray[i].style.color = "white";
    }
    for(var i = 0; i < linkArray.length; i++) {
      linkArray[i].style.color = "#dae4ed";
    }
    for(var i = 0; i < headerArray2.length; i++) {
      headerArray2[i].style.color = "white";
    }
    for(var i = 0; i < headerArray3.length; i++) {
      headerArray3[i].style.color = "white";
    }
    for(var i = 0; i < headerArray4.length; i++) {
      headerArray[i].style.color = "white";
    }
    document.body.style.background = "#535557";
    document.getElementById('navbar').style.background = "black";
    document.getElementById('active').style.background = "black";
    document.getElementById('navbar').style.height = "56px";
    document.getElementById('footer').style.background = "black";
    status ++;
    console.log(status);
  }
  function lightTheme() {
    for(var i = 0; i < headerArray.length; i++) {
      headerArray[i].style.color = "black";
    }
    for(var i = 0; i < textArray.length; i++) {
      textArray[i].style.color = "black";
    }
    for(var i = 0; i < linkArray.length; i++) {
      linkArray[i].style.color = "black";
    }
    for(var i = 0; i < headerArray2.length; i++) {
      headerArray2[i].style.color = "black";
    }
    for(var i = 0; i < headerArray3.length; i++) {
      headerArray3[i].style.color = "black";
    }
    for(var i = 0; i < headerArray4.length; i++) {
      headerArray[i].style.color = "black";
    }
    document.body.style.background = "#e4eff5";
    document.getElementById('navbar').style.background = "#e8f7ff";
    document.getElementById('active').style.background = "#daecf5";
    document.getElementById('footer').style.background = "#7fb1c9";
    status ++;
    console.log(status);
  }