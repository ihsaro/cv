window.onscroll = () => {
    // toggleGoToTopWidget();
}

function toggleGoToTopWidget() {
    $(document).ready(function () {
        if (document.documentElement.scrollTop === 0) {
            $("#divArrowGoToTop").fadeOut(500);
        }
        else {
            $("#divArrowGoToTop").fadeIn(500);
        }
    });
}

function goToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        this.scrollAnimation = setTimeout("goToTop()", 15);
    } else clearTimeout(this.scrollAnimation);
}