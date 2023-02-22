var pattern_recorder = [];
var level_number = 1;
var count = 1;
var checking;
var permission=false;
var user_pattern=[];

$(document).keydown(function () {
    if (count === 1) {
        $("h1").text("LEVEL 1");
        computer();
        count++;


    }

})

function computer() {
    var any_number = Math.floor((4 * Math.random())) + 1;
    pattern_recorder.push(any_number+"");
    $("." + any_number).fadeOut().fadeIn();
    user_pattern=[];

    

}


$("button").on("click",
    function () {
      
        var topush=$(this).attr("class");
        user_pattern.push(topush+"");
        
        for (var i = 0; i < user_pattern.length; i++) 
        {
            if (pattern_recorder[i] !== user_pattern[i])
             {
                checking = false;
                break;
            }
        }
        if (checking === false) {
            $("h1").text("GAME OVER! PLEASE REFRESH TO RESTART");

        }
        else if (pattern_recorder.length === user_pattern.length) {

            setTimeout(function () {
                level_number++;
                $("h1").text("LEVEL" + level_number);
                computer();
            }, 2000);

        }
        else {

        }
    }
);



































































































































