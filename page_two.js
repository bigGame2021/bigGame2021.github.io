function a_door_lock(){
    let input1 = document.getElementById("a_door_input1");
    let input2 = document.getElementById("a_door_input2");
    let input3 = document.getElementById("a_door_input3");
    let input4 = document.getElementById("a_door_input4");
    let input5 = document.getElementById("a_door_input5");
    let input6 = document.getElementById("a_door_input6");
    let input7 = document.getElementById("a_door_input7");
    let answer1;
    let answer2;
    let answer3;
    let answer4;
    let answer5;
    let answer6;
    let answer7;
    try {
        answer1 = parseInt(input1.value);
        answer2 = parseInt(input2.value);
        answer3 = parseInt(input3.value);
        answer4 = parseInt(input4.value);
        answer5 = parseInt(input5.value);
        answer6 = parseInt(input6.value);
        answer7 = parseInt(input7.value);
        
    } catch (error) {
        alert("The door isn't budging... perhaps I should try a different answer?");
    }

    if(answer1 === 1 && answer2 === 1 && answer3 === 1 && answer4 === 1 && answer5 === 1 && answer6 === 1 && answer7 === 1){
        alert("The door opened!");
        window.location.href = "page_c.html";
    }
    else{
        alert("The door isn't budging... perhaps I should try a different answer?");
    }
}


function b_door_lock(){
    let input1 = document.getElementById("b_door_input1");
    let input2 = document.getElementById("b_door_input2");
    let input3 = document.getElementById("b_door_input3");
    let input4 = document.getElementById("b_door_input4");
    let input5 = document.getElementById("b_door_input5");
    let input6 = document.getElementById("b_door_input6");
    let answer1;
    let answer2;
    let answer3;
    let answer4;
    let answer5;
    let answer6;
    try {
        answer1 = parseInt(input1.value);
        answer2 = parseInt(input2.value);
        answer3 = parseInt(input3.value);
        answer4 = parseInt(input4.value);
        answer5 = parseInt(input5.value);
        answer6 = parseInt(input6.value);
        
    } catch (error) {
        alert("The door isn't budging... perhaps I should try a different answer?");
    }

    if(answer1 === 1 && answer2 === 1 && answer3 === 1 && answer4 === 1 && answer5 === 1 && answer6 === 1){
        alert("The door opened!");
        window.location.href = "page_c.html";
    }
    else{
        alert("The door isn't budging... perhaps I should try a different answer?");
    }
}

let b1 = 1;
let b2 = 1;
let b3 = 1;
let b4 = 1;
let b5 = 1;

function new_color(buttonNum, button){
    buttonNum = buttonNum + 1;
    if(buttonNum === 5){
        buttonNum = 1;
    }

    if(buttonNum === 1){
        button.style.background='#000000';
    }
    else if(buttonNum === 2){
        button.style.background='#00ff00';
    }
    else if(buttonNum === 3){
        button.style.background='#0000ff';
    }
    else if(buttonNum === 4){
        button.style.background='#ff0000';
    }
    else if(buttonNum === 5){
        button.style.background='#ffffff';
    }
}

function change_button_1(){
    let button = document.getElementById("a_c_button1");
    b1 = b1 + 1;
    if(b1 === 7){
        b1 = 1;
    }
    if(b1 === 1){
        button.style.background='#ffffff';
    }
    else if(b1 === 2){
        button.style.background='#ff0000';
    }
    else if(b1 === 3){
        button.style.background='#00ff00';
    }
    else if(b1 === 4){
        button.style.background='#0000ff';
    }
    else if(b1 === 5){
        button.style.background='#000000';
    }
    else if(b1 === 6){
        button.style.background='#gf0000';
    }
}

function change_button_2(){
    let button = document.getElementById("a_c_button2");
    b2 = b2 + 1;
    if(b2 === 7){
        b2 = 1;
    }
    if(b2 === 1){
        button.style.background='#ffffff';
    }
    else if(b2 === 2){
        button.style.background='#ff0000';
    }
    else if(b2 === 3){
        button.style.background='#00ff00';
    }
    else if(b2 === 4){
        button.style.background='#0000ff';
    }
    else if(b2 === 5){
        button.style.background='#000000';
    }
    else if(b2 === 6){
        button.style.background='#gf0000';
    }
}

function change_button_3(){
    let button = document.getElementById("a_c_button3");
    b3 = b3 + 1;
    if(b3 === 7){
        b3 = 1;
    }
    if(b3 === 1){
        button.style.background='#ffffff';
    }
    else if(b3 === 2){
        button.style.background='#ff0000';
    }
    else if(b3 === 3){
        button.style.background='#00ff00';
    }
    else if(b3 === 4){
        button.style.background='#0000ff';
    }
    else if(b3 === 5){
        button.style.background='#000000';
    }
    else if(b3 === 6){
        button.style.background='#gf0000';
    }
}

function change_button_4(){
    let button = document.getElementById("a_c_button4");
    b4 = b4 + 1;
    if(b4 === 7){
        b4 = 1;
    }
    if(b4 === 1){
        button.style.background='#ffffff';
    }
    else if(b4 === 2){
        button.style.background='#ff0000';
    }
    else if(b4 === 3){
        button.style.background='#00ff00';
    }
    else if(b4 === 4){
        button.style.background='#0000ff';
    }
    else if(b4 === 5){
        button.style.background='#000000';
    }
    else if(b4 === 6){
        button.style.background='#gf0000';
    }
}

function change_button_5(){
    let button = document.getElementById("a_c_button5");
    b5 = b5 + 1;
    if(b5 === 7){
        b5 = 1;
    }
    if(b5 === 1){
        button.style.background='#ffffff';
    }
    else if(b5 === 2){
        button.style.background='#ff0000';
    }
    else if(b5 === 3){
        button.style.background='#00ff00';
    }
    else if(b5 === 4){
        button.style.background='#0000ff';
    }
    else if(b5 === 5){
        button.style.background='#000000';
    }
    else if(b5 === 6){
        button.style.background='#gf0000';
    }
}

function check_colors(){
    if(b1 === 5 && b2 === 5 && b3 === 5 && b4 === 5 && b5 === 5){
        alert("It opened!");
        window.location.href = "email1wooooooo.html";
    }
    else{
        alert("It's not opening...");
    }
}
