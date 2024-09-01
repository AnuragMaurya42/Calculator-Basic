// Function to update the display with the button value
function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '0';
}

// Function to evaluate the expression in the display
function evaluateExpression() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Individual functions for each button
function func0() { appendToDisplay('0'); }
function func1() { appendToDisplay('1'); }
function func2() { appendToDisplay('2'); }
function func3() { appendToDisplay('3'); }
function func4() { appendToDisplay('4'); }
function func5() { appendToDisplay('5'); }
function func6() { appendToDisplay('6'); }
function func7() { appendToDisplay('7'); }
function func8() { appendToDisplay('8'); }
function func9() { appendToDisplay('9'); }
function func10() { clearDisplay(); }  
function func11() { evaluateExpression(); }  
function func12() { appendToDisplay('+'); }
function func13() { appendToDisplay('-'); }
function func14() { appendToDisplay('*'); }
function func15() { appendToDisplay('/'); }
