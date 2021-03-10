<template>
  <v-footer class="foot">
     <p>13700 14 Mile Rd NE, Greenville, MI 48838</p> 
     <p>(616) 754-3266</p>
     <p>schooleytackle@gmail.com</p>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '../../assets/vari.scss';
.foot{
    color: white !important;
    display: flex;
    flex-direction: column;
    background-color: $primary !important;
    height: 110px;
    p{
        margin-bottom: 5px;
    }
}
</style>