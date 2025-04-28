let num1 = '';
let num2 = '';
let operator = '';
let result = '';
//oznaczenie operatorów i liczb dla wywodu na ekran 

function addNumber(number) {
    if (operator == '') {
        num1 += number;
        document.getElementById('screen').value = addCommas(num1);
    } else {
        num2 += number;
        document.getElementById('screen').value = addCommas(num2);
    }
}
//funkcja wywodu cyfr i operatorów na ekran

function addOperator(op) {
    console.log('addOperator called with operator:', op);
    operator = op;
}
//wskazania operatorów dla ich dalniejszego wywołania 

function calculate() {
    switch (operator) {
        case '+':
            result = parseInt(num1.replace(/,/g, '')) + parseInt(num2.replace(/,/g, ''));
            break;
        case '-':
            result = parseInt(num1.replace(/,/g, '')) - parseInt(num2.replace(/,/g, ''));
            break;
        case '*':
            result = parseInt(num1.replace(/,/g, '')) * parseInt(num2.replace(/,/g, ''));
            break;
        case '/':
            result = parseInt(num1.replace(/,/g, '')) / parseInt(num2.replace(/,/g, ''));
            break;
    }
    document.getElementById('screen').value = addCommas(result);
}
//funkcja obliczenia 

function clearScreen() {
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    document.getElementById('screen').value = '';
}
// funkcja ścierania wszystkiego z ekranu kalkulatora

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//dodanie przycinków po każdej trzeciej liczbie
//było zrobione za pomocą filmików na youtube