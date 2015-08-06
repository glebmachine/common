
// filtrate history in basecamp
var a = [
  '/2356878/people/6029686',
  '/2356878/people/5367783',
  '/2356878/people/10381578',
  '/2356878/people/7962158',
  '/2356878/people/10381578',
  '/2356878/people/5367775',
  '/2356878/people/5573995'
]

$.each(a, function(i,v){ a[i] = 'a[href="'+v+'"]';  })
var filter = ':not('+a.join(', ')+')';
$('.avatar > a')
  .filter(filter)
  .parents('article').remove()

$('.date_group')
  .each(function(){ 
    if ($(this).children().length) return; 
    $(this).prev().remove(); 
    $(this).remove(); 
  })
