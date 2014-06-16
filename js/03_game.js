var x=3;
var y=3;

//wypełnia komórkę o konkretnych współrzędnych wartością tekst
function fill(x,y,text){
  var rows = document.querySelectorAll("tr");
  var row = rows[y];
  var cells = row.querySelectorAll("td");
  var cell = cells[x];
  cell.innerText = text;
}

//czyta wartość w komórce i ją zwraca
function read(x,y){
  var rows = document.querySelectorAll("tr");
  var row = rows[y];
  var cells = row.querySelectorAll("td");
  var cell = cells[x];
  return cell.innerText; //zwróci nam wartość komórki
}

window.addEventListener("load", function(){
  var matches = document.querySelectorAll("td");

  // pętla do wypełniania liczbami od 1 do 15
  // for (i=0;i<15;i++){
  // var cell=matches[i];
  // cell.innerText=i+1;}

  for (var i=0; i<=3; i++){
    console.group("i: "+i);
    for (var j=0; j<=3; j++){
      console.log("j: "+j);

      // var rows = document.querySelectorAll("tr");
      // var row = rows[i];

      // var cells = row.querySelectorAll("td");
      // var cell = cells[j];
      var number = 4*i+j+1;
      if (number<16) {
        // cell.innerText = number;
        fill(j,i,number);
      }
    }
    console.groupEnd();
  }
});

 //wykrywanie, że coś z klawiatury zostało kliknięte
 window.addEventListener("keydown", function(event){

//zapamietanie pozycji x i y przed ruchem
  var old_x = x;
  var old_y = y;

  console.log(event);
  if (event.keyIdentifier=="Up") {
    y-=1;
    if (y<0){
      // debugger; //zatrzymuje wykonanie kodu w tym miejscu
      y=0;
    }
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

  //czy nastąpiła zmiana pozycji
  if (x!=old_x || y!=old_y) {
    var text = read(x,y);
    fill(old_x, old_y, text);
    fill(x,y," ");
    console.log("Zmiana pozycji!")}
    else {console.log("Pozycja nie zmieniła się!")}

  console.log("x: " +x+", y: " +y)
})

//czy zwycięzca
function isWon(){
  for (var i=0; i<=3; i++){
    for (var j=0; j<=3; j++){
      var number = 4*i+j+1;
      if (number<16) {
        if(number != parseInt(read(j,i),10)){
          return false; //funkcja przegrana
        }
      }
    }
  }
  return true;
}

window.addEventListener("keydown", function(){
if (isWon()) {
  console.log("Hurra! Wygrana")}
  else{
    console.log("Próbuj dalej!")
  }
})
