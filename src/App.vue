<template>
  <div id="app">
    <router-link to="/form">form</router-link>|
    <router-link to="/checkbox">checkbox</router-link>|
    <router-link to="/radio">radio</router-link>|
    <router-link to="/display">display</router-link>|
    <router-link to="/alert">alert</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
