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
                name: 'Reels Hooks Ect.',
                slug: 'reelshooksect',
                image: require('~/assets/products/dereel.jpg')
              },
              {
                name: 'Bobbers',
                slug: 'bobbers',
                image: require('~/assets/products/clipOn.jpg')
              },
              {
                name: 'Delux Bobber Pole',
                slug: 'deluxbobberpole',
                image: require('~/assets/products/springBobberPole.jpg')
              },
            ],
            loading: true
        }
    }
}
</script>

<style scoped lang="scss">
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

</style>