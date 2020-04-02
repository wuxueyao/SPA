$(function(){
    /**
     * 01.点击次数，状态保持
     */
    // var $btn = $('#main>input'),
    //     num = window.localStorage.getItem('num') || 0;

    // $btn.click(function(){
    //     num++;
    //     window.localStorage.setItem('num',num);
    //     $btn.val('点击了'+num+'次')
    // })


    /**
     * 02.图片base64保持
     */
    var $url = $('input[type="text"]'),
        $btnSave = $('input[type="button"'),
        $img = $('img'),
        $tmpImg = $('<img>');

    // load localStorage string to #img
    var strImg = window.localStorage.getItem('img');
    if(strImg !== ''){
        $img.attr('src',strImg)
    }
    $btnSave.click(function(){
        // validate url not null
        var url = $url.val();
        if(url === '') return;

        // load url image tmpImg
        $tmpImg.attr('crossOrigin','anonymous');
        $tmpImg.attr('src',url);
        // create canvas
        var can = $('<canvas>').get(0);
        var ctx = can.getContext('2d');
        ctx.width = $tmpImg.get(0).width;
        ctx.height = $tmpImg.get(0).height;
        // canvas fill tmpImg
        ctx.drawImage($tmpImg.get(0),0,0,can.width,can.height);
        // canvas output base64 string
        var str = can.toDataURL();
        // console.log(str)
        // save base64 string to localStorage
        strImg = window.localStorage.setItem('img',str)
        // load localStorage string to #img
        if(strImg !== ''){
            $img.attr('src',strImg)
        }
        })
})
