$(document).ready(function(){

    
    //this section is about the slider
    SRCs = ['images/137875758733_duck-hunt.png','images/duck-hun22t.png','images/nam.png'];
    index = 0;
    $('#bigImg').attr('src', SRCs[index])

    window.setInterval(getNext, 3000);

    $('#next').click(getNext)
    function getNext(){
        $('#bigImg').fadeOut(1);
        $('#bigImg').fadeIn(1000);
        if(index == SRCs.length - 1){
            $('#bigImg').attr('src', SRCs[++index]);
            index = -1;
        }
        $('#bigImg').attr('src', SRCs[++index]);
    }   

    $('#prev').click(getPrev)
    function getPrev(){
        $('#bigImg').fadeOut(1);
        $('#bigImg').fadeIn(1000);
        if(index == 0){
            $('#bigImg').attr('src', SRCs[--index]);
            index = 4;
        }
        $('#bigImg').attr('src', SRCs[--index]);
    }  

    
    $('li:eq(0)').click(function(){
        location.assign('home.html');
    })
    $('li:eq(1)').click(function () {
        location.assign('play.html');
     
    })
    $('li:eq(2)').click(function () {
        location.assign('how_to_play.html');
        
    })
    $('li:eq(3)').click(function(){
        location.assign('about_us.html');
    })
    $('li:eq(4)').click(function(){
        location.assign('home.html');
    })

})