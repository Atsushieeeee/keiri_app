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

  // 受取配当金
  // 非上場株式配当金
  $("#mathButton3").on("click", function() {
    var val = parseInt(document.getElementById("textbox3").value);
    var val2 = Math.floor(Math.floor(val/0.7958)*0.2042);
    var val3 = Math.ceil((val2*42/2042)-0.5);
    var val4 = val2 - val3;
    var val5 = val2 + val;
    var val6 = val4 + val3
    haitou1.innerHTML = addFigure(val5);
    syotoku1.innerHTML = addFigure(val4);
    hukkou1.innerHTML = addFigure(val3);
    totalTax1.innerHTML = addFigure(val6);
  });


  // 上場株式配当金
  $("#mathButton4").on("click", function() {
    var val = parseInt(document.getElementById("textbox4").value);
    var val2 = Math.floor(Math.floor(val/0.84685)*0.15315);
    var val3 = Math.ceil((val2*21/1021)-0.5);
    var val4 = val2 - val3;
    var val5 = val2 + val;
    var val6 = val4 + val3

    haitou2.innerHTML = addFigure(val5);
    syotoku2.innerHTML = addFigure(val4);
    hukkou2.innerHTML = addFigure(val3);
    totalTax2.innerHTML = addFigure(val6);
  });
  // 受取配当金終わり
});

});