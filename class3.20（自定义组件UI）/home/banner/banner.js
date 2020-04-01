$(function(){
    var $box=$('#box'),
        $slider=$('#slider'),
        $left=$('#left'),
        $right=$('#right'),
        $navs=$('#navs'),
        $span=$('span'),
        index = 0;
    $navs.children().bind('click',function(){
        $navs.children().removeClass('active');
        $(this).addClass('active');
        index = Number($(this).html());
        $slider.animate({left:-index*1200},'slow');
    })

    $span.hover(()=>{
        $span.css('opacity',0.5);
    })
    $span.mouseout(()=>{
        setTimeout(()=>{
            $span.animate({opacity:0.1},'slow')
        },1000)

    })
    $left.click(()=>{
        $span.css('opacity',0.5);
        index--;
        $navs.children().removeClass('active');
        if(index <= 0){
            index = 5;
            $slider.animate({left:0},'slow',()=>{
                $slider.css('left',-5*1200);
            });
            
        }
        $slider.animate({left:-index*1200},'slow');
        $navs.children().eq(index-1).addClass('active');
    })
    $right.click(()=>{
        $span.css('opacity',0.5);
        index++;
        $navs.children().removeClass('active');
        if(index >= 6){
            index = 1;
            $slider.animate({left:-6*1200},'slow',()=>{
                $slider.css('left',-1*1200);
            });
            
        }
        $navs.children().eq(index-1).addClass('active');
        $slider.animate({left:-index*1200},'slow');
    })
});
