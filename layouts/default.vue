<template>
  <v-app>
    <div v-if="loading">
      <p>Loading ...</p>
    </div>
    <Nuxt v-if="!loading" />
  </v-app>
 
</template>
<script>
export default {
  data(){
    return{
      loading: true
    }
  },
  mounted(){
    setTimeout( ()=>{this.loading = false},2000)
  }
}
</script>
<style>
.v-application--wrap{
  background-color: #f2f2f2;
} 
html {
  line-height: 1.5;
  font-family:
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  
}

</style>
