// 500/280
var bul=20;
var bullet=bul;
var s=0;
var countScore=s;
var selectedzombi;
var selectBird;


function genarateRandomHeight(){
    return Math.floor((Math.random()*220)+280);
}
function genarateRandomWith(){
    return Math.floor(Math.random()*1200);
}

function fuckyou () {
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

$(window).on("mousemove",function (e) {

    $("#target").css({
        'top': e.pageY - 25,
        'left': e.pageX - 25,
        'position': 'absolute'
    });
    $("#gun").css({
        'left': e.pageX - 80
    });

    $("#bullet_1").css({
        'left': e.pageX + 75
    });
    $("#bullet_2").css({
        'top': e.pageY ,
        'left': e.pageX ,
        'position': 'absolute'
    });

});

$(".mainsection").on("click", function () {

    if (bullet!=0){
        //countScore -=1;
        bullet-=1;
        $("#lblScore").text("Score -: "+countScore);
        $("#bulletCount").text(bullet);
        $("#gunsound")[0].play();

        $("#bullet_1").css({
            'display':'block'
        });

        $("#bullet_2").css({
            'display':'block'
        });
        setTimeout(bulletOut(),100);
    }else {
        bulletOver();
    }

});
function bulletOut() {
    $("#bullet_1").fadeOut(100);
    $("#bullet_2").fadeOut(100);
}


$(".bird").click(function (a) {
    if (bullet!=0){
        countScore +=3;
        // bullet -=1;
        selectBird=this;
        $("#lblScore").text("Score -: "+countScore);
        $("#bulletCount").text(bullet);
        $('.fire').css({
            'top':a.pageY-40,
            'left':a.pageX-30,
            'display':'block'
        });
        $(this).css({'display':'none'});

        $("#birdSound")[0].play();

        setTimeout(fireOut(),1000);
    }else{
        bulletOver();
    }

});
function fireOut() {
    $('.fire').fadeOut(500);
    $(selectBird).css({'display':'block'});
}

$(".zombi").click(function (g) {
    if (bullet!=0){
        // bullet -=1;
        countScore+=2;
        selectedzombi=this;
        $("#lblScore").text("Score -: "+countScore);
        $("#bulletCount").text(bullet);
        $('.fire').css({
            'top':g.pageY-40,
            'left':g.pageX-30,
            'display':'block'
        });
        $(this).css({'display':'none'});

        setTimeout(fireOut2(),1000);
        setTimeout(viewZombi(),1000);

    }else {
        bulletOver();
    }

});
function fireOut2() {
    $('.fire').fadeOut(1000);
}
function viewZombi() {
    $(selectedzombi).css({
        'left':genarateRandomWith(),
        'top':genarateRandomHeight()
    });
    $(selectedzombi).fadeIn(2000);
}

function bulletOver() {

    $(".mainsection").css({'display':'none'});
    $(".intervalSection").css({'display':'block'});
    loadeIntervalDiv();
}






