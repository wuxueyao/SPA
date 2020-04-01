var $dlgGoto = (function(){
    var cfg = {
            container:'body',
            num: 6,
            title:'同意',
            onClick: null
        },
        num,
        timer,
        $btn = $("<input class='timer-button' type='button' disabled/>");
    function show(conf){
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        num = cfg.num; 
        
        $btn.click(cfg.onClick);
    }

    return {
        show: show
    };
}());
立即执行函数


