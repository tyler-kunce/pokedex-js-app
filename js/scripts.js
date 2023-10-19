//Pokedex List
let pokemonRepository = (function() {
    let pokemonList = [
        {number: '#1', name: 'Bulbasaur', height: 0.7, type: ['Grass', 'Poison']},
        {number: '#2', name: 'Ivysaur', height: 1, type: ['Grass', 'Poison']},
        {number: '#3', name: 'Venusaur', height: 2, type: ['Grass', 'Poison']},
        {number: '#4', name: 'Charmander', height: 0.6, type: 'Fire'},
        {number: '#5', name: 'Charmeleon', height: 1.1, type: 'Fire'},
        {number: '#6', name: 'Charizard', height: 1.7, type: ['Fire', 'Flying']},
        {number: '#7', name: 'Squirtle', height: 0.5, type: 'Water'},
        {number: '#8', name: 'Wartortle', height: 1, type: 'Water'},
        {number: '#9', name: 'Blastoise', height: 1.6, type: 'Water'}
    ];

        function getAll() {
            return pokemonList;
        }

        function add(pokemon) {
            pokemonList.push(pokemon);
        }

        return {
            getAll: getAll,
            add: add
        }
    
})();

//Ex1.5 Part 2-5
pokemonRepository.getAll().forEach(function(pokemon) {
    document.write("<p>" + pokemon.number + " " + pokemon.name + " (height: " + pokemon.height + ") " + "</p>");
});

//Ex1.5 Part 1
// pokemonList.forEach(function(pokemon) {
//     document.write("<p>" + pokemon.number + " " + pokemon.name + " (height: " + pokemon.height + ") " + "</p>");
// });

//Part 1: for loop that writes each Pokemon's number, name, and height to DOM
//Part 3b: integrated Part 1 and Part 3a
// for (let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height > 1.8){
//         document.write("<p>" + pokemonList[i].number + " " + pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "That's a big pokemon! | " + "</p>")
//     } else if (pokemonList[i].height < 1.8 && pokemonList[i].height > 1){
//         document.write("<p>" + pokemonList[i].number + " " + pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "That's an average pokemon | " + "</p>")
//     } else {
//         document.write("<p>" + pokemonList[i].number + " " + pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "That's a small pokemon | " + "</p>")
//     }
// };

//Part 3a: conditional loop to evaluate Pokemon height
/* if (pokemonList.height > 1.8){
    document.write("That's a big pokemon!")
} else if (pokemonList.height < 1.8 && pokemonList.height > 1){
    document.write("That's an average pokemon")
} else {
    document.write("That's a small pokemon")
} */