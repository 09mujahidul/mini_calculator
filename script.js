
function add(){
    let a=parseInt(document.getElementById("n1").value) ;
    let b=parseInt(document.getElementById("n2").value);
    let j=a+b;
    document.getElementById("data1").innerHTML="Addition is = "+j;


}
function sub(){

    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a-b;
    document.getElementById("data1").innerHTML="Subtraction is = "+c;
}
function mul(){

    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    document.getElementById("data1").innerHTML="Mulptiplication is = "+a*b;
}
function sqadd(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=(a*a)+(b*b);
    document.getElementById("data1").innerHTML="Square Addition is = "+c;
}

function cb_add(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let cubadd=(a*a*a)+(b*b*b)
    document.getElementById("data1").innerHTML="Cube Addition is = "+cubadd;
}
function div(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    document.getElementById("data1").innerHTML="Division is = "+a/b;
}

function clr(){
    let a=document.getElementById("n1").value=" ";
    document.getElementById("data1").innerHTML=" ";

    let b=document.getElementById("n2").value=" ";
    document.getElementById("data2").innerHTML=" ";
}