<template>
  <div id="app">
    <event @tellParent="tellParent" @hook:mounted="hookmounted"/>
    <observer></observer>
    <!-- 测试vuCount -->
    <compile></compile>
    <!-- <compile></compile> -->
    <vnode></vnode>
  </div>
</template>

<script>
import Event from './components/Event.vue'
import Observer from './components/Observer.vue'
import Compile from './components/Compile.vue'
import Vnode from './components/Vnode.vue'

export default {
  name: 'App',
  components: {
    Event,
    Observer,
    Compile,
    Vnode
  },
  data(){
    return {
      render:'',
      staticRender:''
    }
  },
  mounted(){
    // 会报错
    // const res=Vue.compile(Compile) 
    // this.render=this.deal(res.render)
    // this.staticRender=res.staticRenderFns.map(e=>this.deal(e.toString()))
    
    console.log(this)
  },
  methods:{
    deal(str){
      return str.replace(/(\{\n)(\S)/, "$1  $2")
    },
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
