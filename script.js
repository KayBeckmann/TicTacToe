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
      gamefield[row][column] = 0;
      console.log(gamefield[row[column]]);
    }
  }
  console.log(gamefield);
}

function fillShape(row, column){
  let field = document.getElementById(String(row)+String(column))

  if(gamefield[Number(row)][Number(column)] == 0){
    let sign = getSign();
    gamefield[Number(row)][Number(column)] = sign;
    field.innerHTML = sign;
    console.log(gamefield);
  }else{
    console.log("ERROR");
  }
}

function getSign(){
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