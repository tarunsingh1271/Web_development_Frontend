<template>
  <v-container fluid class="navbar">
    <v-row class="align-center justify-space-between">
      <div class="heading">Auth App</div>
      <div>
        <v-btn v-if="!isLoggedIn" to="/login">Login</v-btn>
        <v-btn v-else @click="logout">Logout</v-btn>
      </div>
    </v-row>      
  </v-container>
</template>

<script>
import authStore from "../store/auth"
export default {
    name: 'Navbar',
    data(){
        return {
            isLoggedIn: false,
        }
    },
    beforeMount(){
        this.isLoggedIn = authStore.isLoggedIn();
    },
    methods: {
        logout(){
            authStore.logout()
            this.$router.push({path: '/'})
        }
    }
}
</script>

<style scoped>
.navbar{
    background-color: #2d3436 !important;
    border-radius: 5px;
    padding: 25px;
}
</style>