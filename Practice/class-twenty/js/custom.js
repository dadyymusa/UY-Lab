$(document).ready(function(){
    // slide 
    $(".box1").click(function(){
        $(".box2").slideToggle("slow");
    });

    $(".box3").click(function(){
        $(".box3").animate({
            height: '+=50px',
            width: '+=50px'
        });
    });
});