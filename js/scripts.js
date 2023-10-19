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
