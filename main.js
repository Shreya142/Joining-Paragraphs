function getParagraph1()
{var inputs=[];

for(var i=1;i<=6;i++)
{
    inputs.push(document.getElementById("paragraph"+i).value);
}
document.getElementById("showParagraph1").innerHTML=inputs.join(" ");
}