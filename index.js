var allInpt = document.querySelectorAll("input");
var allBtn = document.querySelectorAll("button");

$(allInpt[0]).on("mouseenter", function() {
  if(parseInt($(allInpt[0]).val(),10) === 0){
    allInpt[0].value = "";
  }
   
});

$(allInpt[1]).on("mouseenter", function() {
  if(parseInt($(allInpt[1]).val(),10) === 0){
    allInpt[1].value = "";
  }
   
});

$(allInpt[2]).on("mouseenter", function() {
  if(parseInt($(allInpt[2]).val(),10) === 0){
    allInpt[2].value = "";
  }
   
});
function calculator(aa,bb,cc){
  var delta = (bb*bb)-(4*aa*cc);
  var txt = document.getElementsByTagName("p");
  if(delta > 0){
    var x1 = ((-1*bb)-Math.sqrt(delta))/(2*aa);
    var x2 = ((-1*bb)+Math.sqrt(delta))/(2*aa);
    $("#rep").val("This equation has two solutions: X1 = "+ Math.floor(x1)+", X2 = "+Math.floor(x2));
  }
  else if (delta < 0){
    $("#rep").val("does'nt answer because delta less than 0");
  }
  else {
    var x3 = (-1*bb)/(2*aa);
    $("#rep").val("This Equation have only one solution: X1 = "+x3);
  }
}


$(allBtn[1]).on("click",function(){
  if(ifErase() === 1){
    alert("SHOULD FILL ALL THE TEXT-BOX");
  }
  else{
    var a = parseInt($(allInpt[0]).val(),10);
    var b = parseInt($(allInpt[1]).val(),10);
    var c = parseInt($(allInpt[2]).val(),10);
    calculator(a,b,c);
  }
});


$(allBtn[0]).on("click",function(){
 
  $("#rep").val("");
  allInpt[0].value = 0
  allInpt[1].value = 0;
  allInpt[2].value = 0;

});


function ifErase(){
  var flag = 0;
  if(allInpt[0].valueAsNumber ===0 || allInpt[1].valueAsNumber ===0 || allInpt[2].valueAsNumber ===0){
    flag = 1;
  }
  return flag;
}
