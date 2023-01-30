import './tstyle.css'
const board = document.createElement("div");
    board.innerHTML = `
    <div class="container">
    <div class="player1">
        <h1 id="playerOne">Player 1</h1>
        <h2 id="player1Score">0</h2>
    </div>
        <div class="table_div">
            <table>
                <tr>
                    <td><button class="btn" id="btn1"></button></td>
                    <td><button class="btn" id="btn2"></button></td>
                    <td><button class="btn" id="btn3"></button></td>
                </tr>
                <tr>
                    <td><button class="btn" id="btn4"></button></td>
                    <td><button class="btn" id="btn5"></button></td>
                    <td><button class="btn" id="btn6"></button></td>
                </tr>
                <tr>
                    <td><button class="btn" id="btn7"></button></td>
                    <td><button class="btn" id="btn8"></button></td>
                    <td><button class="btn" id="btn9"></button></td>
                </tr>
            </table>
        </div>
    <div class="player2">
        <h1 id="playerTwo">Player 2</h1>
        <h2 id="player2Score">0</h2>
    </div>
    </div>




    `



export {board}