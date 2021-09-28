//Code your solutions in this file
//function fiveToOnehundred(){ 
/* for(var i = 5; i <= 100; i++) {
    console.log(i);
}*/


//var sum = 0;
//function multiplesOf3and5(number) {

/*for(var i = 1; i < 100; i++){
  var sum=0;
    if(i % 3 === 0 )
      sum = sum + i;
    }*/
  
  
  for (x=1; x <= 100; x++){
    if( x % 3 == 0 ){
        write("ping")
    }
    if( x % 5 == 0 ){
        write("pong")
    }
    if( ( x % 3 != 0 ) && ( x % 5 != 0 ) ){
        write(x)
    }
}
  return sum;


//multiplesOf3and5(1000);

//multiplesOf3(100);

/*function multiplesOf3And5(number) {
  var sum=0;

  for(var i = 3; i < number; i++){
    if(i % 3 === 0 ||i % 5 === 0){
      sum = sum + i;
    }
  
  return sum;
}

multiplesOf3And5(100);*/

//console.log(multiplesOfThree(100));