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
  h3{
    font-weight: 400;
    color: $primary
  }
  img{
    width: 50vw;
  }
  .w{
    width: 50vw;
  }
}
</style>
