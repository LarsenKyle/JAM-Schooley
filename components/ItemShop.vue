<template>
  <main class="grid-parent">
     <ItemCard  :key="item.id" v-for="item in sortedItems" :items="allItems" :item="item" />
  </main>
</template>

<script>
import itemsQuery from '~/apollo/queries/items'
export default {
    data(){
        return{
            items:[],
            allItems:[],
            sortedItems:[],
            routeParam: this.$route.params.slug,
        }
    },
    watch: {
      items: function(val,oldVal){
        this.allItems.push(val)
        let size = []
        let price = []
        let newItem = {}
        let result = {};
        this.items.forEach(item => {
       if(item.categories[0].slug === this.routeParam){
         if(item.title.slice(-1) === '"'){
         let title = item.title.slice(0, -3)
         size.push(item.title)
         price.push(item.price)
         newItem.id = item.id
         newItem.title = title
         newItem.desc = item.description
         newItem.image = item.image.url
         newItem.size = size
         newItem.price = price
         
         }else{
           item.image = item.image.url
           this.sortedItems.push(item)
         }
        
       }   
      })
      this.sortedItems.push(newItem)
      }
    },
    apollo: {
    items: {
      prefetch: true,
      query: itemsQuery 
    }
  }


}
</script>

<style scoped lang="scss">
.grid-parent{
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr))
}
</style>