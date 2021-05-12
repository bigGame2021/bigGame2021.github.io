
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

    if(answer1 === 7 && answer2 === 2 && answer3 === 1 && answer4 === 9 && answer5 === 6 && answer6 === 8 && answer7 === 3){
        alert("The door opened!");
        window.open("dialogue3ahaha_im_so_tired_its_2AM.html");
    }
    else{
        alert("The door isn't budging... perhaps I should try a different answer?");
    }
}


function b_door_lock(){
    let answer1 = document.getElementById("b_door_input1").value;
    let answer2 = document.getElementById("b_door_input2").value;
    let answer3 = document.getElementById("b_door_input3").value;
    let answer4 = document.getElementById("b_door_input4").value;
    let answer5 = document.getElementById("b_door_input5").value;
    let answer6 = document.getElementById("b_door_input6").value;

    if(answer1.toLowerCase() === "t" && answer2.toLowerCase() === "h" && answer3.toLowerCase() === "b" && answer4.toLowerCase() === "m" && answer5.toLowerCase() === "j" && answer6.toLowerCase() === "f"){
        alert("The door opened!");
        window.open("dialogue3b_ah_yes_more_dialogue.html");
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
c1 = "#ce6ed7";
c2 = "#d8d06f";
c3 = "#a66fd8";
c4 = "#d9876d";
c5 = "#6fced9";
c6 = "#6ed86f";
c7 = "#6f82d8";
c8 = "#d96d94";


function change_button_1(){
    let button = document.getElementById("a_c_button1");
    b1 = b1 + 1;
    if(b1 === 9){
        b1 = 1;
    }
    if(b1 === 1){
        button.style.background=c1;
    }
    else if(b1 === 2){
        button.style.background=c2;
    }
    else if(b1 === 3){
        button.style.background=c3;
    }
    else if(b1 === 4){
        button.style.background=c4;
    }
    else if(b1 === 5){
        button.style.background=c5;
    }
    else if(b1 === 6){
        button.style.background=c6;
    }
    else if(b1 === 7){
        button.style.background=c7;
    }
    else if(b1 === 8){
        button.style.background=c8;
    }
}

function change_button_2(){
    let button = document.getElementById("a_c_button2");
    b2 = b2 + 1;
    if(b2 === 9){
        b2 = 1;
    }
    if(b2 === 1){
        button.style.background=c1;
    }
    else if(b2 === 2){
        button.style.background=c2;
    }
    else if(b2 === 3){
        button.style.background=c3;
    }
    else if(b2 === 4){
        button.style.background=c4;
    }
    else if(b2 === 5){
        button.style.background=c5;
    }
    else if(b2 === 6){
        button.style.background=c6;
    }
    else if(b2 === 7){
        button.style.background=c7;
    }
    else if(b2 === 8){
        button.style.background=c8;
    }
}

function change_button_3(){
    let button = document.getElementById("a_c_button3");
    b3 = b3 + 1;
    if(b3 === 9){
        b3 = 1;
    }
    if(b3 === 1){
        button.style.background=c1;
    }
    else if(b3 === 2){
        button.style.background=c2;
    }
    else if(b3 === 3){
        button.style.background=c3;
    }
    else if(b3 === 4){
        button.style.background=c4;
    }
    else if(b3 === 5){
        button.style.background=c5;
    }
    else if(b3 === 6){
        button.style.background=c6;
    }
    else if(b3 === 7){
        button.style.background=c7;
    }
    else if(b3 === 8){
        button.style.background=c8;
    }
}

function change_button_4(){
    let button = document.getElementById("a_c_button4");
    b4 = b4 + 1;
    if(b4 === 9){
        b4 = 1;
    }
    if(b4 === 1){
        button.style.background=c1;
    }
    else if(b4 === 2){
        button.style.background=c2;
    }
    else if(b4 === 3){
        button.style.background=c3;
    }
    else if(b4 === 4){
        button.style.background=c4;
    }
    else if(b4 === 5){
        button.style.background=c5;
    }
    else if(b4 === 6){
        button.style.background=c6;
    }
    else if(b4 === 7){
        button.style.background=c7;
    }
    else if(b4 === 8){
        button.style.background=c8;
    }
}

function change_button_5(){
    let button = document.getElementById("a_c_button5");
    b5 = b5 + 1;
    if(b5 === 9){
        b5 = 1;
    }
    if(b5 === 1){
        button.style.background=c1;
    }
    else if(b5 === 2){
        button.style.background=c2;
    }
    else if(b5 === 3){
        button.style.background=c3;
    }
    else if(b5 === 4){
        button.style.background=c4;
    }
    else if(b5 === 5){
        button.style.background=c5;
    }
    else if(b5 === 6){
        button.style.background=c6;
    }
    else if(b5 === 7){
        button.style.background=c7;
    }
    else if(b5 === 8){
        button.style.background=c8;
    }
}

function check_colors(){
    if(b1 === 8 && b2 === 4 && b3 === 6 && b4 === 5 && b5 === 3){
        alert("It opened!");
        window.location.href = "email1wooooooo.html";
    }
    else{
        alert("It's not opening...");
    }
}
