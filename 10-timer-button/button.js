$(function() {
  var $btn = $('input[type="button"]'), 
      i    = 6,
      timer;

  $btn.val('同意 (' + i + ' s)');
  $btn.attr('disabled', 'disabled');
  
  timer = window.setInterval(function() {
    $btn.val('同意 (' + i-- + ' s)');
    if(i === -1) {
      window.clearInterval(timer);
      $btn.val('同意');
      $btn.removeAttr('disabled');
    }
  }, 1000);

  $btn.click(function() {
    alert('你真好！');
  });
});
