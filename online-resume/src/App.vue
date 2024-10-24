<template>
  <TheNavBar></TheNavBar>
  <RouterView/>
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
