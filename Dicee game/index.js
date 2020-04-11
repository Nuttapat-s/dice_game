
var dic1 =Math.floor(Math.random()*6+1);
var randomDiceImage="dice"+dic1+".png";
var randomimgSource="images/"+randomDiceImage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomimgSource);

var dic2 =Math.floor(Math.random()*6+1);
var randomDiceImage2="dice"+dic2+".png";
var randomimgSource2="images/"+randomDiceImage2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src",randomimgSource2);

if(dic1 > dic2)
{
  document.querySelector("h1").innerHTML ="Player1 win!!";
}else if(dic2 > dic1)
{
  document.querySelector("h1").innerHTML ="Player2 win!!";
}else if(dic2===dic1){
  document.querySelector("h1").innerHTML ="Draw!!";
}
