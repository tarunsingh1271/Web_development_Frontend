<template>
  <v-app>
    <Navbar/>
    <Home/>
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Home from '../components/Home.vue'
export default {
  components: {
    Navbar,
    Home
  }
}
</script>

<style lang="stylus" scoped>

</style>
