$(window).on('mousemove', function (e) {
    $("#targett").css({
        'top': e.pageY - 25,
        'left': e.pageX - 25,
        'position': 'absolute'
    });
});
setInterval(gamenameTranssition,400);
var g=0;
var name="Gun Shoot.";
function gamenameTranssition() {
    $("#gameName").text(name.substr(0,g));
    g++;
    if (g==name.length){
        g=0;
    };
}
// =================loading div===================
var col='red';
var colour=[col,'0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px'];
var interval_1;
var interval_2;
interval_1 = setInterval(change,80);
function change() {
    var i=0;
    var cl=colour.pop();
    colour.unshift(cl);

    $("#child_1").css({"background":colour[i],});
    $("#child_2").css({"background":colour[i+1],});
    $("#child_3").css({"background":colour[i+2],});
    $("#child_4").css({"background":colour[i+3],});
    $("#child_5").css({"background":colour[i+4],});
    $("#child_6").css({"background":colour[i+5],});
    $("#child_7").css({"background":colour[i+6],});
    $("#child_8").css({"background":colour[i+7],});
    $("#child_9").css({"background":colour[i+8],});
    $("#child_10").css({"background":colour[i+9],});
    $("#child_11").css({"background":colour[i+10],});
    $("#child_12").css({"background":colour[i+11],});
    $("#child_13").css({"background":colour[i+12],});
    $("#child_14").css({"background":colour[i+13],});

    if(colour[13]==col){
        clearInterval(interval_1);
        interval_2=setInterval(back,80);
    }
}
function back() {
    var t=0;
    var c=colour.shift();
    colour.push(c);

    $("#child_1").css({"background":colour[t],});
    $("#child_2").css({"background":colour[t+1],});
    $("#child_3").css({"background":colour[t+2],});
    $("#child_4").css({"background":colour[t+3],});
    $("#child_5").css({"background":colour[t+4],});
    $("#child_6").css({"background":colour[t+5],});
    $("#child_7").css({"background":colour[t+6],});
    $("#child_8").css({"background":colour[t+7],});
    $("#child_9").css({"background":colour[t+8],});
    $("#child_10").css({"background":colour[t+9],});
    $("#child_11").css({"background":colour[t+10],});
    $("#child_12").css({"background":colour[t+11],});
    $("#child_13").css({"background":colour[t+12],});
    $("#child_14").css({"background":colour[t+13],});

    if(colour[0]==col){
        clearInterval(interval_2);
        interval_1=setInterval(change,80);
    }
}
setInterval(loadingText,300);
// ================================
var a=0;
var word="Loading game...";
function loadingText() {
    $("#txtloading").text(word.substr(0,a));
    a++;
    if (a==word.length){
        a=0;
    }
}
// ========================================

$("#btnstart").click(function () {
    $(".child").css({
        'display':'block'
    });
    $("#txtloading").css({
        'display':'block'
    });
    StartGenarateTime();
    // lode();
    gg.open();


});

var gg= document.querySelector('#sec');

function lode() {
    if (button.className=='visible'){
        button.className='';
    } else{
        button.className='#sec';
    }
}

// ==============Timer==================
function StartGenarateTime() {

    var
        milliseconds=0,seconds = 0, minutes = 0, hours = 0,
        t;

    function add() {
        milliseconds++;
        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        if (seconds==8){
            $("#shotGun")[0].play();
            milliseconds=0;
            minutes=0;
            seconds=0;
            hours=0;
            loadgame();
            // $("#hartSound")[0].pause();

        }
        if (milliseconds==1){
            $("#hartSound")[0].play();
        }

        // h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds)+ ":" + (milliseconds > 9 ? milliseconds : "0" + milliseconds);

        timer();
    }

    function timer() {
        t = setTimeout(add, 10);
    }

    timer();
    // start.onclick = timer;

};



// =======================================================
function loadgame() {
    $(".mainView").css({"display":"none"});
    $(".mainsection").css({"display":"block"});
    fuckyou();
    t.stop();
}

