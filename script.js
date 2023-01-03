let rows = new Array;
let gamefield = new Array;
let player = true;

function initailsation(){
  for(let row=0; row<3;row++){
    rows=[];
    for(let column=0; column<3; column++){
      rows.push(0);
    }
    gamefield.push(rows);
  }
}

function reset(){
  for(let row=0; row<gamefield.length; row++){
    for(let column=0; column<rows.length; column++){
      let id = String(row) + String(column);
      gamefield[row][column] = 0;
      document.getElementById(id).innerHTML = "";
    }
  }
  document.getElementById("dialog").classList.add("d-none");
  player = true;
  changePlayerSign();
}

function fillShape(row, column){
  let field = document.getElementById(String(row)+String(column))

  if(gamefield[Number(row)][Number(column)] == 0){
    field.innerHTML = getSign(row, column);
    checkForWin();
    player = !player;
    changePlayerSign();  
  }else{
    alert("Feld ist schon belegt!");
  }
}

function getSign(row, column){
  if(player){
    gamefield[Number(row)][Number(column)] = "circle";
    return `<img class="sign" src="./images/circle.png">`;
  }else{
    gamefield[Number(row)][Number(column)] = "cross";
    return `<img class="sign" src="./images/cross.png">`;
  }
}

function changePlayerSign(){
  let circle = document.getElementById("circle");
  let cross = document.getElementById("cross");
  if(player){
    circle.classList.remove("d-none");
    cross.classList.add("d-none");
  }else{
    circle.classList.add("d-none");
    cross.classList.remove("d-none");
  }
}

function checkForWin(){
  if(gamefield[0][0] != 0 && gamefield[0][0] === gamefield[0][1] && gamefield[0][1] === gamefield[0][2]){ //Waagerecht oben
    document.getElementById("dialog").classList.remove("d-none");
  }
  if(gamefield[1][0] != 0 && gamefield[1][0] === gamefield[1][1] && gamefield[1][1] === gamefield[1][2]){ //Waagerecht mitte
    document.getElementById("dialog").classList.remove("d-none");
  }
  if(gamefield[2][0] != 0 && gamefield[2][0] === gamefield[2][1] && gamefield[2][1] === gamefield[2][2]){ //Waagerecht unten
    document.getElementById("dialog").classList.remove("d-none");
  }
  if(gamefield[0][0] != 0 && gamefield[0][0] === gamefield[1][0] && gamefield[1][0] === gamefield[2][0]){ //Senkrecht links
    document.getElementById("dialog").classList.remove("d-none");
  }
  if(gamefield[0][1] != 0 && gamefield[0][1] === gamefield[1][1] && gamefield[1][1] === gamefield[2][1]){ //Senkrecht mitte
    document.getElementById("dialog").classList.remove("d-none");
  }
  if(gamefield[0][2] != 0 && gamefield[0][2] === gamefield[1][2] && gamefield[2][2] === gamefield[0][2]){ //Senkrecht rechts
    document.getElementById("dialog").classList.remove("d-none");
  }
  if(gamefield[0][0] != 0 && gamefield[0][0] === gamefield[1][1] && gamefield[1][1] === gamefield[2][2]){ //Diagonale links oben -> rechts unten
    document.getElementById("dialog").classList.remove("d-none");
  }
  if(gamefield[2][0] != 0 && gamefield[2][0] === gamefield[1][1] && gamefield[1][1] === gamefield[0][2]){ //Diagonale links unten -> rechts oben
    document.getElementById("dialog").classList.remove("d-none");
  }
  if(gamefield[0][0] != 0 && gamefield[0][1] != 0 && gamefield[0][2] != 0 && gamefield[1][0] != 0 && gamefield[1][1] != 0 && gamefield[1][2] != 0 && gamefield[2][0] != 0 && gamefield[2][1] != 0 && gamefield[2][2] != 0){
    document.getElementById("dialog").classList.remove("d-none");
    document.getElementById("winner").innerHTML = "Unentschieden!!!";
    return 0;
  }
  winner();
}

function winner(){
  if(player){
    document.getElementById("winner").innerHTML = "Kreis hat gewonnen";
  }else{
    document.getElementById("winner").innerHTML = "Kreuz hat gewonnen";
  }
}