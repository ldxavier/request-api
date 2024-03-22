<template>
  <h1>{{ listPokemons }}</h1>
  <div>
    <span v-for="(pokemon,index) in getPokemons || []" :key="index">
  <div class="lista">
    <h3>{{ pokemon.name }}</h3> {{ pokemon.url }}
  </div>
</span>
  </div>
</template>

<script setup lang="ts">
import { usePokemonStore } from '@/stores/pokemon';
import { computed, onMounted, ref } from 'vue';

const listPokemons = ref<string>('List of pokemons');
const store = usePokemonStore();

const getPokemons = computed (() => {
  return store.getPokemons;
});

onMounted(() => {
  store.fetchPokemons();
});

</script>

<style scoped>
  .lista {
    background-color: rgb(91, 182, 112);
    width: 40%;
    margin: auto;
    border: solid 1px black;
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 10px;

  }

</style>
