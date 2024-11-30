//script for index.html

//There might be a way to make the code simplier but I can only get it to work this way

//nav bars

//nav item 1
document.getElementById("hyperlink").addEventListener('mouseover', mouseOver, false);
document.getElementById("hyperlink").addEventListener('mouseout', mouseOut, false);
function mouseOver() {
  document.getElementById("hyperlink").style.color = "black";
}

function mouseOut() {
  document.getElementById("hyperlink").style.color = "white";
}

//nav item 2
document.getElementById("hyperlink1").addEventListener('mouseover', mouseOver1, false);
document.getElementById("hyperlink1").addEventListener('mouseout', mouseOut1, false);
function mouseOver1() {
  document.getElementById("hyperlink1").style.color = "black";
}

function mouseOut1() {
  document.getElementById("hyperlink1").style.color = "white";
}

//nav item 3
document.getElementById("hyperlink2").addEventListener('mouseover', mouseOver2, false);
document.getElementById("hyperlink2").addEventListener('mouseout', mouseOut2, false);
function mouseOver2() {
  document.getElementById("hyperlink2").style.color = "black";
}

function mouseOut2() {
  document.getElementById("hyperlink2").style.color = "white";
}

//nav item 4
document.getElementById("hyperlink3").addEventListener('mouseover', mouseOver3, false);
document.getElementById("hyperlink3").addEventListener('mouseout', mouseOut3, false);
function mouseOver3() {
  document.getElementById("hyperlink3").style.color = "black";
}

function mouseOut3() {
  document.getElementById("hyperlink3").style.color = "white";
}

//links
let color = "nil"
document.getElementById("wiki").addEventListener('click', click, false);
function click() {
  document.getElementById("wiki").style.color = "aqua";
  color = "aqua"
}
document.getElementById("wiki").addEventListener('mouseover', mouseOver12, false);
document.getElementById("wiki").addEventListener("mouseout", mouseOut12, false);
function mouseOver12() {
  document.getElementById("wiki").style.color = "rgb(188, 193, 197)";
}
function mouseOut12() {
  if (color == "aqua") {
    document.getElementById("wiki").style.color = "aqua";
  }  else {document.getElementById("wiki").style.color = "white";

  }
}