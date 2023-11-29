var transform3 = document.getElementById("transform3")
var on = document.getElementById("on")
var off = document.getElementById("off")
var reset = document.getElementById("reset")

//task 2
off.addEventListener("click", function(){
    onclick=document.getElementById("obj2").src='assets/images/Off.png'
})

on.addEventListener("click", function(){
    onclick=document.getElementById("obj2").src='assets/images/On.png'
})

//task 3
transform3.addEventListener("click", function(){
    onclick=document.getElementById("obj3").innerHTML = "Hurray."
    document.getElementById("obj3").style.fontSize = "20pt";
    document.getElementById("obj3").style.color = "green";
    document.getElementById("obj3").style.textAlign= "right";
})

reset.addEventListener("click", function(){
    this.onclick=document.getElementById("obj3").innerHTML = "Hello"
    document.getElementById("obj3").style.fontSize = "12pt";
    document.getElementById("obj3").style.color = "black";
    document.getElementById("obj3").style.textAlign= "left";
})

//task 4
