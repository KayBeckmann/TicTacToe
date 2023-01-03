let rows = new Array;
let gamefield = new Array;
let player = true;
let finished = false;

function initailsation(){
  for(let row=0; row<3;row++){
    rows=[];
    for(let column=0; column<3; column++){
      rows.push(10);
    }
    gamefield.push(rows);
  }
}

function reset(){
  for(let row=0; row<gamefield.length; row++){
    for(let column=0; column<rows.length; column++){
      let id = String(row) + String(column);
      gamefield[row][column] = 10;
      document.getElementById(id).innerHTML = "";
    }
  }
  document.getElementById("dialog").classList.add("d-none");
  player = true;
  changePlayerSign();
}

function fillShape(row, column){
  let field = document.getElementById(String(row)+String(column))

  if(gamefield[Number(row)][Number(column)] == 10){
    field.innerHTML = getSign(row, column);
    checkForWin();
    console.log(gamefield);
  }else{
    console.log("ERROR");
  }
}

function getSign(row, column){
  gamefield[Number(row)][Number(column)] = player;
  if(player){
    player = false;
    changePlayerSign();
    return `<img class="sign" src="./images/circle.png">`;
  }else{
    player = true;
    changePlayerSign();
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
  if(gamefield[0][0] == gamefield[0][1] == gamefield[0][2]){
    console.log("GEWONNEN");
    document.getElementById("dialog").classList.remove("d-none");
  }
}