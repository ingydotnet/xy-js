$(function() {
    $(".xy").xy({
        'show': function(x, y) {
            var color = "#" + hex_md5(x+":"+y).substr(0,6);
            return "<div style='background:"+ color +";width:500px;height:500px;'> </div>";
        }
    });
});
