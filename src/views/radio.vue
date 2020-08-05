<template>
  <div>
    <h3>组合单选框组件——RadioGroup & Radio</h3>
    <i-radio v-model="single">{{single}}</i-radio>
    <br />
    <i-radio-group v-model="multiple">
      <i-radio label="option1">选项 1</i-radio>
      <i-radio label="option2">选项 2</i-radio>
      <i-radio label="option3">选项 3</i-radio>
      <i-radio label="option4">选项 4</i-radio>
    </i-radio-group>
    数据：{{ multiple }}
  </div>
</template>

<script>
import iRadio from '../components/radio/radio.vue';
import iRadioGroup from '../components/radio/radio-group.vue';

export default {
  components: { iRadio, iRadioGroup },
  data() {
    return {
      single: false,
      multiple: ['option1']
    };
  }
};
</script>