import axios from "axios"
import { Pokemon } from "../models/pokemons";


export class PokemonService{

constructor(){


//cette fonction sert à intégrer les caratéristique du pokemon dans sa variable "pokemon"
}
getPokemon(id){
    return new Promise((resolve, reject) =>{
        axios.get("https://pokeapi.co/api/v2/pokemon/"+id).then(response =>{
            //On stock les données json du pokemon dans la variable pokemondata
            let pokemondata = response.data;
           
            
            //On créer un nouveau pokemon
            console.log(pokemondata)
            let pokemon = new Pokemon()
             //On lui affecte les caractéristique voulu
            pokemon.base_experience = pokemondata.base_experience
            pokemon.sprite = pokemondata.sprites.front_default
            pokemon.name = pokemondata.name
            pokemon.hp = pokemondata.stats[0].base_stat
            pokemon.defense = pokemondata.stats[1].base_stat
            pokemon.attack = pokemondata.stats[2].base_stat
            pokemon.special_attack = pokemondata.stats[3].base_stat
            pokemon.special_defense = pokemondata.stats[4].base_stat
            pokemon.speed= pokemondata.stats[5].base_stat
            pokemon.abilities= pokemondata.abilities
            pokemon.types= pokemondata.types
            pokemon.sound = "https://www.pokebip.com/audio/cris-sl/"+id+".mp3"
           
            //On appelle "resolve" afin de résoudre la promesse et déclancher le .then
            resolve(pokemon)
        })
        .catch(reason =>{
            reject("erreur dans la récuperation des données" + reason)
        })
    })
}

getPokemons(){
    return new Promise((resolve, reject) =>{
        let pokemons = []


        axios.get('https://pokeapi.co/api/v2/pokemon?limit=386').then(response => {
            console.log(response)
            let result = response.data.results;
            result.forEach(p => {
                
                let substrings = p.url.split("/")
                let id = substrings[substrings.length - 2];
                p.id = id;
                p.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ id +".png";
                p.animate = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"+id+".gif"
                pokemons.push(p)
            })
            resolve(pokemons)
        })
        .catch(reason =>{
            reject("erreur dans la récuperation des données" + reason)
        })
        
    })



}


}
