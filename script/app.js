$(document).ready(function () {

    var sw = $(window).innerWidth();
    console.log(sw);
    var swd = sw/10;

    let maxw,minw;

    if(sw > 720)
    {
        maxw = 80;
        minw = 30;
    }
    else
    {
        maxw = 50
        minw = 10
    }

    for(let i=1;i<=10;i++)
    {

        wh = Math.random()*(maxw-minw)+minw;

        $('.head-wrap').append('<div class="a-square as'+i+'"></div>');
        $('.as'+i+'').css({
            "left" : swd*i,
            "width" : wh+"px",
            "height" : wh+"px",
            "animation" : "animate 10s "+Math.random()*10+"s linear infinite"
        });
    }
});