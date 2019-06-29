$(document).ready(function () {

    Score = 0;
    audio = new Audio('sounds/intro.mp3');
    duckSound = new Audio('sounds/quack.mp3');
    winSound = new Audio('sounds/win.mp3');
    fail = new Audio('sounds/you_failed.mp3');

 
    $('li:eq(0)').click(function () {
        location.assign('home.html');
    })
    $('li:eq(1)').click(function () {
                location.assign('play.html');

       
    })
    $('li:eq(2)').click(function () {
         location.assign('how_to_play.html');
    })
    $('li:eq(3)').click(function () {
               location.assign('about_us.html');

    })
    $('li:eq(4)').click(function () {
         location.assign('home.html');
    })

    $("#start_btn").click(function () {
        audio.play();
        window.setTimeout(function () {
            movingInterval = window.setInterval(movingShapes, 3000);
        }, 3000);
        $(".start").css('display', 'none');
        $('.div1').css('visibility', 'visible');
        $('.body_div').css('visibility', 'visible');
        $('.nav_bar').animate({
            top: '-60px'
        }, 1000);
        $('.div1').animate({
            top: '-20px'
        }, 1000);
        $('.nav_bar').hover(
            function () {
                $(this).animate({
                    top: '0px'
                }, 1000);
            },
            function () {
                $(this).animate({
                    top: '-60px'
                }, 1000);
            }
        );
        $('.body_div').css({ 'display': 'block', 'cursor': 'move' });

        //this section is for the timer part
        var timeInt = setInterval(function () {
            startTimer();
            if (distance < 0) {
                if (Score < 1000) {
                    clearInterval(timeInt);
                    clearInterval(movingInterval);
                    document.getElementById("timer").innerHTML = "EXPIRED";
                    gm_over();
                }
                else if (Score > 1000) {
                    clearInterval(timeInt);
                    clearInterval(movingInterval);
                    document.getElementById("timer").innerHTML = "0.00";
                    winSound.play();
                    youWin();
                  
                    Score = 0;
                    window.setTimeout(level2, 3000);
                }
            }
        }, 1000);
    })
})

function gm_over() {
    var result = document.createElement('div');
    result.setAttribute("id", "over");
    result.innerHTML="<img src='images/sad.png' height='50px' width='50px'/> Game Over "
    fail.play()
    document.getElementById('sss').appendChild(result);
    $("#over").css({ 'width': '350px', 'position': 'relative', 'left': '500px', 'top': '100px', 'fontSize': '50px','color':'#c9df8a','fontFamily': "'Boogaloo', cursive" });
}
function youWin() {
    var result = document.createElement('div');
    result.setAttribute("id", "win1");
    result.innerHTML="<img src='images/acceptance.png' height='50px' width='50px'/> you win the level "
    document.getElementById('sss').appendChild(result);
    $("#win1").css({ 'width': '350px', 'position': 'relative', 'left': '500px', 'top': '100px', 'fontSize': '50px', 'fontWeight': 'bold','color':'#c9df8a','fontFamily': "'Boogaloo', cursive"  });
    $("#win1").fadeOut(4000);
}
function level2() {
    Score = 0;
    window.setTimeout(function () {
        movingInterval = window.setInterval(movingShapes, 1500);
    }, 9000);
    $("#score").text(Score);
    //Score += 100;
    $("#over").fadeOut(3000);

    countDownDate = (new Date().getTime()) + .67 * 60000;
    distance = 0;
    var timeInt = setInterval(function () {
        startTimer();
        if (distance < 0) {
            if (Score < 3000) {
                clearInterval(timeInt);
                clearInterval(movingInterval);
                document.getElementById("timer").innerHTML = "EXPIRED";
                gm_over();
                alert("lose");
            } else if (Score > 3000) {
                clearInterval(timeInt);
                clearInterval(movingInterval);
                document.getElementById("timer").innerHTML = "EXPIRED";
                winSound.play();
                var result = document.createElement('div');
                result.setAttribute("id", "win2");
                result.innerHTML = "<img src='images/acceptance.png' height='50px' width='50px'/> you win the level "
                document.getElementById('win2').appendChild(result);
                $("#win2").css({ 'width': '350px', 'position': 'relative', 'left': '500px', 'top': '100px', 'fontSize': '50px', 'fontWeight': 'bold', 'color': '#c9df8a', 'fontFamily': "'Boogaloo', cursive" });
                $("#win2").fadeOut(8000);







                //youWin();
                alert("win")
            }
        }
    }, 1000);
}
//count down timer
countDownDate = (new Date().getTime()) + .62 * 60000;
distance = 0;
function startTimer() {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
}


//********************************************another code for countdown timer*******************************
//document.getElementById('timer').innerHTML = 01 + ":" + 00;
//startTimer();

//function startTimer() {
//    var presentTime = document.getElementById('timer').innerHTML;
//    var timeArray = presentTime.split(/[:]+/);
//    var m = timeArray[0];
//    var s = checkSecond((timeArray[1] - 1));
//    if (m == 0 && s == 00) {
//        document.getElementById("div").innerHTML = "TimeOut"
//    }
//    if (s == 59) {
//        m = m - 1
//    }
//    document.getElementById('timer').innerHTML =
//      m + ":" + s;
//    setTimeout(startTimer, 1000);
//}

//function checkSecond(sec) {
//    //if (sec < 10 && sec >= 0) { sec = "0" + sec };
//    if (sec < 0) {
//        sec = "59"
//    };
//    return sec;
//}



function movingShapes() {
    var randomX = Math.floor(Math.random() * 1000);

    var randomX1 = Math.floor(Math.random() * 1000);

    shapeOne = createShape();
    shapeOne.id = 'shape1';
    shapeOne.style.left = randomX + 'px';
    
    shapeTwo = createShape();
    shapeTwo.id = 'shape2';
    shapeTwo.style.left = randomX1 + 'px';

    var newX = randomX + 250;
    var newX1 = randomX1 + 250;

    $('#shape1').animate({
        left: newX + 'px',
        top: '300px'
    }, 4000);
    $('#shape1').animate({
        left: newX - 250 + 'px',
        top: '-100px'
    }, 4000);
    $('#shape2').animate({
        left: newX1 + 'px',
        top: '300px'
    }, 4000);
    $('#shape2').animate({
        left: newX1 + 250 + 'px',
        top: '-100px'
    }, 4000);
    $('#shape1').hover(
        function () {
            $(this).css({ 'cursor': 'move' });
        }
    );
    $('#shape2').hover(
        function () {
            $(this).css({ 'cursor': 'move' });
        }
    );

    var gunShotAudio = new Audio('sounds/gun_shot.mp3');
    $('#shape2').click(function () {
        $(this).animate().stop();
        gunShotAudio.play();
        $(this).attr('src', 'images/duck_shot.png')
        $(this).fadeOut(1000);
        Score += 100;
        $("#score").text(Score);
    })
    $('#shape1').click(function () {
        $(this).animate().stop();
        gunShotAudio.play();
        $(this).attr('src', 'images/duck_shot.png')
        $(this).fadeOut(1000);
        Score += 100;
        $("#score").text(Score);
    })
}

function createShape() {

    var shape1 = document.createElement('img');
    shape1.style.width = '100px';
    shape1.style.height = '100px';
    shape1.src = 'images/duck_red.gif';
    shape1.className = 'shape';
    shape1.style.position = 'absolute';
    shape1.style.overflow = 'hidden';
    shape1.style.top = '600px';
    shape1.style.zIndex = '4';
    $('body').prepend(shape1);
    duckSound.play();
    return shape1;
}