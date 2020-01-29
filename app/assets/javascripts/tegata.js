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
  
    // 手形分割計算
  $("#mathButton1").on("click", function() {
    var cash = parseInt(document.getElementById("textbox1").value);
    var element1 = document.getElementById( "target1" ) ;
    var element2 = document.getElementById( "target2" ) ;

    // 上1桁を取り除く
    var cut1 = parseInt(document.getElementById("textbox1").value.slice(1));
    // 上2桁を取り除く
    var cut2 = parseInt(document.getElementById("textbox1").value.slice(2));

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

      if (0 <= cash && cash <= 100000) { val1 = cash , val2 = "", val11 = st0, val12 = ""}
      else if (100001 <= cash && cash <= 1000000) { val1 = cash , val2 = "", val11 = st200, val12 = ""}
      else if (1000001 <= cash && cash <= 1099999) { val1 = "1000000" , val2 = cut1, val11 = st200, val12 = st0}
      else if (1100000 <= cash && cash <= 2000000) { val1 = cash, val2 = "", val11 = st400, val12 = ""}
      else if (2000001 <= cash && cash <= 2099999) { val1 = "2000000" , val2 = cash - 2000000, val11 = st400, val12 = st0}
      else if (2100000 <= cash && cash <= 3000000) { val1 = cash, val2 = "", val11 = st600, val12 = ""}
      else if (3000001 <= cash && cash <= 3099999) { val1 = "3000000" , val2 = cash - 3000000, val11 = st600, val12 = st0}
      else if (3100000 <= cash && cash <= 4000000) { val1 = "3000000" , val2 = cash - 3000000, val11 = st600, val12 = st200}
      else if (4000001 <= cash && cash <= 5000000) { val1 = cash, val2 = "",  val11 = st1k, val12 = ""}
      else if (5000001 <= cash && cash <= 5099999) { val1 = "5000000" , val2 = cash - 5000000, val11 = st1k, val12 = st0}
      else if (5100000 <= cash && cash <= 6000000) { val1 = "5000000" , val2 = cash - 5000000, val11 = st1k, val12 = st200}
      else if (6000001 <= cash && cash <= 7000000) { val1 = "5000000" , val2 = cash - 5000000, val11 = st1k, val12 = st400}
      else if (7000001 <= cash && cash <= 8000000) { val1 = "5000000" , val2 = cash - 5000000, val11 = st1k, val12 = st600}
      else if (8000001 <= cash && cash <= 10000000) { val1 = cash, val2 = "",  val11 = st2k, val12 = ""}
      else if (10000001 <= cash && cash <= 10099999) { val1 = "10000000" , val2 = cash - 10000000, val11 = st2k, val12 = st0}
      else if (10100000 <= cash && cash <= 11000000) { val1 = "10000000" , val2 = cash - 10000000, val11 = st2k, val12 = st200}
      else if (11000001 <= cash && cash <= 12000000) { val1 = "10000000" , val2 = cash - 10000000, val11 = st2k, val12 = st400}
      else if (12000001 <= cash && cash <= 13000000) { val1 = "10000000" , val2 = cash - 10000000, val11 = st2k, val12 = st600}
      else if (13000001 <= cash && cash <= 15000000) { val1 = "10000000" , val2 = cash - 10000000, val11 = st2k, val12 = st1k}
      else if (15000001 <= cash && cash <= 20000000) { val1 = cash, val2 = "",  val11 = st4k, val12 = ""}
      else if (20000001 <= cash && cash <= 20099999) { val1 = "20000000" , val2 = cash - 20000000, val11 = st4k, val12 = st0}
      else if (20100000 <= cash && cash <= 21000000) { val1 = "20000000" , val2 = cash - 20000000, val11 = st4k, val12 = st200}
      else if (21000001 <= cash && cash <= 22000000) { val1 = "20000000" , val2 = cash - 20000000, val11 = st4k, val12 = st400}
      else if (22000001 <= cash && cash <= 23000000) { val1 = "20000000" , val2 = cash - 20000000, val11 = st4k, val12 = st600}
      else if (23000001 <= cash && cash <= 25000000) { val1 = "20000000" , val2 = cash - 20000000, val11 = st4k, val12 = st1k}
      else if (25000001 <= cash && cash <= 30000000) { val1 = cash, val2 = "",  val11 = st6k, val12 = ""}
      else if (30000001 <= cash && cash <= 30099999) { val1 = "30000000" , val2 = cash - 30000000, val11 = st6k, val12 = st0}
      else if (30100000 <= cash && cash <= 31000000) { val1 = "30000000" , val2 = cut1, val11 = st6k, val12 = st200}
      else if (31000001 <= cash && cash <= 32000000) { val1 = "30000000" , val2 = cut1, val11 = st6k, val12 = st400}
      else if (32000001 <= cash && cash <= 33000000) { val1 = "30000000" , val2 = cash - 30000000, val11 = st6k, val12 = st600}
      else if (33000001 <= cash && cash <= 35000000) { val1 = "30000000" , val2 = cash - 30000000, val11 = st6k, val12 = st1k}
      else if (35000001 <= cash && cash <= 40000000) { val1 = "30000000",  val2 = cash - 30000000, val11 = st6k, val12 = st2k}
      else if (40000001 <= cash && cash <= 50000000) { val1 = cash, val2 = "",  val11 = st10k, val12 = ""}
      else if (50000001 <= cash && cash <= 50099999) { val1 = "50000000" , val2 = cash - 50000000, val11 = st10k, val12 = st0}
      else if (50100000 <= cash && cash <= 51000000) { val1 = "50000000" , val2 = cash - 50000000, val11 = st10k, val12 = st200}
      else if (51000001 <= cash && cash <= 52000000) { val1 = "50000000" , val2 = cash - 50000000, val11 = st10k, val12 = st400}
      else if (52000001 <= cash && cash <= 53000000) { val1 = "50000000" , val2 = cash - 50000000, val11 = st10k, val12 = st600}
      else if (53000001 <= cash && cash <= 55000000) { val1 = "50000000" , val2 = cash - 50000000, val11 = st10k, val12 = st1k}
      else if (55000001 <= cash && cash <= 60000000) { val1 = "50000000",  val2 = cash - 50000000, val11 = st10k, val12 = st2k}
      else if (60000001 <= cash && cash <= 70000000) { val1 = "50000000" , val2 = cash - 50000000, val11 = st10k, val12 = st4k}
      else if (70000001 <= cash && cash <= 80000000) { val1 = "50000000" , val2 = cash - 50000000, val11 = st10k, val12 = st6k}
      else if (80000001 <= cash && cash <= 100000000) { val1 = cash, val2 = "",  val11 = st20k, val12 = ""}
      else if (100000001 <= cash && cash <= 100099999) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st0}
      else if (100100000 <= cash && cash <= 101000000) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st200}
      else if (101000001 <= cash && cash <= 102000000) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st400}
      else if (102000001 <= cash && cash <= 103000000) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st600}
      else if (103000001 <= cash && cash <= 105000000) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st1k}
      else if (105000001 <= cash && cash <= 110000000) { val1 = "100000000",  val2 = cash - 100000000, val11 = st20k, val12 = st2k}
      else if (110000001 <= cash && cash <= 120000000) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st4k}
      else if (120000001 <= cash && cash <= 130000000) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st6k}
      else if (130000001 <= cash && cash <= 150000000) { val1 = "100000000" , val2 = cash - 100000000, val11 = st20k, val12 = st10k}
      else if (150000001 <= cash && cash <= 200000000) { val1 = cash , val2 = "", val11 = st40k, val12 = ""}
      else if (200000001 <= cash && cash <= 200099999) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st0}
      else if (200100000 <= cash && cash <= 201000000) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st200}
      else if (201000001 <= cash && cash <= 202000000) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st400}
      else if (202000001 <= cash && cash <= 203000000) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st600}
      else if (203000001 <= cash && cash <= 205000000) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st1k}
      else if (205000001 <= cash && cash <= 210000000) { val1 = "200000000",  val2 = cash - 200000000, val11 = st40k, val12 = st2k}
      else if (210000001 <= cash && cash <= 220000000) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st4k}
      else if (220000001 <= cash && cash <= 230000000) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st6k}
      else if (230000001 <= cash && cash <= 250000000) { val1 = "200000000" , val2 = cash - 200000000, val11 = st40k, val12 = st10k}
      else if (250000001 <= cash && cash <= 300000000) { val1 = cash , val2 = "", val11 = st60k, val12 = ""}
      else if (300000001 <= cash && cash <= 300099999) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st0}
      else if (300100000 <= cash && cash <= 301000000) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st200}
      else if (301000001 <= cash && cash <= 302000000) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st400}
      else if (302000001 <= cash && cash <= 303000000) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st600}
      else if (303000001 <= cash && cash <= 305000000) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st1k}
      else if (305000001 <= cash && cash <= 310000000) { val1 = "300000000",  val2 = cash - 300000000, val11 = st60k, val12 = st2k}
      else if (310000001 <= cash && cash <= 320000000) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st4k}
      else if (320000001 <= cash && cash <= 330000000) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st6k}
      else if (330000001 <= cash && cash <= 350000000) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st10k}
      else if (350000001 <= cash && cash <= 400000000) { val1 = "300000000" , val2 = cash - 300000000, val11 = st60k, val12 = st20k}
      else if (400000001 <= cash && cash <= 500000000) { val1 = cash , val2 = "", val11 = st100k, val12 = ""}
      else if (500000001 <= cash && cash <= 500099999) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st0}
      else if (500100000 <= cash && cash <= 501000000) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st200}
      else if (501000001 <= cash && cash <= 502000000) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st400}
      else if (502000001 <= cash && cash <= 503000000) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st600}
      else if (503000001 <= cash && cash <= 505000000) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st1k}
      else if (505000001 <= cash && cash <= 510000000) { val1 = "500000000",  val2 = cash - 500000000, val11 = st100k, val12 = st2k}
      else if (510000001 <= cash && cash <= 520000000) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st4k}
      else if (520000001 <= cash && cash <= 530000000) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st6k}
      else if (530000001 <= cash && cash <= 550000000) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st10k}
      else if (550000001 <= cash && cash <= 600000000) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st20k}
      else if (600000001 <= cash && cash <= 700000000) { val1 = "500000000" , val2 = cash - 500000000, val11 = st100k, val12 = st40k}
      else if (700000001 <= cash && cash <= 1000000000) { val1 = cash , val2 = "", val11 = st150k, val12 = ""}
      else if (1000000001 <= cash) { val1 = cash , val2 = "", val11 = st200k, val12 = ""}

      tegata1.innerHTML = "手形1枚目 : " + addFigure(val1);
      tegata2.innerHTML = "手形2枚目 : " + addFigure(val2); 
      tegata3.innerHTML = "";
      insi1.innerHTML = "印紙1枚目 : " + addFigure(val11);
      insi2.innerHTML = "印紙2枚目 : " + addFigure(val12);
      insi3.innerHTML = "";

    } else {
      if (0 <= cash && cash <= 100000) { val1 = cash , val2 = "",val3 = "", val11 = st0, val12 = "", val13 = ""}
      else if (100001 <= cash && cash <= 1000000) { val1 = cash , val2 = "",val3 = "", val11 = st200, val12 = "", val13 = ""}
      else if (1000001 <= cash && cash <= 1099999) { val1 = "1000000" , val2 = cash - 1000000, val3 = "", val11 = st200, val12 = st0, val13 = ""}
      else if (1100000 <= cash && cash <= 2000000) { val1 = cash , val2 = "",val3 = "", val11 = st400, val12 = "", val13 = ""}
      else if (2000001 <= cash && cash <= 2099999) { val1 = "2000000" , val2 = cash - 2000000, val3 = "", val11 = st400, val12 = st0, val13 = ""}
      else if (2100000 <= cash && cash <= 3000000) { val1 = cash , val2 = "", val3 = "", val11 = st600, val12 = "", val13 = ""}
      else if (3000001 <= cash && cash <= 3099999) { val1 = "3000000" , val2 = cash - 3000000, val3 = "", val11 = st600, val12 = st0, val13 = ""}
      else if (3100000 <= cash && cash <= 4000000) { val1 = "3000000" , val2 = cash - 3000000, val3 = "", val11 = st600, val12 = st200, val13 = ""}
      else if (4000001 <= cash && cash <= 4099999) { val1 = "3000000" , val2 = "1000000", val3 = cash - 4000000, val11 = st600, val12 = st200, val13 = st0}
      else if (4100000 <= cash && cash <= 5000000) { val1 = cash , val2 = "", val3 = "", val11 = st1k, val12 = "", val13 = ""}
      else if (5000001 <= cash && cash <= 5099999) { val1 = "5000000" , val2 = cash - 5000000, val3 = "", val11 = st1k, val12 = st0, val13 = ""}
      else if (5100000 <= cash && cash <= 6000000) { val1 = "5000000" , val2 = cash - 5000000, val3 = "", val11 = st1k, val12 = st200, val13 = ""}
      else if (6000001 <= cash && cash <= 6099999) { val1 = "5000000" , val2 = "1000000", val3 = cash - 6000000, val11 = st1k, val12 = st200, val13 = st0}
      else if (6100000 <= cash && cash <= 7000000) { val1 = "5000000" , val2 = cash - 5000000, val3 = "", val11 = st1k, val12 = st400, val13 = ""}
      else if (7000001 <= cash && cash <= 7099999) { val1 = "5000000" , val2 = "2000000", val3 = cash - 7000000, val11 = st1k, val12 = st400, val13 = st0}
      else if (7100000 <= cash && cash <= 8000000) { val1 = "5000000" , val2 = cash - 5000000, val3 = "", val11 = st1k, val12 = st600, val13 = ""}
      else if (8000001 <= cash && cash <= 8099999) { val1 = "5000000" , val2 = "3000000", val3 = cash - 8000000, val11 = st1k, val12 = st600, val13 = st0}
      else if (8100000 <= cash && cash <= 9000000) { val1 = "5000000" , val2 = "3000000", val3 = cash - 8000000, val11 = st1k, val12 = st600, val13 = st200}
      else if (9000001 <= cash && cash <= 10000000) { val1 = cash , val2 = "", val3 = "", val11 = st2k, val12 = "", val13 = ""}
      else if (10000001 <= cash && cash <= 10099999) { val1 = "10000000" , val2 = cash - 10000000, val3 = "", val11 = st2k, val12 = st0, val13 = ""}
      else if (10100000 <= cash && cash <= 11000000) { val1 = "10000000" , val2 = cash - 10000000, val3 = "", val11 = st2k, val12 = st200, val13 = ""}
      else if (11000001 <= cash && cash <= 11099999) { val1 = "10000000" , val2 = "1000000", val3 = cash - 11000000, val11 = st2k, val12 = st200, val13 = st0}
      else if (11100000 <= cash && cash <= 12000000) { val1 = "10000000" , val2 = cash - 10000000, val3 = "", val11 = st2k, val12 = st400, val13 = ""}
      else if (12000001 <= cash && cash <= 12099999) { val1 = "10000000" , val2 = "2000000", val3 = cash - 12000000, val11 = st2k, val12 = st400, val13 = st0}
      else if (12100000 <= cash && cash <= 13000000) { val1 = "10000000" , val2 = cash - 10000000, val3 = "", val11 = st2k, val12 = st600, val13 = ""}
      else if (13000001 <= cash && cash <= 13099999) { val1 = "10000000" , val2 = "3000000", val3 = cash - 13000000, val11 = st2k, val12 = st600, val13 = st0}
      else if (13100000 <= cash && cash <= 14000000) { val1 = "10000000" , val2 = "3000000", val3 = cash - 13000000, val11 = st2k, val12 = st600, val13 = st200}
      else if (14000001 <= cash && cash <= 15000000) { val1 = "10000000" , val2 = cash - 10000000, val3 = "", val11 = st2k, val12 = st1k, val13 = ""}
      else if (15000001 <= cash && cash <= 15099999) { val1 = "10000000" , val2 = "5000000", val3 = cash - 15000000, val11 = st2k, val12 = st1k, val13 = st0}
      else if (15100000 <= cash && cash <= 16000000) { val1 = "10000000" , val2 = "5000000", val3 = cash - 15000000, val11 = st2k, val12 = st1k, val13 = st200}
      else if (16000001 <= cash && cash <= 17000000) { val1 = "10000000" , val2 = "5000000", val3 = cash - 15000000, val11 = st2k, val12 = st1k, val13 = st400}
      else if (17000001 <= cash && cash <= 18000000) { val1 = "10000000" , val2 = "5000000", val3 = cash - 15000000, val11 = st2k, val12 = st1k, val13 = st600}
      else if (18000001 <= cash && cash <= 20000000) { val1 = cash , val2 = "", val3 = "", val11 = st4k, val12 = "", val13 = ""}
      else if (20000001 <= cash && cash <= 20099999) { val1 = "20000000" , val2 = cash - 20000000, val3 = "", val11 = st4k, val12 = st0, val13 = ""}
      else if (20100000 <= cash && cash <= 21000000) { val1 = "20000000" , val2 = cash - 20000000, val3 = "", val11 = st4k, val12 = st200, val13 = ""}
      else if (21000001 <= cash && cash <= 21099999) { val1 = "20000000" , val2 = "1000000", val3 = cash - 21000000, val11 = st4k, val12 = st200, val13 = st0}
      else if (21100000 <= cash && cash <= 22000000) { val1 = "20000000" , val2 = cash - 20000000, val3 = "", val11 = st4k, val12 = st400, val13 = ""}
      else if (22000001 <= cash && cash <= 22099999) { val1 = "20000000" , val2 = "2000000", val3 = cash - 22000000, val11 = st4k, val12 = st400, val13 = st0}
      else if (22100000 <= cash && cash <= 23000000) { val1 = "20000000" , val2 = cash - 20000000, val3 = "", val11 = st4k, val12 = st600, val13 = ""}
      else if (23000001 <= cash && cash <= 23099999) { val1 = "20000000" , val2 = "3000000", val3 = cash - 23000000, val11 = st4k, val12 = st600, val13 = st0}
      else if (23100000 <= cash && cash <= 24000000) { val1 = "20000000" , val2 = "3000000", val3 = cash - 23000000, val11 = st4k, val12 = st600, val13 = st200}
      else if (24000001 <= cash && cash <= 25000000) { val1 = "20000000" , val2 = cash - 20000000, val3 = "", val11 = st4k, val12 = st1k, val13 = ""}
      else if (25000001 <= cash && cash <= 25099999) { val1 = "20000000" , val2 = "5000000", val3 = cash - 25000000, val11 = st4k, val12 = st1k, val13 = st0}
      else if (25100000 <= cash && cash <= 26000000) { val1 = "20000000" , val2 = "5000000", val3 = cash - 25000000, val11 = st4k, val12 = st1k, val13 = st200}
      else if (26000001 <= cash && cash <= 27000000) { val1 = "20000000" , val2 = "5000000", val3 = cash - 25000000, val11 = st4k, val12 = st1k, val13 = st400}
      else if (27000001 <= cash && cash <= 28000000) { val1 = "20000000" , val2 = "5000000", val3 = cash - 25000000, val11 = st4k, val12 = st1k, val13 = st600}
      else if (28000001 <= cash && cash <= 30000000) { val1 = cash , val2 = "", val3 = "", val11 = st6k, val12 = "", val13 = ""}
      else if (30000001 <= cash && cash <= 30099999) { val1 = "30000000" , val2 = cash - 30000000, val3 = "", val11 = st6k, val12 = st0, val13 = ""}
      else if (30100000 <= cash && cash <= 31000000) { val1 = "30000000" , val2 = cash - 30000000, val3 = "", val11 = st6k, val12 = st200, val13 = ""}
      else if (31000001 <= cash && cash <= 31099999) { val1 = "30000000" , val2 = "1000000", val3 = cash - 31000000, val11 = st6k, val12 = st200, val13 = st0}
      else if (31100000 <= cash && cash <= 32000000) { val1 = "30000000" , val2 = cash - 30000000, val3 = "", val11 = st6k, val12 = st400, val13 = ""}
      else if (32000001 <= cash && cash <= 32099999) { val1 = "30000000" , val2 = "2000000", val3 = cash - 32000000, val11 = st6k, val12 = st400, val13 = st0}
      else if (32100000 <= cash && cash <= 33000000) { val1 = "30000000" , val2 = cash - 30000000, val3 = "", val11 = st6k, val12 = st600, val13 = ""}
      else if (33000001 <= cash && cash <= 33099999) { val1 = "30000000" , val2 = "3000000", val3 = cash - 33000000, val11 = st6k, val12 = st600, val13 = st0}
      else if (33100000 <= cash && cash <= 34000000) { val1 = "30000000" , val2 = "3000000", val3 = cash - 33000000, val11 = st6k, val12 = st600, val13 = st200}
      else if (34000001 <= cash && cash <= 35000000) { val1 = "30000000" , val2 = cash - 30000000, val3 = "", val11 = st6k, val12 = st1k, val13 = ""}
      else if (35000001 <= cash && cash <= 35099999) { val1 = "30000000" , val2 = "5000000", val3 = cash - 35000000, val11 = st6k, val12 = st1k, val13 = st0}
      else if (35100000 <= cash && cash <= 36000000) { val1 = "30000000" , val2 = "5000000", val3 = cash - 35000000, val11 = st6k, val12 = st1k, val13 = st200}
      else if (36000001 <= cash && cash <= 37000000) { val1 = "30000000" , val2 = "5000000", val3 = cash - 35000000, val11 = st6k, val12 = st1k, val13 = st400}
      else if (37000001 <= cash && cash <= 38000000) { val1 = "30000000" , val2 = "5000000", val3 = cash - 35000000, val11 = st6k, val12 = st1k, val13 = st600}
      else if (38000001 <= cash && cash <= 40000000) { val1 = "30000000" , val2 = cash - 30000000, val3 = "", val11 = st6k, val12 = st2k, val13 = ""}
      else if (40000001 <= cash && cash <= 40099999) { val1 = "30000000" , val2 = "10000000", val3 = cash - 40000000, val11 = st6k, val12 = st2k, val13 = st0}
      else if (40100000 <= cash && cash <= 41000000) { val1 = "30000000" , val2 = "10000000", val3 = cash - 40000000, val11 = st6k, val12 = st2k, val13 = st200}
      else if (41000001 <= cash && cash <= 42000000) { val1 = "30000000" , val2 = "10000000", val3 = cash - 40000000, val11 = st6k, val12 = st2k, val13 = st400}
      else if (42000001 <= cash && cash <= 43000000) { val1 = "30000000" , val2 = "10000000", val3 = cash - 40000000, val11 = st6k, val12 = st2k, val13 = st600}
      else if (43000001 <= cash && cash <= 45000000) { val1 = "30000000" , val2 = "10000000", val3 = cash - 40000000, val11 = st6k, val12 = st2k, val13 = st1k}
      else if (45000001 <= cash && cash <= 50000000) { val1 = cash , val2 = "", val3 = "", val11 = st10k, val12 = "", val13 = ""}
      else if (50000001 <= cash && cash <= 50099999) { val1 = "50000000" , val2 = cash - 50000000, val3 = "", val11 = st10k, val12 = st0, val13 = ""}
      else if (50100000 <= cash && cash <= 51000000) { val1 = "50000000" , val2 = cash - 50000000, val3 = "", val11 = st10k, val12 = st200, val13 = ""}
      else if (51000001 <= cash && cash <= 51099999) { val1 = "50000000" , val2 = "1000000", val3 = cash - 51000000, val11 = st10k, val12 = st200, val13 = st0}
      else if (51100000 <= cash && cash <= 52000000) { val1 = "50000000" , val2 = cash - 50000000, val3 = "", val11 = st10k, val12 = st400, val13 = ""}
      else if (52000001 <= cash && cash <= 52099999) { val1 = "50000000" , val2 = "2000000", val3 = cash - 52000000, val11 = st10k, val12 = st400, val13 = st0}
      else if (52100000 <= cash && cash <= 53000000) { val1 = "50000000" , val2 = cash - 50000000, val3 = "", val11 = st10k, val12 = st600, val13 = ""}
      else if (53000001 <= cash && cash <= 53099999) { val1 = "50000000" , val2 = "3000000", val3 = cash - 53000000, val11 = st10k, val12 = st600, val13 = st0}
      else if (53100000 <= cash && cash <= 54000000) { val1 = "50000000" , val2 = "3000000", val3 = cash - 53000000, val11 = st10k, val12 = st600, val13 = st200}
      else if (54000001 <= cash && cash <= 55000000) { val1 = "50000000" , val2 = cash - 50000000, val3 = "", val11 = st10k, val12 = st1k, val13 = ""}
      else if (55000001 <= cash && cash <= 55099999) { val1 = "50000000" , val2 = "5000000", val3 = cash - 55000000, val11 = st10k, val12 = st1k, val13 = st0}
      else if (55100000 <= cash && cash <= 56000000) { val1 = "50000000" , val2 = "5000000", val3 = cash - 55000000, val11 = st10k, val12 = st1k, val13 = st200}
      else if (56000001 <= cash && cash <= 57000000) { val1 = "50000000" , val2 = "5000000", val3 = cash - 55000000, val11 = st10k, val12 = st1k, val13 = st400}
      else if (57000001 <= cash && cash <= 58000000) { val1 = "50000000" , val2 = "5000000", val3 = cash - 55000000, val11 = st10k, val12 = st1k, val13 = st600}
      else if (58000001 <= cash && cash <= 60000000) { val1 = "50000000" , val2 = cash - 50000000, val3 = "", val11 = st10k, val12 = st2k, val13 = ""}
      else if (60000001 <= cash && cash <= 60099999) { val1 = "50000000" , val2 = "10000000", val3 = cash - 60000000, val11 = st10k, val12 = st2k, val13 = st0}
      else if (60100000 <= cash && cash <= 61000000) { val1 = "50000000" , val2 = "10000000", val3 = cash - 60000000, val11 = st10k, val12 = st2k, val13 = st200}
      else if (61000001 <= cash && cash <= 62000000) { val1 = "50000000" , val2 = "10000000", val3 = cash - 60000000, val11 = st10k, val12 = st2k, val13 = st400}
      else if (62000001 <= cash && cash <= 63000000) { val1 = "50000000" , val2 = "10000000", val3 = cash - 60000000, val11 = st10k, val12 = st2k, val13 = st600}
      else if (63000001 <= cash && cash <= 65000000) { val1 = "50000000" , val2 = "10000000", val3 = cash - 60000000, val11 = st10k, val12 = st2k, val13 = st1k}
      else if (65000001 <= cash && cash <= 70000000) { val1 = "50000000" , val2 = cash - 50000000, val3 = "", val11 = st10k, val12 = st4k, val13 = ""}
      else if (70000001 <= cash && cash <= 70099999) { val1 = "50000000" , val2 = "20000000", val3 = cash - 70000000, val11 = st10k, val12 = st4k, val13 = st0}
      else if (70100000 <= cash && cash <= 71000000) { val1 = "50000000" , val2 = "20000000", val3 = cash - 70000000, val11 = st10k, val12 = st4k, val13 = st200}
      else if (71000001 <= cash && cash <= 72000000) { val1 = "50000000" , val2 = "20000000", val3 = cash - 70000000, val11 = st10k, val12 = st4k, val13 = st400}
      else if (72000001 <= cash && cash <= 73000000) { val1 = "50000000" , val2 = "20000000", val3 = cash - 70000000, val11 = st10k, val12 = st4k, val13 = st600}
      else if (73000001 <= cash && cash <= 75000000) { val1 = "50000000" , val2 = "20000000", val3 = cash - 70000000, val11 = st10k, val12 = st4k, val13 = st1k}
      else if (75000001 <= cash && cash <= 80000000) { val1 = "50000000" , val2 = cash - 50000000, val3 = "", val11 = st10k, val12 = st6k, val13 = ""}
      else if (80000001 <= cash && cash <= 80099999) { val1 = "50000000" , val2 = "30000000", val3 = cash - 80000000, val11 = st10k, val12 = st6k, val13 = st0}
      else if (80100000 <= cash && cash <= 81000000) { val1 = "50000000" , val2 = "30000000", val3 = cash - 80000000, val11 = st10k, val12 = st6k, val13 = st200}
      else if (81000001 <= cash && cash <= 82000000) { val1 = "50000000" , val2 = "30000000", val3 = cash - 80000000, val11 = st10k, val12 = st6k, val13 = st400}
      else if (82000001 <= cash && cash <= 83000000) { val1 = "50000000" , val2 = "30000000", val3 = cash - 80000000, val11 = st10k, val12 = st6k, val13 = st600}
      else if (83000001 <= cash && cash <= 85000000) { val1 = "50000000" , val2 = "30000000", val3 = cash - 80000000, val11 = st10k, val12 = st6k, val13 = st1k}
      else if (85000001 <= cash && cash <= 90000000) { val1 = "50000000" , val2 = "30000000", val3 = cash - 80000000, val11 = st10k, val12 = st6k, val13 = st2k}
      else if (90000001 <= cash && cash <= 100000000) { val1 = cash , val2 = "", val3 = "", val11 = st20k, val12 = "", val13 = ""}
      else if (100000001 <= cash && cash <= 100099999) { val1 = "100000000" , val2 = cash - 100000000, val3 = "", val11 = st20k, val12 = st0, val13 = ""}
      else if (100100000 <= cash && cash <= 101000000) { val1 = "100000000" , val2 = cash - 100000000, val3 = "", val11 = st20k, val12 = st200, val13 = ""}
      else if (101000001 <= cash && cash <= 101099999) { val1 = "100000000" , val2 = "1000000", val3 = cash - 101000000, val11 = st20k, val12 = st200, val13 = st0}
      else if (101100000 <= cash && cash <= 102000000) { val1 = "100000000" , val2 = cash - 100000000, val3 = "", val11 = st20k, val12 = st400, val13 = ""}
      else if (102000001 <= cash && cash <= 102099999) { val1 = "100000000" , val2 = "2000000", val3 = cash - 102000000, val11 = st20k, val12 = st400, val13 = st0}
      else if (102100000 <= cash && cash <= 103000000) { val1 = "100000000" , val2 = cash - 100000000, val3 = "", val11 = st20k, val12 = st600, val13 = ""}
      else if (103000001 <= cash && cash <= 103099999) { val1 = "100000000" , val2 = "3000000", val3 = cash - 103000000, val11 = st20k, val12 = st600, val13 = st0}
      else if (103100000 <= cash && cash <= 104000000) { val1 = "100000000" , val2 = "3000000", val3 = cash - 103000000, val11 = st20k, val12 = st600, val13 = st200}
      else if (104000001 <= cash && cash <= 105000000) { val1 = "100000000" , val2 = cash - 100000000, val3 = "", val11 = st20k, val12 = st1k, val13 = ""}
      else if (105000001 <= cash && cash <= 105099999) { val1 = "100000000" , val2 = "5000000", val3 = cash - 105000000, val11 = st20k, val12 = st1k, val13 = st0}
      else if (105100000 <= cash && cash <= 106000000) { val1 = "100000000" , val2 = "5000000", val3 = cash - 105000000, val11 = st20k, val12 = st1k, val13 = st200}
      else if (106000001 <= cash && cash <= 107000000) { val1 = "100000000" , val2 = "5000000", val3 = cash - 105000000, val11 = st20k, val12 = st1k, val13 = st400}
      else if (107000001 <= cash && cash <= 108000000) { val1 = "100000000" , val2 = "5000000", val3 = cash - 105000000, val11 = st20k, val12 = st1k, val13 = st600}
      else if (108000001 <= cash && cash <= 110000000) { val1 = "100000000" , val2 = cash - 100000000, val3 = "", val11 = st20k, val12 = st2k, val13 = ""}
      else if (100000001 <= cash && cash <= 100099999) { val1 = "100000000" , val2 = "10000000", val3 = cash - 110000000, val11 = st20k, val12 = st2k, val13 = st0}
      else if (110100000 <= cash && cash <= 111000000) { val1 = "100000000" , val2 = "10000000", val3 = cash - 110000000, val11 = st20k, val12 = st2k, val13 = st200}
      else if (111000001 <= cash && cash <= 112000000) { val1 = "100000000" , val2 = "10000000", val3 = cash - 110000000, val11 = st20k, val12 = st2k, val13 = st400}
      else if (112000001 <= cash && cash <= 113000000) { val1 = "100000000" , val2 = "10000000", val3 = cash - 110000000, val11 = st20k, val12 = st2k, val13 = st600}
      else if (113000001 <= cash && cash <= 115000000) { val1 = "100000000" , val2 = "10000000", val3 = cash - 110000000, val11 = st20k, val12 = st2k, val13 = st1k}
      else if (115000001 <= cash && cash <= 120000000) { val1 = "100000000" , val2 = cash - 100000000, val3 = "", val11 = st20k, val12 = st4k, val13 = ""}
      else if (120000001 <= cash && cash <= 120099999) { val1 = "100000000" , val2 = "20000000", val3 = cash - 120000000, val11 = st20k, val12 = st4k, val13 = st0}
      else if (120100000 <= cash && cash <= 121000000) { val1 = "100000000" , val2 = "20000000", val3 = cash - 120000000, val11 = st20k, val12 = st4k, val13 = st200}
      else if (121000001 <= cash && cash <= 122000000) { val1 = "100000000" , val2 = "20000000", val3 = cash - 120000000, val11 = st20k, val12 = st4k, val13 = st400}
      else if (122000001 <= cash && cash <= 123000000) { val1 = "100000000" , val2 = "20000000", val3 = cash - 120000000, val11 = st20k, val12 = st4k, val13 = st600}
      else if (123000001 <= cash && cash <= 125000000) { val1 = "100000000" , val2 = "20000000", val3 = cash - 120000000, val11 = st20k, val12 = st4k, val13 = st1k}
      else if (125000001 <= cash && cash <= 130000000) { val1 = "100000000" , val2 = cash - 100000000, val3 = "", val11 = st20k, val12 = st6k, val13 = ""}
      else if (130000001 <= cash && cash <= 130099999) { val1 = "100000000" , val2 = "30000000", val3 = cash - 130000000, val11 = st20k, val12 = st6k, val13 = st0}
      else if (130100000 <= cash && cash <= 131000000) { val1 = "100000000" , val2 = "30000000", val3 = cash - 130000000, val11 = st20k, val12 = st6k, val13 = st200}
      else if (131000001 <= cash && cash <= 132000000) { val1 = "100000000" , val2 = "30000000", val3 = cash - 130000000, val11 = st20k, val12 = st6k, val13 = st400}
      else if (132000001 <= cash && cash <= 133000000) { val1 = "100000000" , val2 = "30000000", val3 = cash - 130000000, val11 = st20k, val12 = st6k, val13 = st600}
      else if (133000001 <= cash && cash <= 135000000) { val1 = "100000000" , val2 = "30000000", val3 = cash - 130000000, val11 = st20k, val12 = st6k, val13 = st1k}
      else if (135000001 <= cash && cash <= 140000000) { val1 = "100000000" , val2 = "30000000", val3 = cash - 130000000, val11 = st20k, val12 = st6k, val13 = st2k}
      else if (140000001 <= cash && cash <= 150000000) { val1 = "100000000" , val2 = cash - 100000000, val3 = "", val11 = st20k, val12 = st10k, val13 = ""}
      else if (150000001 <= cash && cash <= 150099999) { val1 = "100000000" , val2 = "50000000", val3 = cash - 150000000, val11 = st20k, val12 = st10k, val13 = st0}
      else if (150100000 <= cash && cash <= 151000000) { val1 = "100000000" , val2 = "50000000", val3 = cash - 150000000, val11 = st20k, val12 = st10k, val13 = st200}
      else if (151000001 <= cash && cash <= 152000000) { val1 = "100000000" , val2 = "50000000", val3 = cash - 150000000, val11 = st20k, val12 = st10k, val13 = st400}
      else if (152000001 <= cash && cash <= 153000000) { val1 = "100000000" , val2 = "50000000", val3 = cash - 150000000, val11 = st20k, val12 = st10k, val13 = st600}
      else if (153000001 <= cash && cash <= 155000000) { val1 = "100000000" , val2 = "50000000", val3 = cash - 150000000, val11 = st20k, val12 = st10k, val13 = st1k}
      else if (155000001 <= cash && cash <= 160000000) { val1 = "100000000" , val2 = "50000000", val3 = cash - 150000000, val11 = st20k, val12 = st10k, val13 = st2k}
      else if (160000001 <= cash && cash <= 170000000) { val1 = "100000000" , val2 = "50000000", val3 = cash - 150000000, val11 = st20k, val12 = st10k, val13 = st4k}
      else if (170000001 <= cash && cash <= 180000000) { val1 = "100000000" , val2 = "50000000", val3 = cash - 150000000, val11 = st20k, val12 = st10k, val13 = st6k}
      else if (180000001 <= cash && cash <= 200000000) { val1 = cash , val2 = "", val3 = "", val11 = st40k, val12 = "", val13 = ""}
      else if (200000001 <= cash && cash <= 200099999) { val1 = "200000000" , val2 = cash - 200000000, val3 = "", val11 = st40k, val12 = st0, val13 = ""}
      else if (200100000 <= cash && cash <= 201000000) { val1 = "200000000" , val2 = cash - 200000000, val3 = "", val11 = st40k, val12 = st200, val13 = ""}
      else if (201000001 <= cash && cash <= 201099999) { val1 = "200000000" , val2 = "1000000", val3 = cash - 201000000, val11 = st40k, val12 = st200, val13 = st0}
      else if (201100000 <= cash && cash <= 202000000) { val1 = "200000000" , val2 = cash - 200000000, val3 = "", val11 = st40k, val12 = st400, val13 = ""}
      else if (202000001 <= cash && cash <= 202099999) { val1 = "200000000" , val2 = "2000000", val3 = cash - 202000000, val11 = st40k, val12 = st400, val13 = st0}
      else if (202100000 <= cash && cash <= 203000000) { val1 = "200000000" , val2 = cash - 200000000, val3 = "", val11 = st40k, val12 = st600, val13 = ""}
      else if (203000001 <= cash && cash <= 203099999) { val1 = "200000000" , val2 = "3000000", val3 = cash - 203000000, val11 = st40k, val12 = st600, val13 = st0}
      else if (203100000 <= cash && cash <= 204000000) { val1 = "200000000" , val2 = "3000000", val3 = cash - 203000000, val11 = st40k, val12 = st600, val13 = st200}
      else if (204000001 <= cash && cash <= 205000000) { val1 = "200000000" , val2 = cash - 200000000, val3 = "", val11 = st40k, val12 = st1k, val13 = ""}
      else if (205000001 <= cash && cash <= 205099999) { val1 = "200000000" , val2 = "5000000", val3 = cash - 205000000, val11 = st40k, val12 = st1k, val13 = st0}
      else if (205100000 <= cash && cash <= 206000000) { val1 = "200000000" , val2 = "5000000", val3 = cash - 205000000, val11 = st40k, val12 = st1k, val13 = st200}
      else if (206000001 <= cash && cash <= 207000000) { val1 = "200000000" , val2 = "5000000", val3 = cash - 205000000, val11 = st40k, val12 = st1k, val13 = st400}
      else if (207000001 <= cash && cash <= 208000000) { val1 = "200000000" , val2 = "5000000", val3 = cash - 205000000, val11 = st40k, val12 = st1k, val13 = st600}
      else if (208000001 <= cash && cash <= 210000000) { val1 = "200000000" , val2 = cash - 200000000, val3 = "", val11 = st40k, val12 = st2k, val13 = ""}
      else if (210000001 <= cash && cash <= 210099999) { val1 = "200000000" , val2 = "10000000", val3 = cash - 210000000, val11 = st40k, val12 = st2k, val13 = st0}
      else if (210100000 <= cash && cash <= 211000000) { val1 = "200000000" , val2 = "10000000", val3 = cash - 210000000, val11 = st40k, val12 = st2k, val13 = st200}
      else if (211000001 <= cash && cash <= 212000000) { val1 = "200000000" , val2 = "10000000", val3 = cash - 210000000, val11 = st40k, val12 = st2k, val13 = st400}
      else if (212000001 <= cash && cash <= 213000000) { val1 = "200000000" , val2 = "10000000", val3 = cash - 210000000, val11 = st40k, val12 = st2k, val13 = st600}
      else if (213000001 <= cash && cash <= 215000000) { val1 = "200000000" , val2 = "10000000", val3 = cash - 210000000, val11 = st40k, val12 = st2k, val13 = st1k}
      else if (215000001 <= cash && cash <= 220000000) { val1 = "200000000" , val2 = cash - 200000000, val3 = "", val11 = st40k, val12 = st4k, val13 = ""}
      else if (220000001 <= cash && cash <= 220099999) { val1 = "200000000" , val2 = "20000000", val3 = cash - 220000000, val11 = st40k, val12 = st4k, val13 = st0}
      else if (220100000 <= cash && cash <= 221000000) { val1 = "200000000" , val2 = "20000000", val3 = cash - 220000000, val11 = st40k, val12 = st4k, val13 = st200}
      else if (221000001 <= cash && cash <= 222000000) { val1 = "200000000" , val2 = "20000000", val3 = cash - 220000000, val11 = st40k, val12 = st4k, val13 = st400}
      else if (222000001 <= cash && cash <= 223000000) { val1 = "200000000" , val2 = "20000000", val3 = cash - 220000000, val11 = st40k, val12 = st4k, val13 = st600}
      else if (223000001 <= cash && cash <= 225000000) { val1 = "200000000" , val2 = "20000000", val3 = cash - 220000000, val11 = st40k, val12 = st4k, val13 = st1k}
      else if (225000001 <= cash && cash <= 230000000) { val1 = "200000000" , val2 = cash - 200000000, val3 = "", val11 = st40k, val12 = st6k, val13 = ""}
      else if (230000001 <= cash && cash <= 230099999) { val1 = "200000000" , val2 = "30000000", val3 = cash - 230000000, val11 = st40k, val12 = st6k, val13 = st0}
      else if (230100000 <= cash && cash <= 231000000) { val1 = "200000000" , val2 = "30000000", val3 = cash - 230000000, val11 = st40k, val12 = st6k, val13 = st200}
      else if (231000001 <= cash && cash <= 232000000) { val1 = "200000000" , val2 = "30000000", val3 = cash - 230000000, val11 = st40k, val12 = st6k, val13 = st400}
      else if (232000001 <= cash && cash <= 233000000) { val1 = "200000000" , val2 = "30000000", val3 = cash - 230000000, val11 = st40k, val12 = st6k, val13 = st600}
      else if (233000001 <= cash && cash <= 235000000) { val1 = "200000000" , val2 = "30000000", val3 = cash - 230000000, val11 = st40k, val12 = st6k, val13 = st1k}
      else if (235000001 <= cash && cash <= 240000000) { val1 = "200000000" , val2 = "30000000", val3 = cash - 230000000, val11 = st40k, val12 = st6k, val13 = st2k}
      else if (240000001 <= cash && cash <= 250000000) { val1 = "200000000" , val2 = cash - 200000000, val3 = "", val11 = st40k, val12 = st10k, val13 = ""}
      else if (250000001 <= cash && cash <= 250099999) { val1 = "200000000" , val2 = "50000000", val3 = cash - 250000000, val11 = st40k, val12 = st10k, val13 = st0}
      else if (250100000 <= cash && cash <= 251000000) { val1 = "200000000" , val2 = "50000000", val3 = cash - 250000000, val11 = st40k, val12 = st10k, val13 = st200}
      else if (251000001 <= cash && cash <= 252000000) { val1 = "200000000" , val2 = "50000000", val3 = cash - 250000000, val11 = st40k, val12 = st10k, val13 = st400}
      else if (252000001 <= cash && cash <= 253000000) { val1 = "200000000" , val2 = "50000000", val3 = cash - 250000000, val11 = st40k, val12 = st10k, val13 = st600}
      else if (253000001 <= cash && cash <= 255000000) { val1 = "200000000" , val2 = "50000000", val3 = cash - 250000000, val11 = st40k, val12 = st10k, val13 = st1k}
      else if (255000001 <= cash && cash <= 260000000) { val1 = "200000000" , val2 = "50000000", val3 = cash - 250000000, val11 = st40k, val12 = st10k, val13 = st2k}
      else if (260000001 <= cash && cash <= 270000000) { val1 = "200000000" , val2 = "50000000", val3 = cash - 250000000, val11 = st40k, val12 = st10k, val13 = st4k}
      else if (270000001 <= cash && cash <= 280000000) { val1 = "200000000" , val2 = "50000000", val3 = cash - 250000000, val11 = st40k, val12 = st10k, val13 = st6k}
      else if (280000001 <= cash && cash <= 300000000) { val1 = cash , val2 = "", val3 = "", val11 = st60k, val12 = "", val13 = ""}
      else if (300000001 <= cash && cash <= 300099999) { val1 = "300000000" , val2 = cash - 300000000, val3 = "", val11 = st60k, val12 = st0, val13 = ""}
      else if (300100000 <= cash && cash <= 301000000) { val1 = "300000000" , val2 = cash - 300000000, val3 = "", val11 = st60k, val12 = st200, val13 = ""}
      else if (301000001 <= cash && cash <= 301099999) { val1 = "300000000" , val2 = "1000000", val3 = cash - 301000000, val11 = st60k, val12 = st200, val13 = st0}
      else if (301100000 <= cash && cash <= 302000000) { val1 = "300000000" , val2 = cash - 300000000, val3 = "", val11 = st60k, val12 = st400, val13 = ""}
      else if (302000001 <= cash && cash <= 302099999) { val1 = "300000000" , val2 = "2000000", val3 = cash - 302000000, val11 = st60k, val12 = st400, val13 = st0}
      else if (302100000 <= cash && cash <= 303000000) { val1 = "300000000" , val2 = cash - 300000000, val3 = "", val11 = st60k, val12 = st600, val13 = ""}
      else if (303000001 <= cash && cash <= 303099999) { val1 = "300000000" , val2 = "3000000", val3 = cash - 303000000, val11 = st60k, val12 = st600, val13 = st0}
      else if (303100000 <= cash && cash <= 304000000) { val1 = "300000000" , val2 = "3000000", val3 = cash - 303000000, val11 = st60k, val12 = st600, val13 = st200}
      else if (304000001 <= cash && cash <= 305000000) { val1 = "300000000" , val2 = cash - 300000000, val3 = "", val11 = st60k, val12 = st1k, val13 = ""}
      else if (305000001 <= cash && cash <= 305099999) { val1 = "300000000" , val2 = "5000000", val3 = cash - 305000000, val11 = st60k, val12 = st1k, val13 = st0}
      else if (305100000 <= cash && cash <= 306000000) { val1 = "300000000" , val2 = "5000000", val3 = cash - 305000000, val11 = st60k, val12 = st1k, val13 = st200}
      else if (306000001 <= cash && cash <= 307000000) { val1 = "300000000" , val2 = "5000000", val3 = cash - 305000000, val11 = st60k, val12 = st1k, val13 = st400}
      else if (307000001 <= cash && cash <= 308000000) { val1 = "300000000" , val2 = "5000000", val3 = cash - 305000000, val11 = st60k, val12 = st1k, val13 = st600}
      else if (308000001 <= cash && cash <= 310000000) { val1 = "300000000" , val2 = cash - 300000000, val3 = "", val11 = st60k, val12 = st2k, val13 = ""}
      else if (310000001 <= cash && cash <= 310099999) { val1 = "300000000" , val2 = "10000000", val3 = cash - 310000000, val11 = st60k, val12 = st2k, val13 = st0}
      else if (310100000 <= cash && cash <= 311000000) { val1 = "300000000" , val2 = "10000000", val3 = cash - 310000000, val11 = st60k, val12 = st2k, val13 = st200}
      else if (311000001 <= cash && cash <= 312000000) { val1 = "300000000" , val2 = "10000000", val3 = cash - 310000000, val11 = st60k, val12 = st2k, val13 = st400}
      else if (312000001 <= cash && cash <= 313000000) { val1 = "300000000" , val2 = "10000000", val3 = cash - 310000000, val11 = st60k, val12 = st2k, val13 = st600}
      else if (313000001 <= cash && cash <= 315000000) { val1 = "300000000" , val2 = "10000000", val3 = cash - 310000000, val11 = st60k, val12 = st2k, val13 = st1k}
      else if (315000001 <= cash && cash <= 320000000) { val1 = "300000000" , val2 = cash - 300000000, val3 = "", val11 = st60k, val12 = st4k, val13 = ""}
      else if (320000001 <= cash && cash <= 320099999) { val1 = "300000000" , val2 = "20000000", val3 = cash - 320000000, val11 = st60k, val12 = st4k, val13 = st0}
      else if (320100000 <= cash && cash <= 321000000) { val1 = "300000000" , val2 = "20000000", val3 = cash - 320000000, val11 = st60k, val12 = st4k, val13 = st200}
      else if (321000001 <= cash && cash <= 322000000) { val1 = "300000000" , val2 = "20000000", val3 = cash - 320000000, val11 = st60k, val12 = st4k, val13 = st400}
      else if (322000001 <= cash && cash <= 323000000) { val1 = "300000000" , val2 = "20000000", val3 = cash - 320000000, val11 = st60k, val12 = st4k, val13 = st600}
      else if (323000001 <= cash && cash <= 325000000) { val1 = "300000000" , val2 = "20000000", val3 = cash - 320000000, val11 = st60k, val12 = st4k, val13 = st1k}
      else if (325000001 <= cash && cash <= 330000000) { val1 = "300000000" , val2 = cash - 300000000, val3 = "", val11 = st60k, val12 = st6k, val13 = ""}
      else if (330000001 <= cash && cash <= 330099999) { val1 = "300000000" , val2 = "30000000", val3 = cash - 330000000, val11 = st60k, val12 = st6k, val13 = st0}
      else if (330100000 <= cash && cash <= 331000000) { val1 = "300000000" , val2 = "30000000", val3 = cash - 330000000, val11 = st60k, val12 = st6k, val13 = st200}
      else if (331000001 <= cash && cash <= 332000000) { val1 = "300000000" , val2 = "30000000", val3 = cash - 330000000, val11 = st60k, val12 = st6k, val13 = st400}
      else if (332000001 <= cash && cash <= 333000000) { val1 = "300000000" , val2 = "30000000", val3 = cash - 330000000, val11 = st60k, val12 = st6k, val13 = st600}
      else if (333000001 <= cash && cash <= 335000000) { val1 = "300000000" , val2 = "30000000", val3 = cash - 330000000, val11 = st40k, val12 = st6k, val13 = st1k}
      else if (335000001 <= cash && cash <= 340000000) { val1 = "300000000" , val2 = "30000000", val3 = cash - 330000000, val11 = st60k, val12 = st6k, val13 = st2k}
      else if (340000001 <= cash && cash <= 350000000) { val1 = "300000000" , val2 = cash - 300000000, val3 = "", val11 = st60k, val12 = st10k, val13 = ""}
      else if (350000001 <= cash && cash <= 350099999) { val1 = "300000000" , val2 = "50000000", val3 = cash - 350000000, val11 = st60k, val12 = st10k, val13 = st0}
      else if (350100000 <= cash && cash <= 351000000) { val1 = "300000000" , val2 = "50000000", val3 = cash - 350000000, val11 = st60k, val12 = st10k, val13 = st200}
      else if (351000001 <= cash && cash <= 352000000) { val1 = "300000000" , val2 = "50000000", val3 = cash - 350000000, val11 = st60k, val12 = st10k, val13 = st400}
      else if (352000001 <= cash && cash <= 353000000) { val1 = "300000000" , val2 = "50000000", val3 = cash - 350000000, val11 = st60k, val12 = st10k, val13 = st600}
      else if (353000001 <= cash && cash <= 355000000) { val1 = "300000000" , val2 = "50000000", val3 = cash - 350000000, val11 = st60k, val12 = st10k, val13 = st1k}
      else if (355000001 <= cash && cash <= 360000000) { val1 = "300000000" , val2 = "50000000", val3 = cash - 350000000, val11 = st60k, val12 = st10k, val13 = st2k}
      else if (360000001 <= cash && cash <= 370000000) { val1 = "300000000" , val2 = "50000000", val3 = cash - 350000000, val11 = st60k, val12 = st10k, val13 = st4k}
      else if (370000001 <= cash && cash <= 380000000) { val1 = "300000000" , val2 = "50000000", val3 = cash - 350000000, val11 = st60k, val12 = st10k, val13 = st6k}
      else if (380000001 <= cash && cash <= 400000000) { val1 = cash , val2 = "", val3 = "", val11 = st60k, val12 = st20k, val13 = ""}
      else if (400000001 <= cash && cash <= 400099999) { val1 = "300000000" , val2 = "100000000", val3 = cash - 400000000, val11 = st60k, val12 = st20k, val13 = st0}
      else if (400100000 <= cash && cash <= 401000000) { val1 = "300000000" , val2 = "100000000", val3 = cash - 400000000, val11 = st60k, val12 = st20k, val13 = st200}
      else if (401000001 <= cash && cash <= 402000000) { val1 = "300000000" , val2 = "100000000", val3 = cash - 400000000, val11 = st60k, val12 = st20k, val13 = st400}
      else if (402000001 <= cash && cash <= 403000000) { val1 = "300000000" , val2 = "100000000", val3 = cash - 400000000, val11 = st60k, val12 = st20k, val13 = st600}
      else if (403000001 <= cash && cash <= 405000000) { val1 = "300000000" , val2 = "100000000", val3 = cash - 400000000, val11 = st60k, val12 = st20k, val13 = st1k}
      else if (405000001 <= cash && cash <= 410000000) { val1 = "300000000" , val2 = "100000000", val3 = cash - 400000000, val11 = st60k, val12 = st20k, val13 = st2k}
      else if (410000001 <= cash && cash <= 420000000) { val1 = "300000000" , val2 = "100000000", val3 = cash - 400000000, val11 = st60k, val12 = st20k, val13 = st4k}
      else if (420000001 <= cash && cash <= 430000000) { val1 = "300000000" , val2 = "100000000", val3 = cash - 400000000, val11 = st60k, val12 = st20k, val13 = st6k}
      else if (430000001 <= cash && cash <= 450000000) { val1 = "300000000" , val2 = "100000000", val3 = cash - 400000000, val11 = st60k, val12 = st20k, val13 = st10k}
      else if (450000001 <= cash && cash <= 500000000) { val1 = cash , val2 = "", val3 = "", val11 = st100k, val12 = "", val13 = ""}
      else if (500000001 <= cash && cash <= 500099999) { val1 = "500000000" , val2 = cash - 500000000, val3 = "", val11 = st100k, val12 = st0, val13 = ""}
      else if (500100000 <= cash && cash <= 501000000) { val1 = "500000000" , val2 = cash - 500000000, val3 = "", val11 = st100k, val12 = st200, val13 = ""}
      else if (501000001 <= cash && cash <= 501099999) { val1 = "500000000" , val2 ="1000000",  val3 = cash - 501000000, val11 = st100k, val12 = st200, val13 = st0}
      else if (501100000 <= cash && cash <= 502000000) { val1 = "500000000" , val2 = cash - 500000000, val3 = "", val11 = st100k, val12 = st400, val13 = ""}
      else if (502000001 <= cash && cash <= 502099999) { val1 = "500000000" , val2 = "2000000", val3 = cash - 502000000, val11 = st100k, val12 = st400, val13 = st0}
      else if (502100000 <= cash && cash <= 503000000) { val1 = "500000000" , val2 = cash - 500000000, val3 = "", val11 = st100k, val12 = st600, val13 = ""}
      else if (503000001 <= cash && cash <= 503099999) { val1 = "500000000" , val2 ="3000000" , val3 = cash - 503000000, val11 = st100k, val12 = st600, val13 = st0}
      else if (503100000 <= cash && cash <= 504000000) { val1 = "500000000" , val2 = "3000000", val3 = cash - 503000000, val11 = st100k, val12 = st600, val13 = st200}
      else if (504000000 <= cash && cash <= 505000000) { val1 = "500000000" , val2 = cash - 500000000, val3 = "", val11 = st100k, val12 = st1k, val13 = ""}
      else if (505000001 <= cash && cash <= 505099999) { val1 = "500000000" , val2 = "5000000", val3 = cash - 505000000, val11 = st100k, val12 = st1k, val13 = st0}
      else if (505100000 <= cash && cash <= 506000000) { val1 = "500000000" , val2 = "5000000", val3 = cash - 505000000, val11 = st100k, val12 = st1k, val13 = st200}
      else if (506000000 <= cash && cash <= 507000000) { val1 = "500000000" , val2 = "5000000", val3 = cash - 505000000, val11 = st100k, val12 = st1k, val13 = st400}
      else if (507000000 <= cash && cash <= 508000000) { val1 = "500000000" , val2 = "5000000", val3 = cash - 505000000, val11 = st100k, val12 = st1k, val13 = st600}
      else if (508000001 <= cash && cash <= 510000000) { val1 = "500000000" , val2 = cash - 500000000, val3 = "", val11 = st100k, val12 = st2k, val13 = ""}
      else if (510000001 <= cash && cash <= 510099999) { val1 = "500000000" , val2 = "10000000", val3 = cash - 510000000, val11 = st100k, val12 = st2k, val13 = st0}
      else if (510100000 <= cash && cash <= 511000000) { val1 = "500000000" , val2 = "10000000", val3 = cash - 510000000, val11 = st100k, val12 = st2k, val13 = st200}
      else if (511000001 <= cash && cash <= 512000000) { val1 = "500000000" , val2 = "10000000", val3 = cash - 510000000, val11 = st100k, val12 = st2k, val13 = st400}
      else if (512000001 <= cash && cash <= 513000000) { val1 = "500000000" , val2 = "10000000", val3 = cash - 510000000, val11 = st100k, val12 = st2k, val13 = st600}
      else if (513000001 <= cash && cash <= 515000000) { val1 = "500000000" , val2 = "10000000", val3 = cash - 510000000, val11 = st100k, val12 = st2k, val13 = st1k}
      else if (515000001 <= cash && cash <= 520000000) { val1 = "500000000" , val2 = cash - 500000000, val3 = "", val11 = st100k, val12 = st4k, val13 = ""}
      else if (520000001 <= cash && cash <= 520099999) { val1 = "500000000" , val2 = "20000000", val3 = cash - 520000000, val11 = st100k, val12 = st4k, val13 = st0}
      else if (520100000 <= cash && cash <= 521000000) { val1 = "500000000" , val2 = "20000000", val3 = cash - 520000000, val11 = st100k, val12 = st4k, val13 = st200}
      else if (521000001 <= cash && cash <= 522000000) { val1 = "500000000" , val2 = "20000000", val3 = cash - 520000000, val11 = st100k, val12 = st4k, val13 = st400}
      else if (522000001 <= cash && cash <= 523000000) { val1 = "500000000" , val2 = "20000000", val3 = cash - 520000000, val11 = st100k, val12 = st4k, val13 = st600}
      else if (523000001 <= cash && cash <= 525000000) { val1 = "500000000" , val2 = "20000000", val3 = cash - 520000000, val11 = st100k, val12 = st4k, val13 = st1k}
      else if (525000001 <= cash && cash <= 530000000) { val1 = "500000000" , val2 = cash - 500000000, val3 = "", val11 = st100k, val12 = st6k, val13 = ""}
      else if (530000001 <= cash && cash <= 530099999) { val1 = "500000000" , val2 = "30000000", val3 = cash - 530000000, val11 = st100k, val12 = st6k, val13 = st0}
      else if (530100000 <= cash && cash <= 531000000) { val1 = "500000000" , val2 = "30000000", val3 = cash - 530000000, val11 = st100k, val12 = st6k, val13 = st200}
      else if (531000001 <= cash && cash <= 532000000) { val1 = "500000000" , val2 = "30000000", val3 = cash - 530000000, val11 = st100k, val12 = st6k, val13 = st400}
      else if (532000001 <= cash && cash <= 533000000) { val1 = "500000000" , val2 = "30000000", val3 = cash - 530000000, val11 = st100k, val12 = st6k, val13 = st600}
      else if (533000001 <= cash && cash <= 535000000) { val1 = "500000000" , val2 = "30000000", val3 = cash - 530000000, val11 = st100k, val12 = st6k, val13 = st1k}
      else if (535000001 <= cash && cash <= 540000000) { val1 = "500000000" , val2 = "30000000", val3 = cash - 530000000, val11 = st100k, val12 = st6k, val13 = st2k}
      else if (540000001 <= cash && cash <= 550000000) { val1 = "500000000" , val2 = cash - 500000000, val3 = "", val11 = st100k, val12 = st10k, val13 = ""}
      else if (550000001 <= cash && cash <= 550099999) { val1 = "500000000" , val2 = "50000000", val3 = cash - 550000000, val11 = st100k, val12 = st10k, val13 = st0}
      else if (550100000 <= cash && cash <= 551000000) { val1 = "500000000" , val2 = "50000000", val3 = cash - 550000000, val11 = st100k, val12 = st10k, val13 = st200}
      else if (551000001 <= cash && cash <= 552000000) { val1 = "500000000" , val2 = "50000000", val3 = cash - 550000000, val11 = st100k, val12 = st10k, val13 = st400}
      else if (552000001 <= cash && cash <= 553000000) { val1 = "500000000" , val2 = "50000000", val3 = cash - 550000000, val11 = st100k, val12 = st10k, val13 = st600}
      else if (553000001 <= cash && cash <= 555000000) { val1 = "500000000" , val2 = "50000000", val3 = cash - 550000000, val11 = st100k, val12 = st10k, val13 = st1k}
      else if (555000001 <= cash && cash <= 560000000) { val1 = "500000000" , val2 = "50000000", val3 = cash - 550000000, val11 = st100k, val12 = st10k, val13 = st2k}
      else if (560000001 <= cash && cash <= 570000000) { val1 = "500000000" , val2 = "50000000", val3 = cash - 550000000, val11 = st100k, val12 = st10k, val13 = st4k}
      else if (570000001 <= cash && cash <= 580000000) { val1 = "500000000" , val2 = "50000000", val3 = cash - 550000000, val11 = st100k, val12 = st10k, val13 = st6k}
      else if (580000001 <= cash && cash <= 600000000) { val1 = "500000000" , val2 = cash - 500000000, val3 = "", val11 = st100k, val12 = st20k, val13 = ""}
      else if (600000001 <= cash && cash <= 600099999) { val1 = "500000000" , val2 = "100000000", val3 = cash - 600000000, val11 = st100k, val12 = st20k, val13 = st0}
      else if (600100000 <= cash && cash <= 601000000) { val1 = "500000000" , val2 = "100000000", val3 = cash - 600000000, val11 = st100k, val12 = st20k, val13 = st200}
      else if (601000001 <= cash && cash <= 602000000) { val1 = "500000000" , val2 = "100000000", val3 = cash - 600000000, val11 = st100k, val12 = st20k, val13 = st400}
      else if (602000001 <= cash && cash <= 603000000) { val1 = "500000000" , val2 = "100000000", val3 = cash - 600000000, val11 = st100k, val12 = st20k, val13 = st600}
      else if (603000001 <= cash && cash <= 605000000) { val1 = "500000000" , val2 = "100000000", val3 = cash - 600000000, val11 = st100k, val12 = st20k, val13 = st1k}
      else if (605000001 <= cash && cash <= 610000000) { val1 = "500000000" , val2 = "100000000", val3 = cash - 600000000, val11 = st100k, val12 = st20k, val13 = st2k}
      else if (610000001 <= cash && cash <= 620000000) { val1 = "500000000" , val2 = "100000000", val3 = cash - 600000000, val11 = st100k, val12 = st20k, val13 = st4k}
      else if (620000001 <= cash && cash <= 630000000) { val1 = "500000000" , val2 = "100000000", val3 = cash - 600000000, val11 = st100k, val12 = st20k, val13 = st6k}
      else if (630000001 <= cash && cash <= 650000000) { val1 = "500000000" , val2 = "100000000", val3 = cash - 600000000, val11 = st100k, val12 = st20k, val13 = st10k}
      else if (650000001 <= cash && cash <= 700000000) { val1 = "500000000" , val2 = cash - 500000000, val3 = "", val11 = st100k, val12 = st40k, val13 = ""}
      else if (700000001 <= cash && cash <= 700099999) { val1 = "500000000" , val2 = "200000000", val3 = cash - 700000000, val11 = st100k, val12 = st40k, val13 = st0}
      else if (700100000 <= cash && cash <= 701000000) { val1 = "500000000" , val2 = "200000000", val3 = cash - 700000000, val11 = st100k, val12 = st40k, val13 = st200}
      else if (701000001 <= cash && cash <= 702000000) { val1 = "500000000" , val2 = "200000000", val3 = cash - 700000000, val11 = st100k, val12 = st40k, val13 = st400}
      else if (702000001 <= cash && cash <= 703000000) { val1 = "500000000" , val2 = "200000000", val3 = cash - 700000000, val11 = st100k, val12 = st40k, val13 = st600}
      else if (703000001 <= cash && cash <= 705000000) { val1 = "500000000" , val2 = "200000000", val3 = cash - 700000000, val11 = st100k, val12 = st40k, val13 = st1k}
      else if (705000001 <= cash && cash <= 710000000) { val1 = "500000000" , val2 = "200000000", val3 = cash - 700000000, val11 = st100k, val12 = st40k, val13 = st2k}
      else if (710000001 <= cash && cash <= 720000000) { val1 = "500000000" , val2 = "200000000", val3 = cash - 700000000, val11 = st100k, val12 = st40k, val13 = st4k}
      else if (710000001 <= cash && cash <= 720000000) { val1 = "500000000" , val2 = "200000000", val3 = cash - 700000000, val11 = st100k, val12 = st40k, val13 = st6k}
      else if (730000001 <= cash && cash <= 1000000000) { val1 = cash , val2 = "", val3 = "", val11 = st150k, val12 = "", val13 = ""}
      else if (1000000001 <= cash) { val1 = cash , val2 = "", val3 = "", val11 = st200k, val12 = "", val13 = ""}
      
      tegata1.innerHTML = "手形1枚目 : " + addFigure(val1);
      tegata2.innerHTML = "手形2枚目 : " + addFigure(val2);
      tegata3.innerHTML = "手形3枚目 : " + addFigure(val3);
      insi1.innerHTML = "印紙1枚目 : " + addFigure(val11);
      insi2.innerHTML = "印紙2枚目 : " + addFigure(val12);
      insi3.innerHTML = "印紙3枚目 : " + addFigure(val13);
    }
  });
});
});