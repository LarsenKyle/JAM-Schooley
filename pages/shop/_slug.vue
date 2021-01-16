<template>
<div>
  <Header/>
    <main class="grid-parent">
      <ItemCard
        :key="item.id"
        v-for="item in sortedItems"
        :items="allItems"
        :item="item"
      />
    </main>
  <Nav />
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Arctic Blue Ice Rod 18"',
          description: 'Comes with a cork handle and reel rings. The blank is light blue with a fluorescent red tip for visibility, and has a hook keeper. The rods are ultra light for sensitivity and fast action. Comes in 5 different lengths',
          price: 12.99,
          image:  {
              url: require('~/assets/arctic.png'),   
            },
          categories: [
            {
              id: 1,
              name: 'Arctic Blue',
              catOrder: 1,
              slug: 'arcticblue',
            }
          ]
        },
        {
          id: 1,
          title: 'Arctic Blue Ice Rod 24"',
          description: 'Comes with a cork handle and reel rings. The blank is light blue with a fluorescent red tip for visibility, and has a hook keeper. The rods are ultra light for sensitivity and fast action. Comes in 5 different lengths',
          price: 13.99,
          image:  {
              url: require('~/assets/arctic.png'),   
            },
          categories: [
            {
              id: 1,
              name: 'Arctic Blue',
              catOrder: 1,
              slug: 'arcticblue',
            }
          ]
        },
        {
          id: 1,
          title: 'Arctic Blue Ice Rod 30"',
          description: 'Comes with a cork handle and reel rings. The blank is light blue with a fluorescent red tip for visibility, and has a hook keeper. The rods are ultra light for sensitivity and fast action. Comes in 5 different lengths',
          price: 15.50,
          image:  {
              url: require('~/assets/arctic.png'),   
            },
          categories: [
            {
              id: 1,
              name: 'Arctic Blue',
              catOrder: 1,
              slug: 'arcticblue',
            }
          ]
        },
        {
          id: 1,
          title: 'Arctic Blue Ice Rod 36"',
          description: 'Comes with a cork handle and reel rings. The blank is light blue with a fluorescent red tip for visibility, and has a hook keeper. The rods are ultra light for sensitivity and fast action. Comes in 5 different lengths',
          price: 16.99,
          image:  {
              url: require('~/assets/arctic.png'),   
            },
          categories: [
            {
              id: 1,
              name: 'Arctic Blue',
              catOrder: 1,
              slug: 'arcticblue',
            }
          ]
        },
        {
          id: 1,
          title: 'Arctic Blue Ice Rod 42"',
          description: 'Comes with a cork handle and reel rings. The blank is light blue with a fluorescent red tip for visibility, and has a hook keeper. The rods are ultra light for sensitivity and fast action. Comes in 5 different lengths',
          price: 17.99,
          image:  {
              url: require('~/assets/arctic.png'),   
            },
          categories: [
            {
              id: 1,
              name: 'Arctic Blue',
              catOrder: 1,
              slug: 'arcticblue',
            }
          ]
        },
],
      allItems: [
        
      ],
      sortedItems: [],
      routeParam: this.$route.params.slug
    };
  },
  watch: {
    items: function(val, oldVal) {
      this.allItems.push(val);
      let size = [];
      let price = [];
      let newItem = {};
      let result = {};
      this.items.forEach(item => {
        if (item.categories[0].slug === this.routeParam) {
          if (item.title.slice(-1) === '"') {
            let title = item.title.slice(0, -3);
            size.push(item.title);
            price.push(item.price);
            newItem.id = item.id;
            newItem.title = title;
            newItem.description = item.description;
            newItem.image = item.image.url;
            newItem.size = size;
            newItem.price = price;
          } else {
            item.image = item.image.url;
            this.sortedItems.push(item);
          }
        }
      });
      this.sortedItems.push(newItem);
    }
  },
  mounted(){
     let size = [];
      let price = [];
      let newItem = {};
      let result = {};
      this.items.forEach(item => {
        if (item.categories[0].slug === this.routeParam) {
          if (item.title.slice(-1) === '"') {
            let title = item.title.slice(0, -3);
            size.push(item.title);
            price.push(item.price);
            newItem.id = item.id;
            newItem.title = title;
            newItem.description = item.description;
            newItem.image = item.image.url;
            newItem.size = size;
            newItem.price = price;
          } else {
            item.image = item.image.url;
            this.sortedItems.push(item);
          }
        }
      });
      this.sortedItems.push(newItem);
      console.log(newItem)
  }
};
</script>

<style scoped lang="scss">
.grid-parent {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin-top: 5rem;
}
</style>
