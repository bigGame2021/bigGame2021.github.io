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
        window.open("a_pg1_bible_quotes.html");
    }
    else{
        alert("Hmm... that doesn't seem to be the right answer.");
    }
}

function a_door_lock(){
    let input1 = document.getElementById("a_door_input1");
    let input2 = document.getElementById("a_door_input2");
    let input3 = document.getElementById("a_door_input3");
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

    if(answer1 === 3 && answer2 === 1 && answer3 === 9){
        alert("The door opened!");
        window.open("dialogue2apoi.html");
    }
    else{
        alert("The door isn't budging... perhaps I should try a different answer?");
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
        window.location.href = "dialogue2bqwerty.html";
    }
    else{
        alert("The door isn't budging... perhaps I should try a different answer?");
    }
}
