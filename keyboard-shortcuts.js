var buttons = {};
buttons.get = function (querySelector) {
  var nodes = document.evaluate('.//button[' + querySelector + ']', document, null, XPathResult.ANY_TYPE, null);
  var result = nodes.iterateNext();
  var result_array = [];
  while (result) {
    result_array.push(result);
    result = nodes.iterateNext();
  }
/*  console.group('Button query result')
  console.dir(result_array);
  console.groupEnd()
*/  return result_array;

}

buttons.numbers = function () {
  return this.get('@class="number"');
}


function pressKey(event) {
  // all number keys, except zero
  document.getElementById(event.key) && document.getElementById(event.key).click();

  var clickTarget = null;
  switch (event.key) {
    case "0": clickTarget = buttons.get("@class='number zero'")[0];
    break;
    case "*":; case "/":;
    case "%":; case "+":;
    case "-":; case ".":
      clickTarget = buttons.get('text()="'+event.key+'"')[0];
    break;
    case "Backspace":
      clickTarget = buttons.get('text()="C"')[0];
    break;
    case "c":; case "Escape":
      clickTarget = buttons.get('text()="AC"')[0];
    break;
    case "Enter":
      clickTarget = buttons.get('text()="="')[0];
    break;
  }
  clickTarget && clickTarget.click();
}

window.addEventListener('keydown', pressKey)

/*window.addEventListener('DOMContentLoaded', setShortcuts);
function setShortcuts() {
  var numbers = buttons.numbers()
  for (var n in numbers) {
    var val = numbers[n].getAttribute('id');
    console.log(val)
    //    numbers[n].setAttribute('onclick', "pressKey('" + val + "')");
  }
}*/
