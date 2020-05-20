<!--
Description
@authors fanjiongrong (fanjiongrong@tvflnet.com)
@date    2020-05-19 15:03:07
@version 1.0.0
-->
<template>
  <div>
      <div class="wrapper">
          <span>我是用来查看vnode,_render(),parent,children, ,学习vnode 内部属性，vnode 3种种类的</span>
          <!-- 不受template 的影响，继续创建vnode 对应dom 树-->
          <template v-if="isShow">
              <div> 111</div>
          </template>
           <template v-else>
              <div> 2223</div>
          </template>
      </div>
  </div>
</template>

<script>
  export default {
      data(){
        return {
          isShow:true
        }
      },
      beforeCreate(){
          console.log(this)
      }
  }
</script>

<style lang="scss" scoped>
  
</style>
