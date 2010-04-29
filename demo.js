$(function() {
    $(".surface").xy({
        'show': function($block) {
            var x = $block.x;
            var y = $block.y;
            var color = "#" + hex_md5(x+":"+y).substr(0,6);
            $block.html("<div style='background:"+ color +";width:512px;height:512px; line-height: 512px;text-align:center; font-size:48px;'>(" + x + "," + y + ")</div>");
        }
    });
});
