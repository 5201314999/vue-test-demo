<!--
Description 响应式模块例子
@authors fanjiongrong (fanjiongrong@tvflnet.com)
@date    2020-04-30 09:35:17
@version 1.0.0
-->
<template>
  <div @click="test">
    Hello, World!
    {{person.name}}
  </div>
</template>

<script>
  export default {
    data(){
      return {
        person:{
          name:'jr',
          age:26
        }
      }
    },
    mounted(){
      // 获取对象属性的自有属性
      console.log(Object.getOwnPropertyDescriptor(this.person,'name'))
      console.log(this)
    },
    methods:{
      test(){
        this.name='jj'
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
