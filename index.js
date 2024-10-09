let count=0;

document.getElementById("countUp").onclick=function(){
    count+=1;
    document.getElementById("updowncount").innerHTML=count;
}


document.getElementById("countDown").onclick=function(){
    count-=1;
    document.getElementById("updowncount").innerHTML=count;
}

document.getElementById("rst").onclick=function(){
    count=0;
    document.getElementById("updowncount").innerHTML=count;
}