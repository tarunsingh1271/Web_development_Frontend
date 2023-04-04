<template>
  <v-app>
      <v-container class="align-center justify-center">
          {{Status}}
      </v-container>
  </v-app>
</template>

<script>
import authStore from '../store/auth'
export default {
    name: 'Home',
    data(){
        return{
            Status: ''
        }
    },
    beforeMount(){
        if(authStore.isLoggedIn()){
            this.Status = 'LoggedIn'
        }else{
            this.Status = 'LoggedOut'
            console.log('hey');
        }
    }
}
</script>

<style>

</style>