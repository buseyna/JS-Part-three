/*function calculateNumbers(){
    var number1 = 10;
    var number2 = 3;
    var number3 = number1 - number2;
    if(number3 <= 10){
        alert("Small Number");
    }
    else{("Big Number");
}
}
calculateNumbers(); */
//======================================================
/*function calculateNumbers(){
    var number1 = 10;
    var number2 = 3;
    var number3 = number1 + number2;
    if(number3 >= 10){
        alert("Big Number");
    }
    else{("Small Number");
}
}
calculateNumbers();*/

//=============================================
//another ex:
/*function loopingThroughArray(nameArray){
    for(var i = 0; i < nameArray.length; i++){
        console.log("I admire" + nameArray[i]);
    }
}
  // we need to define another variable
  var names = ["Ruru", "Marwa", "Lulu", "Bubu"];
  loopingThroughArray(names);*/

 //=============================================
 //another ex:

function loopingThroughArray(){
    var nameArray = ["Ruru", "Marwa", "Lulu", "Bubu"];

    for(var i = 0; i < nameArray.length; i++) {
        if (nameArray[i] ==="Bubu"){
            console.log("It's me Bubu!");
        }
        else if(nameArray[i] === "Ruru"){
            console.log("Ruru is my sister!");
            }
        
        else if (nameArray[i] === "Lulu"){
                console.log("Is my friend!");
                }
        else if(nameArray[i] === "Marwa"){
            console.log("Is my friend's sister!");
        }
    }
    return "Done looping the nameArray!";
}
//To call it >> 
//loopingThroughArray();

//To a signed the return result 
var result = loopingThroughArray();
alert(result);