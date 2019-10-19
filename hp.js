
//spells

console.log(document.getElementById('spellsSelect').value);

let url = 'https://www.potterapi.com/v1/';
let key = '?key=$2a$10$GlYXGsJ1HN3C9WHPRuE5Mud3M4pIngss6FoMYWSPxqlPuW7b6K9Vu';

function mostrarSpell() {


    let urlSpells = `${url}spells${key}`;
    window.fetch(urlSpells)

        .then(cogerDatos)
        .then(mostrarDatos)
}

function cogerDatos(respuesta) {
    return respuesta.json()
}

function mostrarDatos(spells) {
    let encontrado = false;

    for (i = 0; i < spells.length; i++) {
        if (document.getElementById('spellsSelect').value.toLowerCase() === spells[i].spell.toLowerCase()) {
            document.getElementById("spellDescription").innerHTML = `${spells[i].effect}`;
            encontrado = true;
        }
        if (encontrado === false) {

            document.getElementById("spellDescription").innerHTML = 'Muggles not allowed';
        }
    }

}

//spells

//house

let housesLotery;

function sortingHat() { //nombre aleatorio de la casa 

    let houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
    housesLotery = houses[Math.floor(Math.random() * houses.length)];

    let urlHouses = `${url}houses${key}`; //url para casas
    window.fetch(urlHouses)
        .then(cogerDatos)
        .then(mostrarDatosCasa)
}

function cogerDatosCasa(respuesta) {
    return respuesta.json()
}


function mostrarDatosCasa(finalHouses) {

    if (housesLotery === 'Gryffindor') {
        document.getElementById("houseCard").innerHTML = `<p>Congratulations you are a ${finalHouses[0].name} member! Gryffindor,
        Where dwell the brave at heart,
        Their daring, nerve, and chivalry
        Set Gryffindors apart" </p>
        <p>The mascot of the house is the ${finalHouses[0].mascot}</p>
        <p>The head of the house is: ${finalHouses[0].headOfHouse}</p>
        <p>The house ghost is: ${finalHouses[0].houseGhost}</p>
        <p>The founder of the house is: ${finalHouses[0].founder}
        <p>The values of the house are: ${finalHouses[0].values[0]}, ${finalHouses[0].values[1]}, ${finalHouses[0].values[2]} and ${finalHouses[0].values[3]}
        </p>`;
        
    } else if (housesLotery === 'Ravenclaw') {
        document.getElementById("houseCard").innerHTML = `<p>Congratulations you are a ${finalHouses[1].name} member!  
        "Or yet in wise old Ravenclaw,
        If you've a ready mind, Where those of wit and learning,Will always find their kind."</p>
        <p>The mascot of the house is the ${finalHouses[1].mascot}</p>
        <p>the head of the house is: ${finalHouses[1].headOfHouse}</p>
        <p>The ghost is: ${finalHouses[1].houseGhost}</p>
        <p>The founder is: ${finalHouses[1].founder}
        <p>The values of the house are: ${finalHouses[1].values[0]}, ${finalHouses[1].values[1]},
         ${finalHouses[1].values[2]} and ${finalHouses[1].values[3]}
        </p>`;
    } else if (housesLotery === 'Slytherin') {
        document.getElementById("houseCard").innerHTML = `<p>Congratulations you are a ${finalHouses[2].name} member! 
        "Slytherin, You'll make your real friends, Those cunning folk use any means, To achieve their ends."</p>
        <p>The mascot of the house is the the ${finalHouses[2].mascot}</p>
        <p>The head of the house is: ${finalHouses[2].headOfHouse}</p>
        <p>The ghost is: ${finalHouses[2].houseGhost}</p>
        <p>The founder is: ${finalHouses[2].founder}</p>
        <p>The values of the house are: ${finalHouses[2].values[0]}, ${finalHouses[2].values[1]},
        ${finalHouses[2].values[2]} and ${finalHouses[2].values[3]}
       </p>`;
    } else {
        document.getElementById("houseCard").innerHTML = `<p>Congratulations you are a ${finalHouses[3].name} member! 
        "Hufflepuff,
        Where they are just and loyal,
        Those patient Hufflepuffs are true,
        And unafraid of toil." </p>
        <p>The mascot of the house is the  ${finalHouses[3].mascot}</p>
        <p>The head of the house is: ${finalHouses[3].headOfHouse}</p>
        <p>The ghost is: ${finalHouses[3].houseGhost}</p>
        <p>The founder of the house is: ${finalHouses[3].founder}</p>
        <p>The values of the house are: ${finalHouses[3].values[0]}, ${finalHouses[3].values[1]},
        ${finalHouses[3].values[2]} and ${finalHouses[3].values[3]}
       </p>`;
    }
    
}
//personajes

let characterName = document.getElementById('nombrePersonaje').value;


function findCharacters() {//función para buscar todos los personajes en la api

    let urlCharacters = `${url}characters${key}`; 
    characterName = document.getElementById('nombrePersonaje').value;

    window.fetch(urlCharacters)
        .then(cogerDatosCharacters)
        .then(showCharacters)

}

function cogerDatosCharacters(answer) {
    return answer.json()
}


function showCharacters(characterList) { //buscar personaje especifico y escribir ficha

    let encontrado = false;
    let characterElement = document.getElementById('characterCard');
    let characterText = '';

    for (let i = 0; i < characterList.length; i++) {

        if (characterName.toLowerCase() === characterList[i].name.toLowerCase()) {

            characterText +=
                ` <p> Name ${characterList[i].name} <p>
            <p> Role: ${characterList[i].role} <p>
            <p> House: ${characterList[i].house}<p>
            <p> Species: ${characterList[i].species}<p>`;

            characterText += `<button onclick="guardarFavorito('${characterList[i].name}')">Add</button>`;
            encontrado = true;

        }
    }
    if (encontrado === false) {
        characterText += 'Sorry.Muggle error!. ';
        // document.getElementById('characterCard').innerHTML= 'Sorry. Muggle error!';
    }
    characterElement.innerHTML = characterText;
    characterElement.style.display = 'block';
}

function guardarFavorito(nombreDePersonaje) { //función para guardar personajes favoritos en localStorage
    let arrayNombres = JSON.parse(window.localStorage.getItem('favorito'));
    if (arrayNombres === null) {
        arrayNombres = [];
    }
    console.log(arrayNombres);
    arrayNombres.push(nombreDePersonaje)
    window.localStorage.setItem('favorito', JSON.stringify(arrayNombres));
}
















// function buscar() {
//     let houseName = document.getElementById('yourHouse').value;
//     let urlHouse = `${url}houses/${houseName}${key}`;

//     fetch(urlHouse)
//         .then(function (respuesta) {
//             return respuesta.json();
//         })
//         .then(function (datos) {
//             showHouses(datos.results);
//         })
// }

// function showHouses(houses) {
//     // let elementHouse = document.getElementById('houseCard');
// console.log(houses.name)

    // elementHouse.innerHTML = texto;












