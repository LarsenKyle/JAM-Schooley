<template>
  <div class="container">
    <Header/>
    <div v-if="items.length > 0">
      <div :key="item.id" v-for="item in items" >
        <h1>{{item.title}}</h1>
        <img :src="api_url + item.image.url" alt="">
      </div>
    </div>
    <Nav />
  </div>
</template>
<script>
import itemsQuery from '../../apollo/queries/items'
export default {
  data () {
    return {
      items: [],
      api_url: process.env.strapiBaseUri
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

<style>

</style>
