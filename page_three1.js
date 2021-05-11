
document.addEventListener('DOMContentLoaded',()=>{
    alert('DOM ready!');
    //console.log("here");
});

function a_chest_lock(){
    let input1 = document.getElementById("a_chest_input1");
    let input2 = document.getElementById("a_chest_input2");
    let input3 = document.getElementById("a_chest_input3");
    let input4 = document.getElementById("a_chest_input4");
    let answer1;
    let answer2;
    let answer3;
    let answer4;
    try {
        answer1 = parseInt(input1.value);
        answer2 = parseInt(input2.value);
        answer3 = parseInt(input3.value);
        answer4 = parseInt(input4.value);
        
    } catch (error) {
        alert("Hmm... that doesn't seem to be the right answer.");
    }

    if(answer1 === 5 && answer2 === 4 && answer3 === 6 && answer4 === 3){
        alert("The chest opened!");
        window.location.href="a_pg1_bible_quotes.html";
    }
    else{
        alert("Hmm... that doesn't seem to be the right answer.");
    }
}

function a_door_lock(){
    let input1 = document.getElementById("a_door_input1").value;
    let input2 = document.getElementById("a_door_input2").value;
    let input3 = document.getElementById("a_door_input3").value;
    let input4 = document.getElementById("a_door_input4").value;
    let input5 = document.getElementById("a_door_input3").value;
    let input6 = document.getElementById("a_door_input4").value;

    if(input1.toLowerCase() === "q" && input2.toLowerCase() === "q" && input3.toLowerCase() === "q" && input4.toLowerCase() === "q" && input5.toLowerCase() === "q" && input6.toLowerCase() === "q"){
        alert("The door opened!");
        window.open("dialogue4four.html");
    }
    else{
        alert("The door isn't opening.. perhaps I should try a different answer?");
    }
}


function b_cupboard_lock(){
    let input1 = document.getElementById("b_cupboard_input1");
    let input2 = document.getElementById("b_cupboard_input2");
    let input3 = document.getElementById("b_cupboard_input3");
    let answer1;
    let answer2;
    let answer3;
    try {
        answer1 = parseInt(input1.value);
        answer2 = parseInt(input2.value);
        answer3 = parseInt(input3.value);
        
    } catch (error) {
        alert("Hmm... perhaps I should try a different answer?")
    }

    if(answer1 === 6 && answer2 === 7 && answer3 === 4){
        alert("The cupboard opened!");
        window.location.href = "b_pg1_bible_quotes.html";
    }
    else{
        alert("Hmm... perhaps I should try a different answer?")
    }
}

function b_door_lock(){
    let input1 = document.getElementById("b_door_input1");
    let input2 = document.getElementById("b_door_input2");
    let input3 = document.getElementById("b_door_input3");
    let answer1;
    let answer2;
    let answer3;
    try {
        answer1 = parseInt(input1.value);
        answer2 = parseInt(input2.value);
        answer3 = parseInt(input3.value);
        
    } catch (error) {
        alert("The door isn't budging... perhaps I should try a different answer?");
    }

    if(answer1 === 5 && answer2 === 2 && answer3 === 9){
        alert("The door opened!");
        window.open("dialogue2bqwerty.html");
    }
    else{
        alert("The door isn't budging... perhaps I should try a different answer?");
    }
}


function drawer_lock(){
    let input1 = document.getElementById("drawer_input1").value;
    let input2 = document.getElementById("drawer_input2").value;
    let input3 = document.getElementById("drawer_input3").value;
    let input4 = document.getElementById("drawer_input4").value;
    let input5 = document.getElementById("drawer_input5").value;
    let input6 = document.getElementById("drawer_input6").value;
    let input7 = document.getElementById("drawer_input7").value;
    let input8 = document.getElementById("drawer_input8").value;
    let input9 = document.getElementById("drawer_input9").value;
    if(input1.toLowerCase() === "g" && input2.toLowerCase() === "o" && input3.toLowerCase() === "d" && input4.toLowerCase() === "i" && input5.toLowerCase() === "s" && input6.toLowerCase() === "g" && input7.toLowerCase() === "o" && input8.toLowerCase() === "o" && input9.toLowerCase() === "d"){
        alert("The drawer opened!!");
        window.location.href = "email1wooooooo.html";
    }
    else{
        alert("The drawer isn't opening.");
    }
}



function shady_lock(){
    let food = document.getElementById("shady_inputFood").value;
    let garlic1 = document.getElementById("shady_inputGarlic").value;
    let milk1 = document.getElementById("shady_inputMilk").value;
    let salt1 = document.getElementById("shady_inputSalt").value;
    let garlic;
    let milk;
    let salt;
    try {
        garlic = parseInt(garlic1);
        milk = parseInt(milk1);
        salt = parseInt(salt1);
        
    } catch (error) {
        alert("He looks at the food uninterested.");
    }

    if(food.toLowerCase()==="rendang" && garlic === 3 && milk === 2 && salt === 1){
         alert("Shady tradesman happily takes the food! He hands you a piece of paper and starts eating.");
         window.location.href = "email1wooooooo.html";
    }
    else{
        alert("He looks at the food uninterested.");
    }
}