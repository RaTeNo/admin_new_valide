//jQuery plugin
(function($) {

    $.fn.uploader = function(options) {
        var settings = $.extend({
            MessageAreaText: "",
            MessageAreaTextWithFiles: "",
            DefaultErrorMessage: "Unable to open this file.",
            BadTypeErrorMessage: "Не поддерживаемый формат файла.",
            acceptedFileTypes: ['pdf', 'jpg', 'gif', 'jpeg', 'bmp', 'tif', 'tiff', 'png', 'xps', 'doc', 'docx',
                'fax', 'wmp', 'ico', 'txt', 'cs', 'rtf', 'xls', 'xlsx'
            ]
        }, options);

        var uploadId = 1;
        //update the messaging 
        $('.file-uploader__message-area p').text(options.MessageAreaText || settings.MessageAreaText);

        //create and add the file list and the hidden input list
        var fileList = $('<ul class="file-list"></ul>');
        var hiddenInputs = $('<div class="hidden-inputs hidden"></div>');
        $('.file-uploader__message-area').after(fileList);
        $('.file-list').after(hiddenInputs);

        //when choosing a file, add the name to the list and copy the file input into the hidden inputs
        $('.file-chooser__input').on('change', function() {
            var file = $('.file-chooser__input').val();
            var fileName = (file.match(/([^\\\/]+)$/)[0]);

            //clear any error condition
            $('.file-chooser').removeClass('error');
            $('.error-message').remove();

            //validate the file
            var check = checkFile(fileName);
            if (check === "valid") {

                // move the 'real' one to hidden list 
                $('.hidden-inputs').append($('.file-chooser__input'));

                //insert a clone after the hiddens (copy the event handlers too)
                $('.file-chooser').append($('.file-chooser__input').clone({ withDataAndEvents: true }));

                //add the name and a remove button to the file-list
                $('.file-list').append('<li style="display: none;"><svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.92714 28C6.61203 28 4.29618 27.1289 2.53467 25.386C-0.97342 21.9149 -0.777199 16.0508 2.73388 12.5827L13.2731 2.1723C14.5146 0.945988 16.1425 0.121323 17.8951 0.0137264C19.9088 -0.110084 21.8232 0.607721 23.2341 2.0028C24.6464 3.39714 25.3731 5.28819 25.2478 7.27652C25.1388 9.00692 24.3032 10.6157 23.0625 11.842L12.7128 22.0652C11.8787 22.8891 10.7961 23.4618 9.62174 23.5635C8.17434 23.6888 6.79259 23.1891 5.78164 22.1898C4.76995 21.1912 4.2641 19.8263 4.39094 18.3966C4.4939 17.2366 5.0736 16.1665 5.90773 15.3434L13.1216 8.21837C13.2671 8.07466 13.5036 8.07466 13.6491 8.21837L14.7041 9.26044C14.8496 9.40414 14.8496 9.63776 14.7041 9.78147L7.43123 16.9654C7.04551 17.3464 6.75006 17.824 6.65381 18.3546C6.49863 19.2065 6.76647 20.0363 7.36483 20.6274C8.33698 21.5877 10.0306 21.5891 11.005 20.6274L21.6524 10.1102C22.5365 9.23464 23.0237 8.07318 23.0237 6.83729C23.0237 5.6014 22.5365 4.43921 21.6516 3.5659C20.7668 2.6926 19.5902 2.21062 18.3398 2.21062C17.0893 2.21062 15.9127 2.69186 15.0279 3.5659L4.12309 14.3367C1.47449 16.9536 1.47449 21.2111 4.12309 23.828C6.77319 26.4443 11.0833 26.4435 13.7319 23.828L24.3084 13.3808C24.4539 13.2371 24.6904 13.2371 24.8359 13.3808L25.8909 14.4229C26.0364 14.5666 26.0364 14.8002 25.8909 14.9439L15.3144 25.3911C13.5544 27.1304 11.2407 28 8.92714 28Z" fill="var(--main_color)"/></svg><span class="file-list__name">' + fileName + '</span><button class="removal-button" data-uploadid="' + uploadId + '">Удалить</button></li>');
                $('.file-list').find("li:last").show();

                //removal button handler
                $('.removal-button').on('click', function(e) {
                    e.preventDefault();

                    //remove the corresponding hidden input
                    $('.hidden-inputs input[data-uploadid="' + $(this).data('uploadid') + '"]').remove();

                    //remove the name from file-list that corresponds to the button clicked
                    $(this).parent().hide().queue(function() { $(this).remove(); });

                    //if the list is now empty, change the text back 
                    if ($('.file-list li').length === 0) {
                        $('.file-uploader__message-area').text(options.MessageAreaText || settings.MessageAreaText);
                    }
                });

                //so the event handler works on the new "real" one
                $('.hidden-inputs .file-chooser__input').removeClass('file-chooser__input').attr('data-uploadId', uploadId);

                //update the message area
                $('.file-uploader__message-area').text(options.MessageAreaTextWithFiles || settings.MessageAreaTextWithFiles);

                uploadId++;

            } else {
                //indicate that the file is not ok
                $('.file-chooser').addClass("error");
                var errorText = options.DefaultErrorMessage || settings.DefaultErrorMessage;

                if (check === "badFileName") {
                    errorText = options.BadTypeErrorMessage || settings.BadTypeErrorMessage;
                }

                $('.file-chooser__input').after('<p class="error-message">' + errorText + '</p>');
            }
        });

        var checkFile = function(fileName) {
            var accepted = "invalid",
                acceptedFileTypes = this.acceptedFileTypes || settings.acceptedFileTypes,
                regex;

            for (var i = 0; i < acceptedFileTypes.length; i++) {
                regex = new RegExp("\\." + acceptedFileTypes[i] + "$", "i");

                if (regex.test(fileName)) {
                    accepted = "valid";
                    break;
                } else {
                    accepted = "badFileName";
                }
            }

            return accepted;
        };
    };
}(jQuery));

//init 
$(document).ready(function() {
    $('.fileUploader').uploader({
        MessageAreaText: "Файлы не выбраны"
    });
});