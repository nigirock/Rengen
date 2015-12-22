$.fn.magnifierRentgen = function() {
    return this.each(function () {
        var th = $(this),
            dataImage = th.data("image"),
            dataImageZoom = th.data("image-zoom"),
            dataSize = th.data("size");

        th
            .addClass("magnifierRentgen")
            .append("<img class='data-image' src='" + dataImage + "'><div class='magnifier-loupe'><img src='" + dataImageZoom + "'> ");
    });
};