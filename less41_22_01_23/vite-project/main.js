import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import {login_page} from './login_page.js'
import {newpage} from './newpage'

document.querySelector('#app').innerHTML = login_page.outerHTML;

// let button = document.createElement('button');

// button.addEventListener("click", () => {
//     document.querySelector('#app').innerHTML = newpage.outerHTML;
// })



// document.querySelector('#app').append(button);

