$(document).ready(function() {

    // $('body').on('click', '.steps_stage .step_stage:not(.active) .icon_change', function (e) {
    //     var target =  $(e.target).closest(".step_stage");
    //     if(target.closest(".step_stage_img").length !== 0 || target.closest(".step_stage_video").length !== 0)
    //     {
    //         return;
    //     }
    //     var date = new Date();
    //     // $(this).addClass("active").find(".icon_change use").attr("xlink:href","/images/sprite.svg#training_ok");
    //     $(this).closest(".step_stage").addClass("active").find(".icon_change use").attr("xlink:href","/images/sprite.svg#training_ok");
    //     let min = date.getMinutes();
    //     if(min<10)
    //     {
    //         min = "0"+min;
    //     }
    //     $(this).closest(".step_stage").find(".step_stage_time").text("Выполнено в " +  date.getHours() + ":"+  min);
    //
    //     if($(".steps_stage .step_stage:not(.active)").length==0)
    //     {
    //         let id = $(this).closest(".steps_data_js").data("id");
    //         $(".inner_steps .step[data-id='"+id+"']").removeClass("error").addClass("complete").find("use").attr("xlink:href","/images/sprite.svg#step_complete");
    //
    //     }
    // });
    //
    //
    // $('body').on('click', '.steps_stage .step_stage.active .icon_change', function (e) {
    //     var target =  $(e.target).closest(".step_stage");
    //     if(target.closest(".step_stage_img").length !== 0 || target.closest(".step_stage_video").length !== 0)
    //     {
    //         return;
    //     }
    //     var date = new Date();
    //     // $(this).addClass("active").find(".icon_change use").attr("xlink:href","/images/sprite.svg#training_ok");
    //     $(this).closest(".step_stage").removeClass("active").find(".icon_change use").attr("xlink:href","/images/sprite.svg#training_not");
    //
    //     $(this).closest(".step_stage").find(".step_stage_time").html($(this).closest(".step_stage").find(".step_stage_time").data("lost"));
    //
    //     /*if($(".steps_stage .step_stage:not(.active)").length==0)
    //     {
    //         let id = $(this).closest(".steps_data_js").data("id");
    //         $(".inner_steps .step[data-id='"+id+"']").removeClass("error").addClass("complete").find("use").attr("xlink:href","/images/sprite.svg#step_complete");
    //     }*/
    // });




    $(".inner_steps .step").click(function (e) {
        e.preventDefault();
        $(".inner_steps .step").removeClass("current");
        $(this).addClass("current");
        //$(this).find(".icon").html('<use xlink:href="images/sprite.svg#step_complete2"></use>');
        let id = $(this).data("id");
        $(".steps_data_js").fadeOut(200).removeClass("active");
        setTimeout(() => {
            $(".steps_data_js[data-id='"+id+"']").fadeIn(200).addClass("active");
        }, 200);

        $(".step_items_data_js").fadeOut(200);
        setTimeout(() => {
            $(".step_items_data_js[data-id='"+id+"']").fadeIn(200);
        }, 200);

        setTimeout(() => {
            if($(window).width()>1279)
            {
                const elHeight = $(".data_with_sidebar .data.active").outerHeight();
                $(".data_with_sidebar .steps").outerHeight(elHeight);
            }
        }, 500);

        $(".comments_data_js").fadeOut(200);
        setTimeout(() => {
            $(".comments_data_js[data-id='"+id+"']").fadeIn(200);
        }, 200);

        setTimeout(() => {
            if($(window).width()>1279)
            {
                const elHeight = $(".data_with_sidebar .data.active").outerHeight();
                $(".data_with_sidebar .steps").outerHeight(elHeight);
            }
        }, 500);
    });



    setTimeout(() => {
        if($(window).width()>1279)
        {
            const elHeight = $('.data_with_sidebar .data.active').outerHeight();
            $(".data_with_sidebar .steps").outerHeight(elHeight);


            /*if($(".data_with_sidebar .steps").length>0)
            {

                    var hash = window.location.hash+"00";
                    if(hash)
                    {
                        var top = $(hash).position().top; // получаем координаты блока
                        $('.inner_steps').animate({scrollTop: top}, 800); // плавно переходим к блоку
                    }

            }   */
        }
        else
        {

            /*if($(".data_with_sidebar .steps").length>0)
            {
                var hash = window.location.hash+"00";
                if(hash)
                {
                    var left = $(hash).position().left ; // получаем координаты блока
                    $('.inner_steps').animate({scrollLeft: left }, 800); // плавно переходим к блоку
                }

            }  */
        }
    }, 0)


});

$(window).on('resize', () => {
    if($(window).width()>1279)
    {

        const elHeight = $(".data_with_sidebar .data").outerHeight();
        $(".data_with_sidebar .steps").outerHeight(elHeight);


        /*if($(".data_with_sidebar .steps").length>0)
        {

                var hash = window.location.hash+"00";
                if(hash)
                {
                    var top = $(hash).position().top; // получаем координаты блока
                    $('.inner_steps').animate({scrollTop: top}, 800); // плавно переходим к блоку
                }

        }   */
    }
    else
    {
        $(".data_with_sidebar .steps").css("height", "auto");
    }
});
