<template>
  <div class="categoryCard">
      <img  :src="strapiBaseUri + image" alt="">
      <h3>{{name}}</h3>
      <nuxt-link :to="`/shop/${slug}`">
        <Btn class="w" :text="'Shop'"/>
      </nuxt-link>
  </div>
</template>

<script>
export default {
  props:['name','image','slug'],
  data(){
    return{
      strapiBaseUri: process.env.strapiBaseUri
    }
  }
  
}

</script>

<style scoped lang="scss">
@import '../../../assets/vari.scss';
.categoryCard{
  margin: auto;
  text-align: center;
  margin-top: 2rem;
  h3{
    font-weight: 400;
    color: $primary;
    font-size: clamp(1.2rem, 2vw, 4rem);
  }
  img{
    width: 30vw;
  }
  .w{
    width: 30vw;
  }
}
@media (max-width: 1240px) { 
  .categoryCard{
    img{
      width:40vw;
    }
    .w{
      width:40vw;
    }
  }
 }
</style>
