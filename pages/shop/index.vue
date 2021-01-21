<template> 
<div>
  <Header/>
    <main class="grid">
      <div  :key="category.name" v-for="category in categories" class="categoryCard">
      <img  :src="category.image" alt="">
      <h3>{{category.name}}</h3>
      <nuxt-link :to="`/shop/${category.slug}`">
        <Btn class="w" :text="'Shop'"/>
      </nuxt-link>
  </div>
  </main>
  <Nav />
  <Footer/>
</div>
</template>

<script>
import categoriesQuery from '~/apollo/queries/categories';
export default {
  head: {
    title: 'Shop Schooley Ice Tackle',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Shop for the ice fishing equiptment you need'
      }
    ],
  },
    data(){
        return{
            categories:[
              {
                name: 'Arctic Blue',
                slug: 'arcticblue',
                image: require('~/assets/arctic.png')
              },
              {
                name: 'Spring Bobber Pole',
                slug: 'springbobberpole',
                image: require('~/assets/products/springBobberPole.jpg')
              },
              {
                name: 'Reels Hooks Etc.',
                slug: 'reelshooksect',
                image: require('~/assets/products/dereel.jpg')
              },
              {
                name: 'Bobbers',
                slug: 'bobbers',
                image: require('~/assets/products/clipOn.jpg')
              },
              {
                name: 'Deluxe Bobber Pole',
                slug: 'deluxebobberpole',
                image: require('~/assets/products/springBobberPole.jpg')
              },
            ],
            loading: true
        }
    }
}
</script>

<style scoped lang="scss">
@import '~/assets/vari.scss';
a{
  text-decoration: none !important;
  cursor: pointer;
}

.grid{
  display: grid;
  margin-bottom: 120px;
  padding: 1rem;
  grid-template-columns: 1fr 1fr;

}
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