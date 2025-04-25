
function kalkulators() {
    let skaitlis1 = document.getElementById('skaitlis1').value;
    let skaitlis2 = document.getElementById('skaitlis2').value;
    let darbības = document.getElementById('darbības').value;
   
    skaitlis1 = parseFloat(skaitlis1);
    skaitlis2 = parseFloat(skaitlis2);

    if (isNaN(skaitlis1) || isNaN(skaitlis2)) {
        document.getElementById('rezultāts').innerText = "Lūdzu ievadiet derīgus skaitļus!";
        return;
    }
    
    let rezultāts;

    switch (darbības) {
        case "+":
            rezultāts = skaitlis1 + skaitlis2;
            break;
        case "-":
            rezultāts = skaitlis1 - skaitlis2;
            break;
        case "*":
            rezultāts = skaitlis1 * skaitlis2;
            break;
        case "/":
            if (skaitlis2 === 0) {
                rezultāts = "Dalīšana ar nulli nav iespējama!";
            } else {
                rezultāts = skaitlis1 / skaitlis2;
            }
            break;
        default:
            rezultāts = "Neatpazīts operators!";
            break;
    }
    document.getElementById('rezultāts').innerText = "Rezultāts: " + rezultāts;
}

