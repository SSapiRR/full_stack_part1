
const login_page = document.createElement("div");

login_page.innerHTML = `
    <input id="userName" type="text" placeholder="UserName"> <br>
    <input id="pass" type="password" placeholder="Password"> <br>
    <button type="submit" id="logBtn">Login</button>
`
export {login_page}
