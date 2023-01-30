import './style.css'

// import {projects_page} from './modules/projects_page.js'
import {login_page} from './modules/login_page.js'
import {board} from './modules/Games/ticktakto.js'
import { RunGame} from './modules/Games/game_logic'


document.querySelector('#app').innerHTML = board.outerHTML;
// RunGame();
