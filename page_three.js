document.addEventListener('DOMContentLoaded',()=>{
    alert('DOM ready!');
    //console.log("here");
});
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



function drawer_lock(){
    let input1 = document.getElementById("drawer_input1");
    let input2 = document.getElementById("drawer_input2");
    let input3 = document.getElementById("drawer_input3");
    let input4 = document.getElementById("drawer_input4");
    let input5 = document.getElementById("drawer_input5");
    let input6 = document.getElementById("drawer_input6");
    let input7 = document.getElementById("drawer_input7");
    let input7 = document.getElementById("drawer_input8");
    let input7 = document.getElementById("drawer_input9");
    let answer1;
    let answer2;
    let answer3;
    let answer4;
    let answer5;
    let answer6;
    let answer7;
    let answer8;
    let answer9;
    try {
        answer1 = parseInt(input1.value);
        answer2 = parseInt(input2.value);
        answer3 = parseInt(input3.value);
        answer4 = parseInt(input4.value);
        answer5 = parseInt(input5.value);
        answer6 = parseInt(input6.value);
        answer7 = parseInt(input7.value);
        answer8 = parseInt(input8.value);
        answer9 = parseInt(input9.value);
        
    } catch (error) {
        alert("The drawer isn't opening.");
    }

    if(answer1.toLowerCase() === "g" && answer2.toLowerCase() === "o" && answer3.toLowerCase() === "d" && answer4.toLowerCase() === "i" && answer5.toLowerCase() === "s" && answer6.toLowerCase() === "g" && answer7.toLowerCase() === "o" && answer8.toLowerCase() === "o" && answer9.toLowerCase() === "d"){
        alert("The drawer opened!!");
        window.location.href = "email1wooooooo.html";
    }
    else{
        alert("The drawer isn't opening.");
    }
}