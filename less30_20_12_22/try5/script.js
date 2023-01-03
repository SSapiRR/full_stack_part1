let Data_Base;

let json = fetch('data_base.json')
            .then(r => r.json())
            .then(data => {
                Data_Base = data;
            });

function redirect(link) {
    window.location.assign(link);
}


function login () {
    for (let x in Data_Base) {
        let userName = document.getElementById("username").value;

        if (userName == x && 
            document.getElementById("password").value == Data_Base[x].password) {
                localStorage.setItem("logged", userName);
                window.location.assign("index.html");
                alert("1");
            }
        else {
            alert("2");
                alert("Wrong username or password");
                sessionStorage.setItem("logged", false);
            }
    } 
} 
    




    




