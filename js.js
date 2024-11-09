function display(value){
    document.getElementById("calculation").value += value
}
function cal(){
    try{
       let num = document.getElementById("calculation").value;
    let ans = eval(num)
    document.getElementById("calculation").value = ""
    document.getElementById("calculation").value = ans 
    }
    catch{
        document.getElementById("calculation").value="ERROR"
    }
    
}
function DEL(){
    let DEL = document.getElementById("calculation").value
    ans = DEL.slice(0,-1)
    document.getElementById("calculation").value = ans
}
function AC(){
    document.getElementById("calculation").value = ""
}


