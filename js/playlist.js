$(document).ready(function() {
    var media = document.querySelector('.player_fixed audio, video');

    $(".podcast_play").on("click", function (event) {        
        event.preventDefault();        
        $(".telegram_fixed, .buttonUp").hide();
        $(".podcast_play").removeClass("last");
        $(".player_title").text($(this).data("title"));
        $(".player_desc").text($(this).data("cat"));
        console.log($(this).data("img"));
        $(".player_fixed_img").attr("src", $(this).data("img"));
        if($(this).hasClass("active"))
        {
            $(this).removeClass("active");
            media.pause();            
        }
        else
        {
            $(".podcast_play").removeClass("active");
            $(this).addClass("active");
            console.log(media.src);
            console.log($(this).attr("href"));
            if(media.src!=$(this).attr("href"))
            {
                media.src = $(this).attr("href"); 
                media.play();                              
            }
            else
            {                 
                media.play();    
            }            
            $(".player_fixed").show();
        }
    });


    media.addEventListener('pause', function () {

        $(".podcast_play.active").removeClass("active").addClass("last");
    });

    media.addEventListener('play', function () {
        $(".podcast_play.last").addClass("active");
    });

    /*media.addEventListener('ended', function () {
        var currentLink = links.filter(function (link) {
            return link.classList.contains('active');
        })[0];

        // current index
        var currentIndex = links.indexOf(currentLink);

        // next index
        var nextIndex = 1 + currentIndex;

        nextIndex = nextIndex === links.length ? 0 : nextIndex;

        // activate the next link
        links[nextIndex].click();

        media.play();
    });*/

});