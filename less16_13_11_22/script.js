//task 1

//let copy = document.addEventListener("copy", function(){})

function co (a) {
    document.getElementById("h5").textContent= "you coppied: "+ document.getSelection();
}


//task 2
document.addEventListener("keypress", function(a){document.getElementById("h1").textContent = "you clicked: "+`${a.code}`});