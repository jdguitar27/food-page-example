$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('navScrolled', $(this).scrollTop() > $nav.height());
    });
});