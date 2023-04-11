/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const userElement = document.createElement("p");
            userElement.textContent = user.login;
            document.getElementById('output').appendChild(userElement)
        });
    })
    .catch(error => console.error(error));
})