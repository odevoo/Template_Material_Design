$(document).ready(function() {
    $('select').material_select();
    $('#email_text').trigger('autoresize');

    $("#info_link").click(function() {
        $('html, body').animate({
            scrollTop: $("#info").offset().top
        }, 1000);
    });

    $("#projects_link").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);

        console.log("clicked");
    });

    $("#skills_link").click(function() {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000);
    });

    $("#contact_link").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

})
