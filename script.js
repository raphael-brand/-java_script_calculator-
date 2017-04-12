var firstNumber = "0";
var secundNumber = "0";
var result = 0;
var maxLength = 30;


function AddDigit(x) {
   if (result == 0){
    console.log(x);
    firstNumber = x;
    result = firstNumber.toString();
    document.getElementById('resultField').innerHTML = result ;
    console.log("first number added");
    }
    else {
       firstNumber = x ;
      result = result + firstNumber.toString() ;
      console.log(result);
      document.getElementById('resultField').innerHTML = result ;
    }
    return result;
};



 function AddOperator(y) {
        if (result != 0 && result.substr(result.length-1) != y ) {
          console.log("adding");
          result = result + y ;
          document.getElementById('resultField').innerHTML = result ;
        }
        return result;
};

  function cal() {
    document.getElementById('resultField').innerHTML = eval(result) ;
    console.log(result);
    result = eval(result);
    result = result.toString();
    console.log("The Answer is   " + result);
    return result;
  }
function deleteDigit() {
  if ( result != 0) {
    result = result.slice(0 , result.length -1 );
    document.getElementById('resultField').innerHTML = result ;

  }
}

function clearAll() {
  document.getElementById('resultField').innerHTML = 0 ;
  firstNumber = 0 ;
  secundNumber = 0 ;
  result = 0 ;
  console.log("cleared");
};
