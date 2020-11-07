<template>
  <div id="app">
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    // HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="postcss" scoped>
#app {
 width: 100%;
 height: 100%;
}
</style>
