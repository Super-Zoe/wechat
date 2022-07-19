javascript:(function(){
  var youtube = 'https://www.youtube.com/results?search_query=';
  var bilibili= 'https://search.bilibili.com/all?keyword='
  var query = prompt('video query');
  if(query != '') {
    document.location.href = youtube + query;
    document.location.href = bilibili + query;
  }
})();
