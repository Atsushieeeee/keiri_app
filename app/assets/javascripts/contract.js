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

  // 契約書

  $("#mathButton5").on("click", function() {
    var cash = parseInt(document.getElementById("textbox5").value);
    var element1 = document.getElementById( "keiyaku1" ) ;
    var element2 = document.getElementById( "keiyaku2" ) ;

    if ( element1.selected ) {

           if (10000 <= cash && cash <= 100000) {
      val = "200円";
    } else if (100001 <= cash && cash <= 500000) { 
      val = "400円";
    } else if (500001 <= cash && cash <= 1000000) {
      val = "1000円";
    } else if (1000001 <= cash && cash <= 5000000) {
      val = "2000円";
    } else if (5000001 <= cash && cash <= 10000000) {
      val = "10000円"; 
    } else if (10000001 <= cash && cash <= 50000000) {
      val = "20000円";
    } else if (50000001 <= cash && cash <= 100000000) {
      val = "60000円";
    } else if (100000001 <= cash && cash <= 500000000) {
      val = "100000円";
    } else if (500000001 <= cash && cash <= 1000000000) {
      val = "200000円";
    } else if (1000000001 <= cash && cash <= 5000000000) {
      val = "400000円";
    } else if (5000000001 <= cash) {
      val = "600000円";
    }
    c5comment1.innerHTML = "※不動産、鉱業権、無体財産権、船舶若しくは、航空機又は営業の譲渡に関する契約書、地上権又は土地の賃借権の設定又は譲渡に関する契約書に対する印紙税の計算にのみ利用できます。";
    c5comment2.innerHTML = ""
    keiyaku.innerHTML = "印紙 : " + addFigure(val);

    }else{
      if (10000 <= cash && cash <= 100000) {
        val = "200円";
    } else if (100001 <= cash && cash <= 500000) { 
      val = "400円";
    } else if (500001 <= cash && cash <= 1000000) {
      val = "1000円";
    } else if (1000001 <= cash && cash <= 5000000) {
      val = "2000円";
    } else if (5000001 <= cash && cash <= 10000000) {
      val = "10000円"; 
    } else if (10000001 <= cash && cash <= 50000000) {
      val = "20000円";
    } else if (50000001 <= cash && cash <= 100000000) {
      val = "60000円";
    } else if (100000001 <= cash && cash <= 500000000) {
      val = "100000円";
    } else if (500000001 <= cash && cash <= 1000000000) {
      val = "200000円";
    } else if (1000000001 <= cash && cash <= 5000000000) {
      val = "400000円";
    } else if (5000000001 <= cash) {
      val = "600000円";
    }
    c5comment1.innerHTML = ""
    c5comment2.innerHTML = "※請負に関する契約書に対する印紙税の計算にのみ利用できます。";
    keiyaku.innerHTML = "印紙 : " + addFigure(val);
    }
  });
});
  // 契約書終わり
