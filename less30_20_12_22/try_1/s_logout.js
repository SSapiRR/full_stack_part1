if (localStorage.getItem("logged")===null)
window.location.assign("login.html");
document.getElementById("name").textContent= localStorage.getItem("logged"); 

let logout = () => {
    localStorage.removeItem("logged");
    window.location.assign("login.html")
}