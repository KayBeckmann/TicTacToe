let rows = new Array;
let gamefield = new Array;

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
  gamefield[Number(row)][Number(column)] = 10;
  console.log(`Feld(${row}, ${column})`);
  console.log(gamefield)
}