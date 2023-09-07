window.onload = function() {
    var output = "";
    var date = new Date();
    var hour = date.getHours();

    output+="<ul>";
    if(hour > 16) {
        output+="<li>후라이드 치킨</li>";
        output+="<li>양념 치킨</li>";
        output+="<li>매운 닭발</li>";
        output+="<li>골벵이 무침</li>";
    } else {
        output+="<li>김치찌개</li>";
        output+="<li>된장찌개</li>";
        output+="<li>순두부찌개</li>";
        output+="<li>순두부찌개</li>";
    }
    output+="</ul>";
    document.body.innerHTML += output;
}