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
    
      // 受取書分割計算
    $("#mathButton7").on("click", function() {
      var cash = parseInt(document.getElementById("textbox7").value);
      var element1 = document.getElementById( "target11" ) ;
      var element2 = document.getElementById( "target12" ) ;
  
      // 上1桁を取り除く
      var cut1 = parseInt(document.getElementById("textbox7").value.slice(1));
      // 上2桁を取り除く
      var cut2 = parseInt(document.getElementById("textbox7").value.slice(2));
      
      // 印紙を変数化
      var st0 = "0円"
      var st200 = "200円"
      var st400 = "400円"
      var st600 = "600円"
      var st1k = "1000円"
      var st2k = "2000円"
      var st4k = "4000円"
      var st6k = "6000円"
      var st10k = "10000円"
      var st20k = "20000円"
      var st40k = "40000円"
      var st60k = "60000円"
      var st100k = "100000円"
      var st150k = "150000円"
      var st200k = "200000円"
  
      // 印紙金額を変数化しておく　→　DB、gem 'gon'を使ったcontrollerに記述、modelに格納　色々簡略化する方向
      if ( element1.selected ) {

        if (0 <= cash && cash <= 49999) { val1 = cash , val2 = "", val11 = st0, val12 = ""}
        else if (50000 <= cash && cash <= 1000000) { val1 = cash , val2 = "", val11 = st200, val12 = ""}
        else if (1000001*tax <= cash && cash <= 1049999*tax) { val1 = "1000000" , val2 = cut1, val11 = st200, val12 = st0}
        else if (1050000*tax <= cash && cash <= 2000000*tax) { val1 = cash, val2 = "", val11 = st400, val12 = ""}
        else if (2000001*tax <= cash && cash <= 2049999*tax) { val1 = "2000000" , val2 = cash - 2000000, val11 = st400, val12 = st0}
        else if (2050000*tax <= cash && cash <= 3000000*tax) { val1 = cash, val2 = "", val11 = st600, val12 = ""}
        else if (3000001*tax <= cash && cash <= 3049999*tax) { val1 = "3000000" , val2 = cash - 3000000, val11 = st600, val12 = st0}
        else if (3050000*tax <= cash && cash <= 4000000*tax) { val1 = "3000000" , val2 = cash - 3000000, val11 = st600, val12 = st200}
        else if (4000001*tax <= cash && cash <= 5000000*tax) { val1 = cash, val2 = "",  val11 = st1k, val12 = ""}
        else if (5000001*tax <= cash && cash <= 5049999*tax) { val1 = "5000000" , val2 = cash - 5000000, val11 = st1k, val12 = st0}
        else if (5050000*tax <= cash && cash <= 6000000*tax) { val1 = "5000000" , val2 = cash - 5000000, val11 = st1k, val12 = st200}
        else if (6000001*tax <= cash && cash <= 7000000*tax) { val1 = "5000000" , val2 = cash - 5000000, val11 = st1k, val12 = st400}
        else if (7000001*tax <= cash && cash <= 8000000*tax) { val1 = "5000000" , val2 = cash - 5000000, val11 = st1k, val12 = st600}
        else if (8000001*tax <= cash && cash <= 10000000*tax) { val1 = cash, val2 = "",  val11 = st2k, val12 = ""}
        else if (10000001*tax <= cash && cash <= 10049999*tax) { val1 = "10000000" , val2 = cash - 10000000, val11 = st2k, val12 = st0}
        else if (10050000*tax <= cash && cash <= 11000000*tax) { val1 = "10000000" , val2 = cash - 10000000, val11 = st2k, val12 = st200}
        else if (11000001*tax <= cash && cash <= 12000000*tax) { val1 = "10000000" , val2 = cash - 10000000, val11 = st2k, val12 = st400}
        else if (12000001*tax <= cash && cash <= 13000000*tax) { val1 = "10000000" , val2 = cash - 10000000, val11 = st2k, val12 = st600}
        else if (13000001*tax <= cash && cash <= 15000000*tax) { val1 = "10000000" , val2 = cash - 10000000, val11 = st2k, val12 = st1k}
        else if (15000001*tax <= cash && cash <= 20000000*tax) { val1 = cash, val2 = "",  val11 = st4k, val12 = ""}
        else if (20000001*tax <= cash && cash <= 20049999*tax) { val1 = "20000000" , val2 = cash - 20000000, val11 = st4k, val12 = st0}
        else if (20050000*tax <= cash && cash <= 21000000*tax) { val1 = "20000000" , val2 = cash - 20000000, val11 = st4k, val12 = st200}
        else if (21000001*tax <= cash && cash <= 22000000*tax) { val1 = "20000000" , val2 = cash - 20000000, val11 = st4k, val12 = st400}
        else if (22000001*tax <= cash && cash <= 23000000*tax) { val1 = "20000000" , val2 = cash - 20000000, val11 = st4k, val12 = st600}
        else if (23000001*tax <= cash && cash <= 25000000*tax) { val1 = "20000000" , val2 = cash - 20000000, val11 = st4k, val12 = st1k}
        else if (25000001*tax <= cash && cash <= 30000000*tax) { val1 = cash, val2 = "",  val11 = st6k, val12 = ""}
        else if (30000001*tax <= cash && cash <= 30049999*tax) { val1 = "30000000" , val2 = cash - 30000000, val11 = st6k, val12 = st0}
        else if (30050000*tax <= cash && cash <= 31000000*tax) { val1 = "30000000" , val2 = cut1, val11 = st6k, val12 = st200}
        else if (31000001*tax <= cash && cash <= 32000000*tax) { val1 = "30000000" , val2 = cut1, val11 = st6k, val12 = st400}
        else if (32000001*tax <= cash && cash <= 33000000*tax) { val1 = "30000000" , val2 = cash - 30000000, val11 = st6k, val12 = st600}
        else if (33000001*tax <= cash && cash <= 35000000*tax) { val1 = "30000000" , val2 = cash - 30000000, val11 = st6k, val12 = st1k}
        else if (35000001*tax <= cash && cash <= 40000000*tax) { val1 = "30000000",  val2 = cash - 30000000, val11 = st6k, val12 = st2k}
        else if (40000001*tax <= cash && cash <= 50000000*tax) { val1 = cash, val2 = "",  val11 = st10k, val12 = ""}
        else if (50000001*tax <= cash && cash <= 50049999*tax) { val1 = "50000000" , val2 = cash - 50000000, val11 = st10k, val12 = st0}
        else if (50050000*tax <= cash && cash <= 51000000*tax) { val1 = "50000000" , val2 = cash - 50000000, val11 = st10k, val12 = st200}
        else if (51000001*tax <= cash && cash <= 52000000*tax) { val1 = "50000000" , val2 = cash - 50000000, val11 = st10k, val12 = st400}
        else if (52000001*tax <= cash && cash <= 53000000*tax) { val1 = "50000000" , val2 = cash - 50000000, val11 = st10k, val12 = st600}
        else if (53000001*tax <= cash && cash <= 55000000*tax) { val1 = "50000000" , val2 = cash - 50000000, val11 = st10k, val12 = st1k}
        else if (55000001*tax <= cash && cash <= 60000000*tax) { val1 = "50000000",  val2 = cash - 50000000, val11 = st10k, val12 = st2k}
        else if (60000001*tax <= cash && cash <= 70000000*tax) { val1 = "50000000" , val2 = cash - 50000000, val11 = st10k, val12 = st4k}
        else if (70000001*tax <= cash && cash <= 80000000*tax) { val1 = "50000000" , val2 = cash - 50000000, val11 = st10k, val12 = st6k}
        else if (80000001*tax <= cash && cash <= 100000000*tax) { val1 = cash, val2 = "",  val11 = st20k, val12 = ""}
        else if (100000001*tax <= cash && cash <= 100049999*tax) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st0}
        else if (100050000*tax <= cash && cash <= 101000000*tax) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st200}
        else if (101000001*tax <= cash && cash <= 102000000*tax) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st400}
        else if (102000001*tax <= cash && cash <= 103000000*tax) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st600}
        else if (103000001*tax <= cash && cash <= 105000000*tax) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st1k}
        else if (105000001*tax <= cash && cash <= 110000000*tax) { val1 = "100000000",  val2 = cash - 100000000, val11 = st20k, val12 = st2k}
        else if (110000001*tax <= cash && cash <= 120000000*tax) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st4k}
        else if (120000001*tax <= cash && cash <= 130000000*tax) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st6k}
        else if (130000001*tax <= cash && cash <= 150000000*tax) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st10k}
        else if (150000001*tax <= cash && cash <= 200000000*tax) { val1 = cash , val2 = "", val11 = st40k, val12 = ""}
        else if (200000001*tax <= cash && cash <= 200049999*tax) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st0}
        else if (200050000*tax <= cash && cash <= 201000000*tax) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st200}
        else if (201000001*tax <= cash && cash <= 202000000*tax) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st400}
        else if (202000001*tax <= cash && cash <= 203000000*tax) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st600}
        else if (203000001*tax <= cash && cash <= 205000000*tax) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st1k}
        else if (205000001*tax <= cash && cash <= 210000000*tax) { val1 = "200000000",  val2 = cash - 200000000, val11 = st40k, val12 = st2k}
        else if (210000001*tax <= cash && cash <= 220000000*tax) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st4k}
        else if (220000001*tax <= cash && cash <= 230000000*tax) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st6k}
        else if (230000001*tax <= cash && cash <= 250000000*tax) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st10k}
        else if (250000001*tax <= cash && cash <= 300000000*tax) { val1 = cash , val2 = "", val11 = st60k, val12 = ""}
        else if (300000001*tax <= cash && cash <= 300049999*tax) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st0}
        else if (300050000*tax <= cash && cash <= 301000000*tax) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st200}
        else if (301000001*tax <= cash && cash <= 302000000*tax) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st400}
        else if (302000001*tax <= cash && cash <= 303000000*tax) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st600}
        else if (303000001*tax <= cash && cash <= 305000000*tax) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st1k}
        else if (305000001*tax <= cash && cash <= 310000000*tax) { val1 = "300000000",  val2 = cash - 300000000, val11 = st60k, val12 = st2k}
        else if (310000001*tax <= cash && cash <= 320000000*tax) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st4k}
        else if (320000001*tax <= cash && cash <= 330000000*tax) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st6k}
        else if (330000001*tax <= cash && cash <= 350000000*tax) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st10k}
        else if (350000001*tax <= cash && cash <= 400000000*tax) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st20k}
        else if (400000001*tax <= cash && cash <= 500000000*tax) { val1 = cash , val2 = "", val11 = st100k, val12 = ""}
        else if (500000001*tax <= cash && cash <= 500049999*tax) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st0}
        else if (500050000*tax <= cash && cash <= 501000000*tax) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st200}
        else if (501000001*tax <= cash && cash <= 502000000*tax) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st400}
        else if (502000001*tax <= cash && cash <= 503000000*tax) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st600}
        else if (503000001*tax <= cash && cash <= 505000000*tax) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st1k}
        else if (505000001*tax <= cash && cash <= 510000000*tax) { val1 = "500000000",  val2 = cash - 500000000, val11 = st100k, val12 = st2k}
        else if (510000001*tax <= cash && cash <= 520000000*tax) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st4k}
        else if (520000001*tax <= cash && cash <= 530000000*tax) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st6k}
        else if (530000001*tax <= cash && cash <= 550000000*tax) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st10k}
        else if (550000001*tax <= cash && cash <= 600000000*tax) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st20k}
        else if (600000001*tax <= cash && cash <= 700000000*tax) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st40k}
        else if (700000001*tax <= cash && cash <= 1000000000*tax) { val1 = cash , val2 = "", val11 = st150k, val12 = ""}
        else if (1000000001*tax <= cash) { val1 = cash , val2 = "", val11 = st200k, val12 = ""}
    
        receipt1.innerHTML = "受取書1枚目 : " + addFigure(val1);
        receipt2.innerHTML = "受取書2枚目 : " + addFigure(val2); 
        receipt3.innerHTML = "";
        rinsi1.innerHTML = "印紙1枚目 : " + addFigure(val11);
        rinsi2.innerHTML = "印紙2枚目 : " + addFigure(val12);
        rinsi3.innerHTML = "";
  
      } else {

        
        receipt1.innerHTML = "受取書1枚目 : " + addFigure(val1);
        receipt2.innerHTML = "受取書2枚目 : " + addFigure(val2);
        receipt3.innerHTML = "受取書3枚目 : " + addFigure(val3);
        rinsi1.innerHTML = "印紙1枚目 : " + addFigure(val11);
        rinsi2.innerHTML = "印紙2枚目 : " + addFigure(val12);
        rinsi3.innerHTML = "印紙3枚目 : " + addFigure(val13);
      }
    });
  });
  });