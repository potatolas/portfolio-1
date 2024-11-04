<template>
  <TheNavBar></TheNavBar>
  <RouterView/>
  <div class="text-sm mb-4 text-center opacity-50">This page is built using Vue 3.</div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue';

export default {
  name: 'App',
  components: {
    TheNavBar
  },
}
</script>
