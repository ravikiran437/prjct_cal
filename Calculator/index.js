function appendToDisplay(value) {
    // Select the element with id 'display'
    var display = document.getElementById('display');
    
    // Check if the element exists
    if (display !== null) {
        // Append the value to the display's value
        display.value += value;
    } else {
        console.error('Element with id "display" not found');
    }
}

function clearDisplay(){
    display.value="";

}

function calculate(){
    try{
    display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
}
