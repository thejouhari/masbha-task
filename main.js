const counter = document.querySelectorAll(".counter");
const btn = document.querySelectorAll("button");

let count1=0;
let count2=0;
let count3=0;
let count4=0;

btn[0].onclick = function(){
    count1++;
    counter[0].innerHTML = count1;
}

btn[1].onclick = function(){
    count2++;
    counter[1].innerHTML = count2;
}

btn[2].onclick = function(){
    count3++;
    counter[2].innerHTML = count3;
}

btn[3].onclick = function(){
    count4++;
    counter[3].innerHTML = count4;
}


