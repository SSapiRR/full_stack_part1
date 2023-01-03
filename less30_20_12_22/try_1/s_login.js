let Data_base ;

function login () {
    for (let x in Data_base) {
        let userName = document.getElementById("name").value;

        if (userName == x && 
            document.getElementById("password").value == Data_base[x].password) {
                localStorage.setItem("logged", userName);
                window.location.assign("logout.html");
            }
    }
    if (localStorage.getItem("logged")===null)
    alert("the username or the password are worng /n please try again")
}

let main = () => {
    let logged = localStorage.getItem("logged");

    fetch('username.json')
    .then(response => response.json())
    .then(data => Data_base = data);

    if (logged!=null){
        let text = 'you are already logged as ${logged}';
    }
}
main();