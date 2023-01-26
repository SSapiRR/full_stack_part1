import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import {board} from './modules/tiktak.js'
import { RunGame } from './modules/game_logic'


document.querySelector('#app').innerHTML = board.outerHTML;
RunGame();

