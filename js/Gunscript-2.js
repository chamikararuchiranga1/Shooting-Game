var bul=20;
var bullet=bul;
var s=0;
var countScore=s;
var selectedzombi;
var selectBird;

function fuckyou_2 () {
    bullet=bul;
    countScore=s;
    // console.log("load");

    $("#lblScore").text("Score -: "+countScore);
    $("#bulletCount").text(bullet);

    timetGenarate();

    $("#zombiBos").css({
        "top":genarateRandomHeight(),
        'left':genarateRandomWith()
    });
    $("#zombi_1").css({
        "top":genarateRandomHeight(),
        'left':genarateRandomWith()
    });
    $("#zombi_2").css({
        "top":genarateRandomHeight(),
        'left':genarateRandomWith()
    });
    $("#zombi_3").css({
        "top":genarateRandomHeight(),
        'left':genarateRandomWith()
    });
}


$(".shooting2").on("mousemove",function (ee) {

    $("#target2").css({
        'top': ee.pageY - 25,
        'left': ee.pageX - 25,
        'position': 'absolute'
    });
    $("#gun2").css({
        'left': ee.pageX - 80
    });

    $("#bullet_1_2").css({
        'left': ee.pageX + 75
    });
    $("#bullet_2_2").css({
        'top': ee.pageY ,
        'left': ee.pageX ,
        'position': 'absolute'
    });

});

// var one=100;
//
// $('#plate2').css();
//
// $(window).keypress(function (p) {
//    if (p.key === 'a'){
//        console.log('fuck');
//        $('#plate2').css('left',$('#plate2').css('left')+100);
//    }
// });

$(".shooting2").on("click", function () {

    // if (bullet!=0){
    //     bullet-=1;
    //     $("#lblScore").text("Score -: "+countScore);
    //     $("#bulletCount").text(bullet);
        $("#gunsound")[0].play();

        $("#bullet_1_2").css({
            'display':'block'
        });

        $("#bullet_2_2").css({
            'display':'block'
        });
        setTimeout(bulletOut(),100);
    // }else {
       // bulletOver();
    // }

});
function bulletOut() {
    $("#bullet_1_2").fadeOut(100);
    $("#bullet_2_2").fadeOut(100);
}

$(".bird2").click(function (lo) {
    // if (bullet!=0){
    //     countScore +=3;
        selectBird=this;
        // $("#lblScore").text("Score -: "+countScore);
        // $("#bulletCount").text(bullet);
        $('.fire2').css({
            'top':lo.pageY-40,
            'left':lo.pageX-30,
            'display':'block'
        });
        $(this).css({'display':'none'});

        $("#birdSound")[0].play();

        setTimeout(fireOut2(),1000);
    // }else{
        //bulletOver();
    // }

});
function fireOut2() {
    $('.fire2').fadeOut(500);
    $(selectBird).css({'display':'block'});
}
