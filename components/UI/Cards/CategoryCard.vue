<template>
  <div class="categoryCard">
      <img  :src="image" alt="">
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
a{
  text-decoration: none;
}
.categoryCard{
  margin: auto;
  text-align: center;
  margin-top: 4rem;
  max-width: 300px;
  h3{
    font-weight: 400;
    color: $primary;
    font-size: clamp(1rem, 2vw, 4rem);
  }
  img{
    width: 30vw;
    max-width: 300px;

  }
  .w{
    width: 30vw;
    max-width: 300px;
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
