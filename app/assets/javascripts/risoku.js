$(document).on('turbolinks:load', function(){

$(function(){
  // 3桁区切り
  function addFigure(str) {
    var num = new String(str).replace(/,/g, "");
    while(num != (num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
    return num;
    };
  // 3桁区切り

  // 消費税
  var tax = 110; 
  // 消費税
  $("#mathButton2").on("click", function() {
    var val = parseInt(document.getElementById("textbox2").value);
    var val2 = Math.floor(Math.floor(val/0.84685)*0.15315);
    var val3 = Math.ceil((val2*315/15315)-0.5);
    var val4 = val2 - val3;
    var val5 = val2 + val;
    var val6 = val3 + val4;
    c2risoku.innerHTML = addFigure(val5);
    c2syotoku.innerHTML = addFigure(val4);
    c2hukkou.innerHTML = addFigure(val3);
    c2totalTax.innerHTML = addFigure(val6);
  });
});

});