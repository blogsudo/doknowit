"undefined"==typeof firstText&&(firstText="First");"undefined"==typeof lastText&&(lastText="Last");var noPage,currentPage,currentPageNo,postLabel;pagecurrentg();function looppagecurrentg(a){var b="";pageNumber=parseInt(numPages/2);pageNumber==numPages-pageNumber&&(numPages=2*pageNumber+1);pageStart=currentPageNo-pageNumber;1>pageStart&&(pageStart=1);lastPageNo=parseInt(a/perPage)+1;lastPageNo-1==a/perPage&&--lastPageNo;pageEnd=pageStart+numPages-1;pageEnd>lastPageNo&&(pageEnd=lastPageNo);b+="<span class='showpageOf'>Page "+currentPageNo+" of "+lastPageNo+"</span>";a=parseInt(currentPageNo)-1;1<currentPageNo&&(b="page"==currentPage?b+('<span class="showpage firstpage"><a href="'+  home_page+'">'+firstText+"</a></span>"):b+('<span class="displaypageNum firstpage"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">'+firstText+"</a></span>"));2<currentPageNo&&(b=3==currentPageNo?"page"==currentPage?b+('<span class="showpage"><a href="'+home_page+'">'+prevText+"</a></span>"):b+('<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">'+prevText+"</a></span>"):"page"==currentPage?b+('<span class="displaypageNum"><a href="#" onclick="redirectpage('+a+');return false">'+prevText+"</a></span>"):b+('<span class="displaypageNum"><a href="#" onclick="redirectlabel('+a+');return false">'+prevText+"</a></span>"));1<pageStart&&(b="page"==currentPage?b+('<span class="displaypageNum"><a href="'+home_page+'">1</a></span>'):b+('<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">1</a></span>'));2<pageStart&&(b+=" ... ");for(a=pageStart;a<=pageEnd;a++)b=currentPageNo==a?b+('<span class="pagecurrent">'+a+"</span>"):1==a?"page"==currentPage?b+('<span class="displaypageNum"><a href="'+home_page+'">1</a></span>'):b+('<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">1</a></span>'):"page"==currentPage?b+('<span class="displaypageNum"><a href="#" onclick="redirectpage('+a+');return false">'+a+"</a></span>"):b+('<span class="displaypageNum"><a href="#" onclick="redirectlabel('+a+');return false">'+a+"</a></span>");pageEnd<lastPageNo-1&&(b+="...");pageEnd<lastPageNo&&(b="page"==currentPage?b+('<span class="displaypageNum"><a href="#" onclick="redirectpage('+lastPageNo+');return false">'+lastPageNo+"</a></span>"):b+('<span class="displaypageNum"><a href="#" onclick="redirectlabel('+lastPageNo+');return false">'+lastPageNo+"</a></span>"));a=parseInt(currentPageNo)+1;currentPageNo<lastPageNo-1&&(b="page"==currentPage?b+('<span class="displaypageNum"><a href="#" onclick="redirectpage('+a+');return false">'+nextText+"</a></span>"):b+('<span class="displaypageNum"><a href="#" onclick="redirectlabel('+a+');return false">'+nextText+"</a></span>"));currentPageNo<lastPageNo&&(b="page"==currentPage?b+('<span class="displaypageNum lastpage"><a href="#" onclick="redirectpage('+lastPageNo+');return false">'+lastText+"</a></span>"):b+('<span class="displaypageNum lastpage"><a href="#" onclick="redirectlabel('+lastPageNo+');return false">'+lastText+"</a></span>"));a=document.getElementsByName("pageArea");for(var d=document.getElementById("blog-pager"),c=0;c<a.length;c++)a[c].innerHTML=b;a&&0<a.length&&(b="");d&&(d.innerHTML=b)}function totalcountdata(a){a=parseInt(a.feed.openSearch$totalResults.$t,10);looppagecurrentg(a)}function pagecurrentg(){var a=urlactivepage;-1!=a.indexOf("/search/label/")&&(postLabel=-1!=a.indexOf("?updated-max")?a.substring(a.indexOf("/search/label/")+14,a.indexOf("?updated-max")):a.substring(a.indexOf("/search/label/")+14,a.indexOf("?&max")));-1==a.indexOf("?q=")&&-1==a.indexOf(".html")&&(-1==a.indexOf("/search/label/")?(currentPage="page",currentPageNo=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+home_page+'feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata">\x3c/script>')):(currentPage="label",-1==a.indexOf("&max-results=")&&(perPage=20),currentPageNo=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+home_page+"feeds/posts/summary/-/"+postLabel+'?alt=json-in-script&callback=totalcountdata&max-results=1" >\x3c/script>')))}  function redirectpage(a){jsonstart=(a-1)*perPage;noPage=a;a=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost");a.appendChild(b)}  function redirectlabel(a){jsonstart=(a-1)*perPage;noPage=a;a=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.setAttribute("src",home_page+"feeds/posts/summary/-/"+postLabel+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost");a.appendChild(b)}function finddatepost(a){post=a.feed.entry[0];a=post.published.$t.substring(0,19)+post.published.$t.substring(23,29);a=encodeURIComponent(a);location.href="page"==currentPage?"/search?updated-max="+a+"&max-results="+perPage+"#PageNo="+noPage:"/search/label/"+postLabel+"?updated-max="+a+"&max-results="+perPage+"#PageNo="+noPage};