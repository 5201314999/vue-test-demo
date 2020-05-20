<!--
Description 了解了下，无法顺利测试Vue.compile()
@authors fanjiongrong (fanjiongrong@tvflnet.com)
@date    2020-05-11 17:04:05
@version 1.0.0
-->
<template>
  <div>
    {{message}}
    <!-- 测试注释，无法查看，webpack 打包时默认被过滤掉 -->
    <span>我是固定的</span>
  </div>
</template>

<script>
  export default {
      data(){
        return {
            message:'模板编译',
        }
      },
      created(){
        //打印出vue 的render 
        console.log(this._render())
      },
      mounted(){
        console.log('vmCount'+this.$data.__ob__.vmCount)
      }
  }
</script>

<style lang="scss" scoped>
  
</style>
