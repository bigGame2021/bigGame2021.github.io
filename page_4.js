
function door_lock(){
    let input = document.getElementById("b_door_input1").value;
    if(input.toLowerCase() === "jesus loves you" | input.toLowerCase() === "jesuslovesyou"){
        alert("The door opened. Freedom here we come!");
        window.open("FINALE_YAY.html");
    }
    else{
        alert("The door isn't budging...");
    }
}