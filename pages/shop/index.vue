<template> 
<div>
  <Header/>
  <main class="grid">
    <CategoryCard :key="category.id" v-for="category in categories" :slug="category.slug" :image="category.image.url" :name="category.name" />
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
            categories:[]
        }
    },
    apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  },
  mounted(){
      this.categories.sort((a, b) => (a.catOrder > b.catOrder) ? -1 : 1)
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