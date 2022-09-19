document.querySelector("#btn-1").addEventListener("click",function(){
    document.querySelector("body").style.background="#ff0000"
    setTimeout(function(){
        alert("Saarthak is great");
      }, 100);

document.querySelector("#btn-2").addEventListener("click",()=>{
    document.querySelector("body").style.background="blue"
    var x=prompt("Please enter your name")
    var y=window.confirm("Are you sure?")
    if(y){
        window.alert("Open your console by clicking the inspect option after right click")
    }else{
        window.alert("You didn't have to do that")
    }
    window.console.log(`Your name is ${x}`)
})})
