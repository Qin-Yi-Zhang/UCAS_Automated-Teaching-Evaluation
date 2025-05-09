var tds = document.getElementsByTagName('td');
for(var i = 0; i<tds.length;i+=5) tds[i].getElementsByTagName("input")[0].checked=true;
//主观题答案自己写，例如
var answers = ["老师讲课干货很多，学习到了很多重要的知识，非常好！！！",
               "没有什么意见或建议，老师的课非常棒！！！！"];
text = document.getElementsByTagName("textarea");
for(var i = 0;i<text.length;i++) text[i].value = answers[i];