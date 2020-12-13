$(document).ready(function(){
    $('.header').height($(window).height());
    })

$(".navbar a").click(function(){
    $("body, html").animate({
    scrollTop:$("#" + $(this).data('value')).offset().top-100},1000)
 })

//  $('.smooth-goto').on('click', function() {  
//     $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
//     return false;
// });