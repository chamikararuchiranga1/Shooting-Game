function loadeIntervalDiv(){
    var overTime=$("#timer").val();
    $("#lbltime").attr(overTime);

    $("#lblbullet").text("Bullet : "+(bul-bullet));

    $("#lblScorFinish").text("Score : "+countScore);

    if (countScore>30){
        $("#lblWin").text("Win");
        $(".btnnext").css({'display':'block'});
    } else {
        $("#lblWin").text("Fail");
        $(".btnretry").css({'display':'block'});
    }

    if (bullet==0){
        $("#time_or_bullet").text("Bullet Over");
    } else {
        $("#time_or_bullet").text("Time Over");
    }
}

$(".btnnext").click(function () {
    $("#shotGun")[0].play();
   alert("Loading..................");
});

$(".btnretry").click(function () {
    $("#shotGun")[0].play();
    $(".intervalSection").css({'display':'none'});
    $(".mainsection").css({'display':'block'});
    fuckyou();
});


