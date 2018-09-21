// myscript.js for Exercise 1
// David Agaybi
$(document).ready(() => {
    $('h3').append('David Agaybi');
    $('#clickText').click(function() {
        const ele = $("p:contains(eleifend)");
        if(ele){
            ele.css(
                'background', 'bisque'
            );
            ele.css(
                'color', 'navy'
            );

        }
    });

    $('#clickImg').click(function() {
        const img = $('p').has("img");
        if(img){
            img.addClass("imgClass");
        }
    });

    $('#clickPng').click(function(){
        const png = $("img[src$='.png']");

        if(png){
            png.css(
                'border',
                'solid navy thick'
            );
        }
    });
});
