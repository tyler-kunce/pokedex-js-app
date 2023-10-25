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

        function addListItem(pokemon) {
            let pokedex = document.querySelector(".pokemon-list");
            let listItem = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add("pokemon-button");
            listItem.appendChild(button);
            pokedex.appendChild(listItem);
            button.addEventListener('click', function() {
                showDetails(pokemon);
            });
        }

        function showDetails(pokemon) {
            console.log(pokemon);
        }

        return {
            getAll: getAll,
            add: add,
            addListItem: addListItem
        }

    
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});
