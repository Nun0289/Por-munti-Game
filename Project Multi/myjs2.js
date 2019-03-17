var code = "";
var ans = "";
var count = 0;
var level = 1;
var num = ["0","1","2","3","4","5","6","7","8","9"];
var play_sound = new Audio();
    play_sound.src = "play_btn_sound.mp3";
var clear_sound = new Audio();
    clear_sound.src = "clear_btn_sound.mp3";
var start_sound = new Audio();
    start_sound.src = "start_btn_sound.mp3";
var button_sound = new Audio();
    button_sound.src = "btn_sound.mp3";
var fail_sound = new Audio();
    fail_sound.src = "fail_sound.mp3";
var pass_sound = new Audio();
    pass_sound.src ="pass_sound.mp3";

function front(){
    document.querySelector("#front").style.display = "none";
}


function start(){
    play_sound.play();
    document.querySelector("#play").style.display = "none";
    for (n = 10; n > 0; n--) {
        rdbtn = Math.floor(Math.random() * n);
        btnselect = num[rdbtn];
        document.querySelector("#button"+(n-1)).style.backgroundImage = "symbol/"+btnselect+".png";
        num.splice(rdbtn,1);
    }
    stage(level);
}

function stage(lev){
    time = 20;
    document.querySelector("#time").innerText = time;
    document.querySelector("#level").innerText = level;
    code = random(4+lev);
}

function random(x){
    var send = ""
    for (var i = 0; i < x; i++) {
        select = Math.floor(Math.random() * 10);
        var name = document.querySelector("#prop"+i);
        name.style.backgroundImage = "url('symbol/"+select+".png')";
        send += select;
    }
    document.querySelector("#warn").innerText = "Remember the Code";
    document.querySelector("#warn").style.color = "white";
    setTimeout(wait_to_enter, 5000+(level*1000));
    return send;
}

function wait_to_enter(){
    document.querySelector("#warn").innerText = "";
    for (var i = 0; i < 10; i++) {
        document.querySelector("#prop"+i).style.backgroundImage = "";
    }
    document.querySelector("#enter").style.display = "inline";
    document.querySelector("#erase").style.display = "inline";
    document.querySelector("#button1").setAttribute("onclick", "button1()");
    document.querySelector("#button2").setAttribute("onclick", "button2()");
    document.querySelector("#button3").setAttribute("onclick", "button3()");
    document.querySelector("#button4").setAttribute("onclick", "button4()");
    document.querySelector("#button5").setAttribute("onclick", "button5()");
    document.querySelector("#button6").setAttribute("onclick", "button6()");
    document.querySelector("#button7").setAttribute("onclick", "button7()");
    document.querySelector("#button8").setAttribute("onclick", "button8()");
    document.querySelector("#button9").setAttribute("onclick", "button9()");
    document.querySelector("#button0").setAttribute("onclick", "button0()");
    countdown();
}

function button1(){
    document.querySelector("#choose"+count).style.backgroundImage = "url('symbol/1.png')";
    ans += "1";
    count += 1;
    button_sound.play();
    return 0;
}

function button2(){
    document.querySelector("#choose"+count).style.backgroundImage = "url('symbol/2.png')";
    ans += "2";
    count += 1;
    button_sound.play();
    return 0;
}

function button3(){
    document.querySelector("#choose"+count).style.backgroundImage = "url('symbol/3.png')";
    ans += "3";
    count += 1;
    button_sound.play();
    return 0;
}

function button4(){
    document.querySelector("#choose"+count).style.backgroundImage = "url('symbol/4.png')";
    ans += "4";
    count += 1;
    button_sound.play();
    return 0;
}

function button5(){
    document.querySelector("#choose"+count).style.backgroundImage = "url('symbol/5.png')";
    ans += "5";
    count += 1;
    button_sound.play();
    return 0;
}

function button6(){
    document.querySelector("#choose"+count).style.backgroundImage = "url('symbol/6.png')";
    ans += "6";
    count += 1;
    button_sound.play();
    return 0;
}

function button7(){
    document.querySelector("#choose"+count).style.backgroundImage = "url('symbol/7.png')";
    ans += "7";
    count += 1;
    button_sound.play();
    return 0;
}

function button8(){
    document.querySelector("#choose"+count).style.backgroundImage = "url('symbol/8.png')";
    ans += "8";
    count += 1;
    button_sound.play();
    return 0;
}

function button9(){
    document.querySelector("#choose"+count).style.backgroundImage = "url('symbol/9.png')";
    ans += "9";
    count += 1;
    button_sound.play();
    return 0;
}

function button0(){
    document.querySelector("#choose"+count).style.backgroundImage = "url('symbol/0.png')";
    ans += "0";
    count += 1;
    button_sound.play();
    return 0;
}


function erase(){
    count = 0;
    ans = "";
    for (k= 0; k < 10; k++) {
        document.querySelector("#choose"+k).style.backgroundImage = "";
    }
    clear_sound.play();
}

function enter(){
    if (ans == code) {
        level += 1;
        clearInterval(cd);
        count = 0;
        ans = "";
        for (i = 0; i < 10; i++) {
            document.querySelector("#choose"+i).style.backgroundImage = "";
        }
        pass_sound.play();
        document.querySelector("#ETD").innerHTML = "<b>PASS<b>";
        document.querySelector("#ETD").style.color = "green";
        document.querySelector("#enter").style.display = "none";
        document.querySelector("#erase").style.display = "none";
        setTimeout(wait_to_next_stage,3000);
    }
    else
    {
        fail_sound.play();
        document.querySelector("#ETD").innerHTML = "<b>Fail</b>";
        document.querySelector("#ETD").style.color = "red";
        setTimeout(failReset,1000);
    }
}

function countdown(){
    cd = setInterval(
            function(){
                if (time > 0) {
                    time--;
                    document.querySelector("#time").innerText = time;
                }
                else{
                    clearInterval(cd);
                    lose();
                }
            }
            ,1000)
}

function end(){
    document.querySelector(".ans").innerHTML = "<b>Fail</b>";
    document.querySelector(".ans").style.fontSize = "10em";
    document.querySelector(".boxinans").style.display = "none";
}

function wait_to_next_stage(){
    document.querySelector("#ETD").innerHTML = "<b>Enter the Code</b>"
    document.querySelector("#ETD").style.color = "white";
    document.querySelector("#button1").setAttribute("onclick", "");
    document.querySelector("#button2").setAttribute("onclick", "");
    document.querySelector("#button3").setAttribute("onclick", "");
    document.querySelector("#button4").setAttribute("onclick", "");
    document.querySelector("#button5").setAttribute("onclick", "");
    document.querySelector("#button6").setAttribute("onclick", "");
    document.querySelector("#button7").setAttribute("onclick", "");
    document.querySelector("#button8").setAttribute("onclick", "");
    document.querySelector("#button9").setAttribute("onclick", "");
    document.querySelector("#button0").setAttribute("onclick", "");
    document.querySelector("#warn").innerText = "";
    if (level == 2) {
        win();
    }
    else{
        stage(level);
    }
}

function failReset(){
    document.querySelector("#ETD").innerHTML = "<b>Enter the Code</b>"
    document.querySelector("#ETD").style.color = "white";
}

function win(){
    document.querySelector(".board").style.display = "none";
    document.querySelector("#button").style.display = "none";
    document.querySelector("#winn").style.display = "inline";
}

function lose(){
    document.querySelector(".board").style.display = "none";
    document.querySelector("#button").style.display = "none";
    document.querySelector("#losee").style.display = "inline";
}

function restart(){
    start_sound.play();
    document.body.innerHTML = '<script type="text/javascript" src="myjs.js"></script>\
    <audio autoplay><source src="game_music.mp3" type="audio/mp3" loop="-1"/></audio>\
    <div class="board">\
        <div pos="left">Level : <span id="level">1</span></div>\
        <div pos="mid" id="warn"></div>\
        <div pos="mid">\
            <button onclick="start()" id="play">Play</button>\
            <button onclick="enter()" id="enter">Enter</button>\
            <button onclick="erase()" id="erase">Clear</button>\
        </div>\
        <div pos="right">Time Left : <span id="time">20</span></div>\
    </div>\
    <center>\
    <div id="button">\
        <div class="ans">\
            <div class="boxinans">\
                <div class="textinans"><b>Code</b></div>\
                <div class="box" id="prop0"></div>\
                <div class="box" id="prop1"></div>\
                <div class="box" id="prop2"></div>\
                <div class="box" id="prop3"></div>\
                <div class="box" id="prop4"></div>\
                <div class="box" id="prop5"></div>\
                <div class="box" id="prop6"></div>\
                <div class="box" id="prop7"></div>\
                <div class="box" id="prop8"></div>\
                <div class="box" id="prop9"></div>\
            </div>\
            <div class="boxinans">\
                <div class="textinans" id="ETD"><b>Enter the Code</b></div>\
                <div class="box" id="choose0"></div>\
                <div class="box" id="choose1"></div>\
                <div class="box" id="choose2"></div>\
                <div class="box" id="choose3"></div>\
                <div class="box" id="choose4"></div>\
                <div class="box" id="choose5"></div>\
                <div class="box" id="choose6"></div>\
                <div class="box" id="choose7"></div>\
                <div class="box" id="choose8"></div>\
                <div class="box" id="choose9"></div>\
            </div>\
        </div>\
        <div id="buttontop">\
            <button class="select" id="button1" ></button>\
            <button class="select" id="button2" ></button>\
            <button class="select" id="button3" ></button>\
            <button class="select" id="button4" ></button>\
            <button class="select" id="button5" ></button>\
        </div>\
        <div id="buttonbot">\
            <button class="select" id="button6" ></button>\
            <button class="select" id="button7" ></button>\
            <button class="select" id="button8" ></button>\
            <button class="select" id="button9" ></button>\
            <button class="select" id="button0" ></button>\
        </div>\
    </div>\
    </center>'
    level = 1;
    count = 0;
    ans = "";
    code = "";
}