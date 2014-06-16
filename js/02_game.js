var x=3;
var y=3;

window.addEventListener("load", function(){
  var matches = document.querySelectorAll("td");

  // pętla do wypełniania liczbami od 1 do 15
  for (i=0;i<15;i++){
  var cell=matches[i];
  cell.innerText=i+1;}
})

 //wykrywanie, że coś z klawiatury zostało kliknięte
window.addEventListener("keydown", function(event){
  console.log(event);
  if (event.keyIdentifier=="Up") {
    y-=1;
    if (y<0) {y=0;}
  }
  else if (event.keyIdentifier=="Down") {
    y+=1;
    if (y>3) {y=3;}
  }
  else if (event.keyIdentifier=="Left") {
    x-=1;
    if (x<0) {x=0;}
  }
  else if (event.keyIdentifier=="Right") {
    x+=1;
    if (x>3) {x=3;}
  }
  console.log("x: " +x+", y: " +y)
})

