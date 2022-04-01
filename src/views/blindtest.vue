<template>
<div class="conteneur">


    <h1>
    Quel est ce pokémon ?
    </h1>
    <br>
    <h2>
    score : 0
    </h2>
    <br>

    <img src="" alt="" id="secretboi">

    <br>


    <button id="poke1">pokemon1</button>
    <button id="poke2">pokemon2</button>
    <button id="poke3">pokemon3</button>
    <button id="poke4">pokemon4</button>



</div>
</template>

<style>

#secretboi{
    filter: brightness(0%);
}

</style>


<script>

import { PokemonService } from '../services/pokemonService.js'

export default {
  name: 'blindtest',
 
  data(){
    return{
      pokemons: [      ],
      service: new PokemonService
    }
  },
  created(){
    console.log('created')
  },
  mounted(){
    //cette fonction sera appelé lorsque le composant est prêt à l'emploi
    //alert('composant prêt'),
    
this.service.getPokemons().then(pokemons=>{
  this.pokemons = pokemons
})

let i

let fourPokemon = [ ];

for (i = 0; i<4; i++){ //récupère 4 chiffre aléatoire

let randomNumber = Math.floor(Math.random() * 386)

fourPokemon.unshift(randomNumber)

console.log(fourPokemon)

}




  },


}





</script>