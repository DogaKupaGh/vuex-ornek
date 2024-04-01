
<template>
  <div id="app">
  <p>{{$store.state.sayac}}</p>
  <button @click="artir">artır </button>
  <button @click="artirMutations">artır </button>
  <button @click="artiractionİle">action </button>

  <p>sayacı göster {{$store.getters.getCounter}}</p>
  <p>sayacı sıfırla  {{$store.getters.sayacIncrements}}</p>
  
  </div>
  </template>
  
  <script>
  
  export default {
    name: 'App',
    methods : {
      artir() {
        this.$store.state.sayac++;
      },
      artirMutations(){
        this.$store.commit('artirParametreile', 10)
      },
      artiractionİle(){
        this.$store.dispatch('stateIncrements', 20)
      }
    }
    
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>