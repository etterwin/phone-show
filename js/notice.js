$(document).ready(function() {
    let windowHeight = $(window).height();

    $(document).on('scroll', function () {
        $('#show_notification').each(function () {
            let self = $(this),
                height = self.offset().top + self.height();
            if ($(document).scrollTop() + windowHeight >= height) {
                document.getElementById("wrapper").classList.add("wrapper-show");
                document.getElementById("notice").classList.add("notice-show");

                document.getElementById("wrapper").classList.remove("wrapper--black");
                document.getElementById("notice").classList.remove("notification");
            }
        });
    });
});

function removeAll() {
    document.getElementById("wrapper").classList.remove("wrapper-show");
    document.getElementById("notice").classList.remove("notice-show");
    document.getElementById("wrapper").classList.add("wrapper--black");
    document.getElementById("notice").classList.add("notification");
}
