<template>
  <div id="app">
    <event @tellParent="tellParent" @hook:mounted="hookmounted"/>
    <observer></observer>
  </div>
</template>

<script>
import Event from './components/Event.vue'
import Observer from './components/Observer.vue'

export default {
  name: 'App',
  components: {
    Event,
    Observer
  },
  methods:{
    tellParent(){
    },
    hookmounted(){
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
