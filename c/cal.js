let inp1=document.querySelector("#num1"); 
let inp2=document.querySelector("#num2"); 

let add=document.querySelector("#add");
let sub=document.querySelector("#sub");
let mul=document.querySelector("#mul");
let div=document.querySelector("#div");
let result=document.querySelector("i"); 
clr=document.querySelector("#clear");
add.addEventListener("click",()=>{
    let sum=Number(inp1.value)+Number(inp2.value);
    result.innerText=sum;
})
sub.addEventListener("click",()=>{
    let res=Number(inp1.value)-Number(inp2.value);
    result.innerText=res;
})      
mul.addEventListener("click",()=>{
    let prod=Number(inp1.value)*Number(inp2.value);
    result.innerText=prod;
})     
div.addEventListener("click",()=>{      
    let quot=Number(inp1.value)/Number(inp2.value);
    result.innerText=quot;
})
clr.addEventListener("click",()=>{
    inp1.value="";
    inp2.value="";
    result.innerText="";
})  

