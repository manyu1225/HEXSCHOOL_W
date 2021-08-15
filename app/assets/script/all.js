
$(document).ready(function (event) {
    var $li = $('.product__tab__list li')
    $($li.eq(0).addClass('active').find('a').attr('href')).siblings('.product__tab__item').hide()
    $li.click(function (event) {
        event.preventDefault();
        $($(this).find('a').attr('href')).show().siblings('.product__tab__item').hide()
        $(this).addClass('active').siblings('.active').removeClass('active')
        $('html,body').animate({
            scrollTop: 0
        }, 500)
    })
})