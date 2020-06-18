$('#nav .item').click(function () {
    $('#nav .item.active').removeClass('active');
    $(this).addClass('active');
});
$(window).scroll(function () {
    var href = $(this).scrollTop();
    $('#nav .item').each(function (event) {
        if (href >= $($("a", this).attr('href')).offset().top - 50) {
            $('#nav .item.active').removeClass('active');
            $(this).addClass('active');
        }
    });
});