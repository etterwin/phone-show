$(document).ready(function () {

    $('body').append('<div class="ac_footer"><a href="http://ac-feedback.com/report_form/">Report</a></div>');

    let AdcomboAdvertTop = $(".ac_advertisement");
    AdcomboAdvertTop.css({
        position: "fixed", top: 0, right: 0,
        width: "100%", "text-align": "right", "z-index": 99999
    });
    let AdvertHeight = AdcomboAdvertTop.height();
    $(window).scroll(function () {
        let o = $(window).scrollTop();
        o > AdvertHeight ? AdcomboAdvertTop.hide() : AdcomboAdvertTop.show()
    });

    moment.locale("");
    $('.day-before').text(moment().subtract(1, 'day').format('D.MM.YYYY'));
    $('.day-after').text(moment().add(1, 'day').format('D.MM.YYYY'));
});