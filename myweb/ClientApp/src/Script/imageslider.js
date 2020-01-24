function ImageSlider(selector) {
    this.$imageSlider = null;
    this.$images = null;

    this.init(selector);
    this.initImages();
}

ImageSlider.prototype.init = function (selector) {
    this.$imageSlider = $(selector);
    this.$images = this.$imageSlider.find(".slider-list img");
};

ImageSlider.prototype.initImages = function (selector) {
    this.$images.each(function () {
        $(this).css({
            opacity: 0.0
        });
    });
};