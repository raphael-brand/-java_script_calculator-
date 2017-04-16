var firstNumber = "0";
var secondNumber = "0";
var result = 0;
var maxLength = 30;

var isOperating = false;

function AddDigit(x) { //This Function  gets the  Number from the button
   if (result === 0){
    console.log(x);
    firstNumber = x;
    result = firstNumber.toString(); // converting the number to a string
    document.getElementById('resultField').innerHTML = result ;
    // Adds the Number to the Result-field
    }
    else {
       firstNumber = x ;
      result = result + firstNumber.toString() ;
      console.log(result);
      document.getElementById('resultField').innerHTML = result ;
    }
    isOperating = false;
    return result;
};


 function RemoveOperator() {
   if(!isOperating) return;
   result = result.substr(0, result.length-1)
   document.getElementById('resultField').innerText = result;
   isOperating = false;
 }

 function AddDecimal() {
    if(!result.toString().match(/([^\d]?\d*?\.[\d]*|[^\d])$/g)) {
      AddOperator('.')
    }
 }

 function AddOperator(y) { // adds an operator to the Result-field
    if(isOperating) 
      RemoveOperator();

    //if (result != 0) {
      console.log("adding");
      result = result + y ;
      document.getElementById('resultField').innerHTML = result ;
      isOperating = true;
    //}
    
    return result;
};

  function cal() { // converts the text in Result-field to math and calculate
    if(isOperating) return;
    document.getElementById('resultField').innerHTML = eval(result) ;
    console.log(result);
    result = eval(result);
    result = result.toString(); //
    console.log("The Answer is   " + result);
    return result;
  }
function deleteDigit() {
  if ( result != 0)
    result = result.slice(0 , result.length -1 );
  if ( result.length == 0 ) result = 0;
  document.getElementById('resultField').innerHTML = result ;
}

function clearAll() {
  document.getElementById('resultField').innerHTML = 0 ;
  firstNumber = 0 ;
  secondNumber = 0 ;
  result = 0 ;
  console.log("cleared");
};
var classCount = 0;
var cont  = '<form action="saveField">'+'<input type="text" class="heading"></form>'+'<div class="saveRow">'+'<span class="glyphicon glyphicon-pencil rowIcon"></span>'+
  '<span class="glyphicon glyphicon-trash rowIcon"></span>'+
  '<span class="glyphicon glyphicon-floppy-disk rowIcon"></span>'+
'</div>' ;
function AddSave() {
    console.log("adding");
    var textField = document.createElement('input');
    textField.type = "text";
    textField.className = "heading";
    var SaveElement = document.createElement("DIV");
    SaveElement.className = "saveField animated bounceInUp";
    var resultDispaly = document.createElement('h2');


    document.getElementsByClassName('col-sm-6')[1].appendChild(SaveElement);
    document.getElementsByClassName("saveField")[classCount].appendChild(resultDispaly);
    document.getElementsByClassName("saveField")[classCount].innerHTML = cont;
    classCount = classCount + 1;
    return classCount;
    console.log(classCount);


}



console.log(cont);
function Addsavee() {
  var SaveElement = document.createElement("DIV");
  SaveElement.className = "saveField";
  document.getElementsByClassName('col-sm-6')[1].appendChild(SaveElement);
  document.getElementsByClassName("saveField")[classCount].innerHTML = cont;
  return true;
}
