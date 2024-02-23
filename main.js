const counter = document.querySelectorAll(".counter");
const btn = document.querySelectorAll("button");

for(let i=0; i<btn.length; i++){

    let count=0;
    btn[i].onclick = function(){
        count++;
        counter[i].innerHTML = count;
    }
    
}


