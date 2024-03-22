import axios from "axios";
import { defineStore } from "pinia";
import type { IPokemon } from "@/types/ipokemon";

export const usePokemonStore = defineStore("pokemon",{
  state:() => ({
    pokemons: [] as IPokemon[],
  }),

  getters: {
    getPokemons(state) {
      return state.pokemons;
    },

  },

  actions: {
    async fetchPokemons() {
      try {
        const pokeData = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=200')
        this.pokemons = pokeData.data.results
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },

})
