// 文字サイズ変更
$(function(){
 
  // 標準ボタンクリック
  $('#font-m').click(function(){
    $(".caution").css('font-size', '0.7rem');
  });
  
  // 拡大ボタンクリック
  $('#font-l').click(function(){
    $(".caution").css('font-size', '1rem');
  });
});
// 文字サイズ変更

$(function(){
  // クリアボタン
    $("#clear1").on("click", function() {
      document.form1.reset();
      tegata1.innerHTML = "";
      tegata2.innerHTML = "";
      tegata3.innerHTML = "";
      insi1.innerHTML = "";
      insi2.innerHTML = "";
      insi3.innerHTML = "";

    })
    $("#clear2").on("click", function() {
      document.form2.reset();
      c2risoku.innerHTML = "";
      c2syotoku.innerHTML = "";
      c2hukkou.innerHTML = "";
      c2totalTax.innerHTML = "";
    })
    $("#clear3").on("click", function() {
      document.form3.reset();
      haitou1.innerHTML = "";
      syotoku1.innerHTML = "";
      hukkou1.innerHTML = "";
      totalTax1.innerHTML = "";
    })
    $("#clear4").on("click", function() {
      document.form4.reset();
      haitou2.innerHTML = "";
      syotoku2.innerHTML = "";
      hukkou2.innerHTML = "";
      totalTax2.innerHTML = "";
    })
    $("#clear5").on("click", function() {
      document.form5.reset();
    })
    $("#clear6").on("click", function() {
      document.form6.reset();
    })
    $("#clear7").on("click", function() {
      document.form7.reset();
    })
    $("#clear8").on("click", function() {
      document.form8.reset();
    })
    $("#clear9").on("click", function() {
      document.form9.reset();
    })
  // クリアボタン終わり

  // 画面スムーススクロール
    $('a[href^="#"]').click(function() {
      var speed = 400; 
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 110;
      $('body,html').animate({
        scrollTop: position
      }, speed, 'swing');
      return false;
    });
    // 画面スムーススクロール終わり
});