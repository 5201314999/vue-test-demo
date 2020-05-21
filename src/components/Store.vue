<!--
Description
@authors fanjiongrong (fanjiongrong@tvflnet.com)
@date    2020-05-21 16:28:18
@version 1.0.0
-->
<template>
  <div style="border:1px solid red">
    学习vuex 源码,数据绑定本身也是借助了vue 实例。
    <name>{{$store.state.programeName}}</name>
    <button @click="change">切换名字</button>
  </div>
</template>

<script>
  export default {
      name:'NStore',
      methods:{
        change(){
            this.$store.commit('setProgrameName','落魄山上陈平安，前期当猪后期挂神')
            // 借助vue 实现响应式数据,template 的变量也不仅仅只是普通变量，然而因为data（） 中做了响应式实现，You 牛比啊，而vuex 是通过vue 来实现
            console.log(this.$store._vm)
        }
      }
  }
</script>

<style lang="scss" scoped>
  
</style>
