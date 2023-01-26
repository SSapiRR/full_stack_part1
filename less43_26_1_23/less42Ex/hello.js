const hello = document.createElement("div");
const h_2 = document.createElement("button");
h_2.textContent= "button2";

hello.innerHTML= `
Hello <br>
${h_2.outerHTML}
`

export {hello, h_2};