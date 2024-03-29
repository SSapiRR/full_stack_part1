// this will be the functions we use to build the game
function reset() {
    // Reset the game
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].textContent = "";
    }
    counter = 0;
}

function ArrayToMatrix(arr, num) {
    // Convert an array to a matrix for easier mental math
    let matrix = [], i, k;
    // k is the number of columns
    // i is the number of rows

    for (i = 0, k = -1; i < arr.length; i++) { // i is the number of rows and k is the number of columns
        if (i % num == 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(arr[i]);
    }
    return matrix;
}

function checkForWin(matrix, symbol) {
    // this function check for all possible wining 
    let rows_c, col_c, diagonal_c, diagonalT_c; // counters 

    for (let i = 0; i < matrix.length; i++){
        rows_c = 0, col_c = 0, diagonal_c = 0, diagonalT_c = 0; // set to zero every ittration on i
        
        for(let j = 0; j < matrix[i].length; j++){

            if(matrix[i][j].textContent == symbol){
                // check for row
                    rows_c++;
            }

            if(matrix[j][i].textContent == symbol){
                // check colum
                    col_c++;
            }
            if(matrix[j][j].textContent == symbol){
                // check main diagonal 
                diagonal_c++;
            }
            if(matrix[j][matrix.length - j - 1].textContent == symbol){
                diagonalT_c++;
            }
            
        }
        if(rows_c == matrix.length || 
            col_c == matrix.length ||
            diagonal_c == matrix.length ||
            diagonalT_c == matrix.length){
            return true;
        }
    }
    return false;
}


function checkforTie(array) {
    for(let i = 0; i < array.length; i++){
        if(array[i].textContent == ''){
            return false;
        }
    }
    return true;
}


function register(){
    let player_one = prompt("Player One: Enter Your Name");
    let player_two = prompt("Player Two: Enter Your Name");
    document.getElementById("playerOne").textContent = player_one;
    document.getElementById("playerTwo").textContent = player_two;
    p1['name'] = player_one;
    p2['name'] = player_two;
}

function incrementScore(symbol){
    if(symbol == 'X'){
        p1['points']++;
        document.getElementById("player1Score").textContent = p1['points'];
    }else{
        p2['points']++;
        document.getElementById("player2Score").textContent = p2['points'];
    }
}

function resetAll(){
    reset();
    document.getElementById("playerOne").textContent = "Player 1";
    document.getElementById("playerTwo").textContent = "Player 2";
    document.getElementById("player1Score").textContent = 0;
    document.getElementById("player2Score").textContent = 0;
}


export function RunGame(){
    
        // Game Logic
    let counter = 0; // Keep track of the number of turns

    let p1= {
        name: "Player 1",
        points: 0
    };

    let p2 = {
        name: "Player 2",
        points: 0
    };

    let buttonArray = document.querySelectorAll(".btn"); // Get all the buttons

    let coArray = []; // Create an array to store the coordinates of the buttons
    buttonArray.forEach((button) => {
        coArray.push(button); // Push the buttons to the array
    });

    let matrix = ArrayToMatrix(coArray, Math.floor(Math.sqrt(coArray.length))); // Convert the array to a matrix

    console.log(matrix);



    for (let i = 0; i < buttonArray.length; i++) { // Loop through the buttons and add an event listener to each one

        buttonArray[i].addEventListener("click", 
        function() {
            let symbol;
            if(counter % 2 == 0 && buttonArray[i].textContent == "") {
                buttonArray[i].textContent = "X";
                counter++;     
                symbol = 'X';
            }else if(counter % 2 != 0 && buttonArray[i].textContent == "") {
                buttonArray[i].textContent = "O";
                counter++;
                symbol = 'O';
            }else{
                alert("This button is already clicked!");
            }

            if(checkForWin(matrix, symbol)){
                alert(`${symbol} has won`)
                incrementScore(symbol);
                reset();
            }

            if(checkforTie(coArray)){
                alert("no body won it was a Tie!")
            }

        });
        }

    // document.getElementById("reset_btn").addEventListener("click", reset);
    // document.getElementById("register_btn").addEventListener("click", register);
    // document.getElementById("reset_btn_all").addEventListener("click", resetAll);

}



