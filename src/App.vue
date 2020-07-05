<template>
  <div id="app">
    <router-link to="/form">form</router-link>
    <router-link to="/">/</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
