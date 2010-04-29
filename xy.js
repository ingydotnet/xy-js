var XY = function(opts) {
    this.init(opts);
    return this;
};

XY.fn = XY.prototype;

XY.fn.init = function(opts) {
    this.opts = opts;
    var $xs = $([0,1,2]);
    var $ys = $([0,1,2]);

    var block = "<div style='width:512px;height:512px;background:#fff;position:absolute;top:0px;left:0px;'></div>";

    var blocks = "";
    var $surface = $(this.opts.surface);

    var show_cb = this.opts.show;
    $ys.each(function(y) {
        $xs.each(function(x) {
            var b = block.replace(/top:0px;left:0px/, "top:" + y*512 + "px;left:" + x*512 + "px;");
            var $b = $(b);
            $b.x = x;
            $b.y = y;
            $surface.append($b);

            show_cb($b);
        });
    });

};



$.fn.xy = function(opts) {
    this.each(function() {
        opts.surface = this;
        var o = new XY(opts);
        $(this).data("xy", o);
    });
};

