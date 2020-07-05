<!-- 组件说明 -->
<template>
  <div>
    <label v-if="label">{{label}}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  //import x from ''
  export default {
    name:'iFormItem',
    props:{
      label:{
        type: String,
        default:''
      },
      prop:{
        type: String
      }
    }
  }
</script>