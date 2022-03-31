/*
  Developer: Resul Gunaydin
  _________________________
  bionluk -> https://bionluk.com/resulgunaydin
  instagram -> https://www.instagram.com/resulgnaydin/
*/
$(function(){

  console.log( $(window).width() );

  $(".container").width($(window).width() + "px");
  $(".footerContainer").width($(window).width() + "px");
  $(".postLeftRightContainer").width($(window).width() + "px");
  $(".hideMenu").height($(window).height());

  $("#headerHideMenuIcon").click(function(){
    $(".hideMenu").stop().slideDown();
  });

  $("#headerCloseMenuIcon").click(function(){
    $(".hideMenu").stop().slideUp();
  });

});

var mql = window.matchMedia("screen and (min-width: 812px)")

if (mql.matches){ // medya sorguları eşleşiyorsa true döner

}
else{

  /* postDetail*/
  $(".postDetailBanner img").width($(window).width() - 20 + "px");
  $(".postDetailTitle").width($(window).width() - 20 + "px");
  $(".reklam8 img").width($(window).width() - 20 + "px");
  $(".postDetailText").width($(window).width() - 20 + "px");
  $(".postDetailText").width($(window).width() - 20 + "px");

  /* INDEX */
  $(".recentPost").width($(window).width() - 20 + "px");
  $(".recentPostAlt").width($(window).width() - 20 + "px");
  $(".recentPostAlt2").width($(window).width() - 20 + "px");
  $(".recentPostAlt3").width($(window).width() - 20 + "px");
  $(".reklam1 img").width($(window).width() - 20 + "px");

  /* MAINPOST */
  $(".mainPost").width($(window).width() - 20 + "px");
  $(".reklam6Hide img").width($(window).width() - 20 + "px");
  $(".reklam6Hide").width($(window).width() - 20 + "px");
}
