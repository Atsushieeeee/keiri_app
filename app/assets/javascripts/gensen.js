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

  
  // 源泉計算
  // 講演料等報酬の源泉計算
  $("#mathButton6").on("click", function(){
    var val = parseInt(document.getElementById("textbox6").value);
    var element1 = document.getElementById( "gensen1" ) ;
    var element2 = document.getElementById( "gensen2" ) ;

  if ( element1.selected ) {

    if (val <= 897900) {
    var val2 = Math.floor(val / 0.8979);
    var val3 = Math.floor(val2 * 0.1021);
    var val4 = Math.floor(val2 * 0.1);
    var val5 = val3 - val4;
    } else {
    var valplus = val - 897900;
    var valplus2 = Math.floor(valplus / 0.7958);
    var val2 = valplus2 + 1000000;
    var val3 = Math.floor(valplus2 * 0.2042)+102100;
    var val4 = Math.floor(valplus2 * 0.2)+100000;
    var val5 = val3 - val4;
    }

    ghousyuu.innerHTML = "報酬金額 : " + addFigure(val2);
    gsyotoku.innerHTML = "所得税額 : " + addFigure(val4);
    ghukkou.innerHTML = "復興税額 : " + addFigure(val5);
    gtotalTax.innerHTML = "税額合計 : " + addFigure(val3);

  }else{

    if (val <= 977900) {
      var val2 = Math.floor(val / (1 - 100 / tax * 0.1021));
      var valplus = Math.floor(val2 * 100 / tax);
      var val3 = Math.floor(valplus * 0.1021);
      var val4 = Math.floor(valplus * 0.1);
      var val5 = val3 - val4;
      } else {
      var valplus = val - 977900;
      var valplus2 = Math.floor(valplus / (1 - 100 / tax * 0.2042));
      var val2 = valplus2 + (1000000 * tax / 100);
      var val3 = Math.floor(valplus2 * 100 / tax * 0.2042) + 102100;
      var val4 = Math.floor(valplus2 * 100 / tax * 0.2) + 100000;
      var val5 = val3 - val4;
      }
  
    ghousyuu.innerHTML = "報酬金額 : " + addFigure(val2);
    gsyotoku.innerHTML = "所得税額 : " + addFigure(val4);
    ghukkou.innerHTML = "復興税額 : " + addFigure(val5);
    gtotalTax.innerHTML = "税額合計 : " + addFigure(val3);
    }

  });
  // 講演料等報酬の源泉計算

  // 講演料等報酬の源泉計算 tax8%
  // $("#mathButton8").on("click", function(){
  //   var val = parseInt(document.getElementById("textbox8").value);
  //   if (val <= 977900) {
  //   var val2 = Math.floor(val / (1 - 100 / tax * 0.1021));
  //   var valplus = Math.floor(val2 * 100 / tax);
  //   var val3 = Math.floor(valplus * 0.1021);
  //   var val4 = Math.floor(valplus * 0.1);
  //   var val5 = val3 - val4;
  //   } else {
  //   var valplus = val - 977900;
  //   var valplus2 = Math.floor(valplus / (1 - 100 / tax * 0.2042));
  //   var val2 = valplus2 + (1000000 * tax / 100);
  //   var val3 = Math.floor(valplus2 * 100 / tax * 0.2042) + 102100;
  //   var val4 = Math.floor(valplus2 * 100 / tax * 0.2) + 100000;
  //   var val5 = val3 - val4;
  //   }

  //   output20.innerHTML = addFigure(val2);
  //   output21.innerHTML = addFigure(val4);
  //   output22.innerHTML = addFigure(val5);
  //   output23.innerHTML = addFigure(val3);

  //   });
  // 講演料等報酬の源泉計算

  // 源泉計算終わり

});
