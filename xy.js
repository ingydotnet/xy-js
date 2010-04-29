var XY = function(opts) {
    return this;
};

XY.prototype = {
    
};

$.fn.xy = function(opts) {
    this.each(function() {
        opts.el = this;
        var o = new XY(opts);
        $(this).data("xy", o);
    });
};
