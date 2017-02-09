$( document ).ready(function(){
  var Random=Math.floor(Math.random()*200)
 
  $('#randomNumber').text(Random);
 
  var number1= Math.floor(Math.random()*15)
  var number2= Math.floor(Math.random()*15)
  var number3= Math.floor(Math.random()*15)
  var number4= Math.floor(Math.random()*15)
  
  var destruction= 0; 
  var winCount= 0;
  var lossCount = 0;

$('#winCo').text(winCount);
$('#lossCo').text(lossCount);

function restart(){
      Random=Math.floor(Math.random()*200);
      console.log(Random)
      $('#randomNumber').text(Random);
      number1= Math.floor(Math.random()*15);
      number2= Math.floor(Math.random()*15);
      number3= Math.floor(Math.random()*15);
      number4= Math.floor(Math.random()*15);
      destruction= 0;
      $('#destructionTally').text(destruction);
      } 

function victory(){
alert("You've succeded in destroying a city!");
  winCount++; 
  $('#winCo').text(winCount);
  restart();
}

function loser(){
alert ("You've failed to destroy a city.");
  lossCount++;
  $('#lossCo').text(lossCount);
  restart()
}


  $('#one').on ('click', function(){
    destruction = destruction + number1;
    console.log("New destruction score= " + destruction);
    $('#destructionTally').text(destruction); 

        if (destruction == Random){
          victory();
        }
        else if ( destruction > Random){
          loser();
        }   
  })  
  $('#two').on ('click', function(){
    destruction = destruction + number2;
    console.log("New destruction score= " + destruction);
    $('#destructionTally').text(destruction); 
        if (destruction == Random){
          victory();
        }
        else if ( destruction > Random){
          loser();
        } 
  })  
  $('#three').on ('click', function(){
    destruction = destruction + number3;
    console.log("New destruction score= " + destruction);
    $('#destructionTally').text(destruction);

          if (destruction == Random){
          victory();
        }
        else if ( destruction > Random){
          loser();
        } 
  })  
  $('#four').on ('click', function(){
    destruction = destruction + number4;
    console.log("New destruction score= " + destruction);
    $('#destructionTally').text(destruction); 
      
          if (destruction == Random){
          victory();
        }
        else if ( destruction > Random){
          loser();
        }
  });   



}); 