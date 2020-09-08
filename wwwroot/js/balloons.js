$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible');
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });

    // RANDOM HEADING ANIMATION

    function generateRandomNum() {
        return Math.floor(Math.random() * Math.floor(12));
    };

    function randomHeadingAnimation() {
        var animations = ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'];
        var rand = generateRandomNum();

        var className = "animated " + animations[rand];
        $("#heading-1").addClass(className);
    };

    randomHeadingAnimation();

    // TOAST
    // preload audio
    var toast = new Audio('media/toast.wav');

    var checkboxes = $('input.form-check-input:checkbox');

    $('#submit').on('click', function () {
        if (checkboxes.prop('checked') == false) {
            e.preventDefault();
            // first pause the audio (in case it is still playing)
            toast.pause();
            // reset the audio
            toast.currentTime = 0;
            // play audio
            toast.play();
            // display toast data
            $('#toast').toast({ autohide: false }).toast('show');
        }
    })


    // CHECK/UNCHECK ALL
    $("#check").on('click', function () {
        if (checkboxes.prop('checked') == false) {
            checkboxes.prop('checked', true);

        }
        else {
            checkboxes.prop('checked', false);
        }
    })

});