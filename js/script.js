var operatingA = "";
var operatingB = "";
var operation = "";


function init(){
    //variables
    var outcome = document.getElementById("outcome");
    var reset = document.getElementById('reset'); 
    var add = document.getElementById('add');
    var subtraction = document.getElementById('subtraction');
    var multiplication = document.getElementById('multiplication');
    var division = document.getElementById('division');
    var same = document.getElementById('same');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var zero = document.getElementById('zero');

    //Eventos
    one.onclick = function(Eventos) {
       outcome.textContent = outcome.textContent + "1";
    }
    two.onclick = function(Eventos) {
        outcome.textContent = outcome.textContent + "2";
     }
     three.onclick = function(Eventos) {
        outcome.textContent = outcome.textContent + "3";
     }
     four.onclick = function(Eventos) {
        outcome.textContent = outcome.textContent + "4";
     }
     five.onclick = function(Eventos) {
        outcome.textContent = outcome.textContent + "5";
     }
     six.onclick = function(Eventos) {
        outcome.textContent = outcome.textContent + "6";
     }
     seven.onclick = function(Eventos) {
        outcome.textContent = outcome.textContent + "7";
     }
     eight.onclick = function(Eventos) {
        outcome.textContent = outcome.textContent + "8";
     }
     nine.onclick = function(Eventos) {
        outcome.textContent = outcome.textContent + "9";
     }
     zero.onclick = function(Eventos) {
        outcome.textContent = outcome.textContent + "0";
     }
     reset.onclick = function(Eventos) {
         toReset();
     }
     add.onclick = function(Eventos) {
         operatingA = outcome.textContent;
         operatingB = "+";
         clean();
    }
     subtraction.onclick = function(Eventos) {
        operatingA = outcome.textContent;
        operatingB = "-";
        clean();
    }
     multiplication.onclick = function(Eventos) {
        operatingA = outcome.textContent;
        operatingB = "*";
        clean();
    }
    division.onclick = function(Eventos) {
        operatingA = outcome.textContent;
        operatingB = "/";
        clean();
    }
    same.onclick = function(Eventos) {
        operation = operatingB;
        operatingB = outcome.textContent;
        solve();
   }

function clean(){
    outcome.textContent = "";
}

function toReset(){
    outcome.textContent = "";
    operatingA = "";
    operatingB = "";
    operation = "";
}

function solve(){
    var res = 0;
    switch(operation){
        case "+":
            res = parseFloat(operatingA) + parseFloat(operatingB);
            break;
              
        case "-":
            res = parseFloat(operatingA) - parseFloat(operatingB);
            break;
        case "*":
            res = parseFloat(operatingA) * parseFloat(operatingB);
            break;
        case "/":
            res = parseFloat(operatingA) / parseFloat(operatingB);
            break;
    }
           
    toReset();
    outcome.textContent = res;
}
}


