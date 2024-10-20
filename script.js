document.getElementById('submit').addEventListener('click', calculatePrice);

function calculatePrice() {
    let price = 100;

    let education = document.getElementById('education').value;
    let educationCoeff = 1;
    if (education === 'bachelor') educationCoeff = 1.5;
    else if (education === 'college') educationCoeff = 1.2;
    else if (education === 'high_school') educationCoeff = 1.05;
    else if (education === 'middle_school') educationCoeff = 0.9;

    let networth = document.getElementById('networth').value;
    let networthCoeff = 1;
    if (networth === 'upper_class') networthCoeff = 2;
    else if (networth === 'middle_class') networthCoeff = 1.5;
    else if (networth === 'lower_class') networthCoeff = 1.2;

    price *= educationCoeff;
    price *= networthCoeff;

    let caste = document.querySelector('input[name="caste"]:checked').value;
    if (caste === 'brahmin') price += 100;
    else if (caste === 'kshatriya') price += 50;
    else if (caste === 'vaishya') price += 20;
    else if (caste === 'shudra') price += 10;
    else if (caste === 'varna') price -= 50;

    if (document.getElementById('musical').checked) price += 10;
    if (document.getElementById('cook').checked) price += 20;
    if (document.getElementById('easygoing').checked) price += 15;
    if (document.getElementById('singer').checked) price += 10;

    let age = document.querySelector('input[name="age"]:checked').value;
    let ageCoeff = 1;
    if (age === '18-23') ageCoeff = 1.5;
    else if (age === '24-27') ageCoeff = 1.2;
    else if (age === '28+') ageCoeff = 0.95;

    price *= ageCoeff;

    if (document.getElementById('parents').checked) price *= 0.85;
    if (document.getElementById('character').checked) price *= 0.9;
    if (document.getElementById('general').checked) price -= 20;

    document.getElementById('result').innerText = 'The final price is $' + price.toFixed(2);

    document.body.style.backgroundColor = "#ffeb3b";
    document.querySelector('.container').style.borderColor = '#000';
    document.querySelector('h1').innerText = 'Final Price Calculated';
}
