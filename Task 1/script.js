/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function calc() {
    let kg = document.getElementById('search').value
    let lb, g, oz = null

    lb = kg * 2.2046
    g = kg / 0.0010000
    oz = kg * 35.274

    document.getElementById('output').innerHTML = 'lb: ' + lb + ', g: ' + g + ', oz: ' + oz
}
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    calc()
});