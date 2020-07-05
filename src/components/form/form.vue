<!-- 组件说明 -->
<template>
  <div>
    <form>
      <slot></slot>
    </form>
  </div>
</template>

<script>
  export default {
    name:'iForm',
    props:{
      model:{
        type: Object
      },
      rules:{
        type: Object
      }
    }
  }
</script>