/**字符校验
 * 1. event keypress
 * 2. event argument get key value
 * 3. ilegal key filter, e.preventDefault() 屏蔽值;
 * 4. 合法字符还要考虑出现的位置，例如：., e, E, -
 */
$width.keypress(function(e){
    if(/[abcdf-zASCDF-Z'~!]/.test(e.key)){
        e.preventDefault();
        return;
    }
    // 合法字符 e
    // 允许出现在非科学计数法数字末尾
    // 允许出现在非科学计数法数字中间

    // 不允许出现在非科学计数法数字前面
    // 不允许出现在空文本中
    // 不允许出现在负号后面
    // 不允许出现在科学计数法（e 和 E）数字的前面
    // 不允许出现在科学计数法数字的中间
    // 不允许出现在科学计数法数字的末尾

    var pos = e.target.selectionStart,
        con = e.target.value;
    if(e.key === 'e'){
        // rule not ok
        if(pos === 0 || con.indexOf('e') !== -1|| con.indexOf('E') !== -1){
            e.preventDefault();
            return;
        }

        if(pos === 1 && con.substring(0,1) === '-'){
            e.preventDefault();
            return;
        }
    }
})

$height.keypress(function(){

})