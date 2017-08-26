//<![CDATA[
function tipsdaninformasi(){
var re=/[<>]/g
for (i=0; i<arguments.length; i++)
arguments[i].value=arguments[i].value.replace(re, function(m){return replacechar(m)})
}
function replacechar(match){
if (match=="<")
return "&lt;"
else if (match==">")
return "&gt;"
}
//]]>
//hak cipta : www.tips-berbagiinfo.blogspot.com//
