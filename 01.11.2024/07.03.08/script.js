function getNumberInput(message) {
    let input;
    do {
        input = prompt(message);
        if (input === null || input.trim() === "") {
            console.error("Invalid input! Please enter a number.");
        } else {
            input = parseFloat(input);
        }
    } while (isNaN(input));
    return input;
}

let a = getNumberInput("Enter variable a");
let b = getNumberInput("Enter variable b");
console.log(typeof(a)); // izvada mainiga a t
console.log(typeof(b));
let result;
let turpinat = true;
while (turpinat) {
    let operators = prompt("Enter operators: ");
    switch (operators) {
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            if (b !== 0)
                 {
                result = a / b;
            } else {
                console.error("Division by zero error!");
                result = null;
            }
            break;

        case "^":
            result = a ** b;
            break;

        case "!":
            result = 1;
            for (let i = 1; i <= a; i++) {
                result *= i;
            }
            break;

        default:
            console.error("Invalid operator!");
            result = null;
            turpinat = false;
            break;
    }

    if (result !== null) {
        console.log("Result: ", result);
    }

    turpinat = confirm("Do you want to continue?");
    if (turpinat) {
        a = getNumberInput("Enter variable a");
        b = getNumberInput("Enter variable b");
    }
}



