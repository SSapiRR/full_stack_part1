let Data_Base;


let json = fetch('users.json')
            .then(r => r.json())
            .then(data => {
                Data_Base = data;
            });


function redirect(link) {
    window.location.assign(link);
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // setTimeout(() => {}, 2000);
    if (username == Data_Base.test_user.username && password == Data_Base.test_user.password) {
        sessionStorage.setItem("isLogin", true);
        sessionStorage.setItem("username", Data_Base.test_user.username);
        redirect('logout.html');
    } else {
        alert("Wrong username or password");
        sessionStorage.setItem("isLogin", false);
    }
}

    




