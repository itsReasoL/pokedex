<template>
<div class="container">
     <!-- <p>{{maVariable}}</p>
      <span>{{compteur}}</span>
      <br>
      <br>
      <input type="text" v-model="firstName">
      <br>
      <span v-if="firstName != ''">
        bonjour {{ firstName }}
        </span>
        <span v-else>Merci d'entrer votre prenom </span>
  <br>
      <button v-on:click="direBonjour"> Bonjour </button>-->


  
  <div v-for=" (p, index) in pokemons" v-bind:key="index" id="hubcases">
    <router-link v-bind:to="'/pokemons/' + p.id">
    <h1>
      
      <div class="hubimg">
      <img v-bind:src="p.sprite" class="static" >
      <img v-bind:src="p.animate" class="animate">
      </div>

      <!-- V-bind permet d'exploiter le javascript 
      src designe la source de l'image    -->

      <br>
      {{p.name}}

    </h1>
    </router-link>
  </div>
  
</div>

</template>


<style scoped>
li{
  list-style-type: none;
}
</style>


<script>

import { PokemonService } from '../services/pokemonService.js'

export default {
  name: 'Demo',
 
  data(){
    return{
      maVariable: "Bonjour",
      compteur : 0,
      firstName : "",
      pokemons: [
      
      ],
      service: new PokemonService
    }
  },
  methods:{
direBonjour(){
  alert("Bonjour " + this.firstName)
}
  },
  created(){
    console.log('created')
  },
  mounted(){
    //cette fonction sera appele lorsque le composant est pret a lemploi
    //alert('composant pret'),
    
this.service.getPokemons().then(pokemons=>{
  this.pokemons = pokemons
})

  }
}


</script>


<style scoped>
.container {
   display: flex;
   flex-wrap: wrap;}
rout-link{
  margin: 1%;
}

.hubimg{
  height: 100px;
  margin: auto;
  display: grid;
}

.hubimg:hover .static{
  display:none
}

.hubimg:hover .animate{
  display:unset
}

.static{
  margin: auto;
}

.animate{
  display:none;
  margin:auto
}

h1{
  font-size: 1em;
}
#hubcases{
  width: 16%;
}
</style>