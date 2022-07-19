javascript:(function(){
  var youtube = 'https://www.youtube.com/results?search_query=';
  var bilibili= 'https://search.bilibili.com/all?keyword=';
  var TecentVideo= 'https://v.qq.com/x/search/?q=';
  var iQiYi='https://so.iqiyi.com/so/q_';
  var YouKu= 'https://so.youku.com/search_video/q_';
  var query = prompt('video query');
  
  if(query != '') {
    window.open(youtube + query);
    window.open(bilibili + query);
    window.open(TecentVideo + query);
    window.open(YouKu + query);
    window.open(iQiYi + query);
  }
})();
