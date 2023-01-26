import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { login_page , login_page2 } from './login_page'
import { hello, h_2} from './hello';
import { navbar } from './navbar';
import { footer } from './footer';


document.querySelector('#app').innerHTML =  login_page2.outerHTML;
document.querySelector('#header').innerHTML =  navbar.outerHTML;
document.querySelector('#footer').innerHTML =  footer.outerHTML;

// let button = document.createElement('button');
// button.textContent= "login";

// button.addEventListener("click", () => {
//   document.querySelector('#app').innerHTML = hello.outerHTML;
// })

document.querySelector('#app').append(button);

h_2.addEventListener("click", () => {
  document.querySelector('#app').innerHTML = login_page.outerHTML;})

