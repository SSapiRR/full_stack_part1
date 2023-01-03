let Data_Base;


let json = fetch('username.json')
            .then(r => r.json())
            .then(data => {
                Data_Base = data;
            });

let showUser = () =>{
    alert("username: " + Data_Base.user1.username + "\n password: " + Data_Base.user1.password);
}


function redirect(link) {
    window.location.assign(link);
}

function morph() {
    if(location.pathname == "logout.html"){
        if(sessionStorage.getItem("isLogin") == "true"){
            document.getElementById("username").textContent = `welcome back ${sessionStorage.getItem("username")}`;
            document.getElementById("log").style.display = "none";
        }else{
            
        }
    }else{
        console.log(localStorage.getItem("isLogin"));
        console.log(location.pathname);
    }

};

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // setTimeout(() => {}, 2000);
    if (username == Data_Base.test_user.username && password == Data_Base.user1.password) {
        sessionStorage.setItem("isLogin", true);
        sessionStorage.setItem("username", Data_Base.user1.username);
        redirect('index.html');
    } else {
        alert("Wrong username or password");
        sessionStorage.setItem("isLogin", false);
    }
}


morph();
    




