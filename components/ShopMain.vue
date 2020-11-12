<template> 
    <main class="grid">
        <CategoryCard :key="category.id" v-for="category in categories" :slug="category.slug" :image="category.image.url" :name="category.name" />
    </main>
</template>

<script>
import categoriesQuery from '~/apollo/queries/categories';
export default {
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
.grid{
    margin-bottom: 120px;
    display:grid;
    grid-template-columns: 1fr 1fr;
}
</style>