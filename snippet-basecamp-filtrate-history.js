
// filtrate history in basecamp


$('.avatar > a')
  .filter(':not(a[href="/2356878/people/5367775"], a[href="/2356878/people/5573995"], a[href="/2356878/people/10381578"], a[href="/2356878/people/6029686"], a[href="/2356878/people/7962158"])')
  .parents('article').remove()

$('.date_group')
  .each(function(){ 
    if ($(this).children().length) return; 
    $(this).prev().remove(); 
    $(this).remove(); 
  })
