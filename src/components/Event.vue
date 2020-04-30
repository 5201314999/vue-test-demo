<!--
Description vue._events 事件的观察
@authors fanjiongrong (fanjiongrong@tvflnet.com)
@date    2020-04-30 09:30:41
@version 1.0.0
-->
<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
  export default {
      data(){
          return {
              msg:'Power'
          }
      },
      mounted(){
        console.log(this)
      }
  }
</script>

<style lang="scss" scoped>
  
</style>
