const input = document.querySelector("#inputPokemon")
const button = document.querySelector("#buton")
const pokemonContainer = document.querySelector(".pokemon-container")

button.addEventListener('click', e =>{
    e.preventDefault();
    traerPokemon(input.value);
})

function traerPokemon(pokemon) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => res.json())
    .then(data => {
        crearPokemon(data);
    });
}


function crearPokemon(pokemon)
{
    const img = document.getElementById('imgpoke');
    img.src = pokemon.sprites.front_default;

    const pnombre = document.getElementById('pnombre');
    pnombre.textContent = pokemon.name;
}

