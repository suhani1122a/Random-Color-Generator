function getColor(){
    let a=Math.ceil(0+Math.random()*255);
    let b=Math.ceil(0+Math.random()*255);
    let c=Math.ceil(0+Math.random()*255);
    let d= `rgb(${a}, ${b}, ${c})`;
    
    document.body.style.backgroundColor=d;
    document.getElementById("title").innerText=`rgb(${a},${b},${c})`;
    navigator.clipboard.writeText(`rgb(${a}, ${b}, ${c})`);
 }

// getColor();