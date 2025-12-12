<template>
  <div>
    <Header />
    <main class="grid-parent">
      <ItemCard
        :key="item.id"
        v-for="item in sortedItems"
        :items="items"
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
       //
        //Arctic Blues
        //
        /*
        {
          id: '6118',
          title: 'Arctic Blue Ice Rod 18"',
          description:
            "18 Inch Arctic Blue ice fishing rod",
          price: 13.99,
          image: {
            url: require("~/assets/arctic.png")
          },
          categories: [
            {
              id: 1,
              name: "Arctic Blue",
              catOrder: 1,
              slug: "arcticblue"
            }
          ]
        },
      
       {
          id: '6224',
          title: 'Arctic Blue Ice Rod 24"',
          description:
            "24 inch Arctic Blue Ice fishing Rod",
          price: 15.99,
          image: {
            url: require("~/assets/arctic.png")
          },
          categories: [
            {
              id: 1,
              name: "Arctic Blue",
              catOrder: 1,
              slug: "arcticblue"
            }
          ]
        },
       
        {
          id: '6330',
          title: 'Arctic Blue Ice Rod 30"',
          description:
            "30 inch Arctic Blue Ice fishing Rod",
          price: 16.99,
          image: {
            url: require("~/assets/arctic.png")
          },
          categories: [
            {
              id: 1,
              name: "Arctic Blue",
              catOrder: 1,
              slug: "arcticblue"
            }
          ]
        },
       */
        {
          id: '6336',
          title: 'Arctic Blue Ice Rod 36"',
          description:
            "36 inch Arctic Blue Ice fishing Rod",
          price: 17.99,
          image: {
            url: require("~/assets/arctic.png")
          },
          categories: [
            {
              id: 1,
              name: "Arctic Blue",
              catOrder: 1,
              slug: "arcticblue"
            }
          ]
        },
        {
          id: '6442',
          title: 'Arctic Blue Ice Rod 42"',
          description:
            "Arctic Blue Ice fishing Rod",
          price: 19.99,
          image: {
            url: require("~/assets/arctic.png")
          },
          categories: [
            {
              id: 1,
              name: "Arctic Blue",
              catOrder: 1,
              slug: "arcticblue"
            }
          ]
        },
       
        //
        //Spring Bobber Pole
        //
        {
          id: '1321',
          title: 'Spring Bobber Pole 21"',
          color: true,
          description:
            "Fish at any depth with this complete fishing outfit. The fishing outfit includes a bobber, line and lure that can detect any bite.",
          price: 13.99,
          image: {
            url: require("~/assets/products/springBobberPole.jpg")
          },
          categories: [
            {
              id: 2,
              name: "Spring Bobber Pole",
              catOrder: 2,
              slug: "springbobberpole"
            }
          ]
        },
        {
          id: '1126',
          title: 'Spring Bobber Pole 26"',
          color: true,
          description:
            "Fish at any depth with this complete fishing outfit. The fishing outfit includes a bobber, line and lure that can detect any bite.",
          price: 13.99,
          image: {
            url: require("~/assets/products/springBobberPole.jpg")
          },
          categories: [
            {
              id: 2,
              name: "Spring Bobber Pole",
              catOrder: 2,
              slug: "springbobberpole"
            }
          ]
        },
        {
          id: '1540',
          title: 'Spring Bobber Pole 40"',
          color: true,
          description:
            "Fish at any depth with this complete fishing outfit. The fishing outfit includes a bobber, line and lure that can detect any bite.",
          price: 14.99,
          image: {
            url: require("~/assets/products/springBobberPole.jpg")
          },
          categories: [
            {
              id: 2,
              name: "Spring Bobber Pole",
              catOrder: 2,
              slug: "springbobberpole"
            }
          ]
        },
        //Delux Bobber Pole
        {
          id: '3321wg',
          title: 'Deluxe Bobber Pole 21"',
          color: true,
          description:
            "Schooley’s New Deluxe Bobber Poles come with a crafted wood handle. Fish at any depth with this complete fishing outfit. The fishing outfit includes bobber, line and lure that can detect any bite.",
          price: 14.49,
          image: {
            url: require("~/assets/products/springBobberPole.jpg")
          },
          categories: [
            {
              id: 3,
              name: "Deluxe Bobber Pole",
              catOrder: 3,
              slug: "deluxebobberpole"
            }
          ]
        },
        {
          id: '3126wg',
          title: 'Deluxe Bobber Pole 26"',
          color: true,
          description:
            "Schooley’s New Deluxe Bobber Poles come with a crafted wood handle. Fish at any depth with this complete fishing outfit. The fishing outfit includes bobber, line and lure that can detect any bite.",
          price: 14.49,
          image: {
            url: require("~/assets/products/springBobberPole.jpg")
          },
          categories: [
            {
              id: 3,
              name: "Deluxe Bobber Pole",
              catOrder: 3,
              slug: "deluxebobberpole"
            }
          ]
        },
        {
          id: '3540wg',
          title: 'Deluxe Bobber Pole 40"',
          color: true,
          description:
            "Schooley’s New Deluxe Bobber Poles come with a crafted wood handle. Fish at any depth with this complete fishing outfit. The fishing outfit includes bobber, line and lure that can detect any bite.",
          price: 15.49,
          image: {
            url: require("~/assets/products/springBobberPole.jpg")
          },
          categories: [
            {
              id: 3,
              name: "Deluxe Bobber Pole",
              catOrder: 3,
              slug: "deluxebobberpole"
            }
          ]
        },
        //Reels Hooks
        {
          id: '1000',
          title: "De-Ma-Reel",
          color: true,
          shipping: true,
          description:
            "The De-Ma-Reel is molded nylon and very durable.This straight-line reel can be used on any ice fishing pole. Used by the Olympic Ice Fishing Team!",
          price: 6.49,
          image: {
            url: require("~/assets/products/dereel.jpg")
          },
          categories: [
            {
              id: 4,
              name: "Reels Hooks Ect",
              catOrder: 4,
              slug: "reelshooksect"
            }
          ]
        },
        {
          id: '4',
          title: "Schooley Balanced Hook",
          shipping: true,
          description:
            "Schooley's Balanced Hooks & Divers are equipped with a size 10 bronze hook and painted & hand dotted. These provide plenty of action & are real fish getters!",
          price: 0.99,
          image: {
            url: require("~/assets/noimg.png")
          },
          categories: [
            {
              id: 4,
              name: "Reels Hooks Ect",
              catOrder: 4,
              slug: "reelshooksect"
            }
          ]
        },
        {
          id: '11',
          title: "Schooley Diver #1",
          shipping: true,
          description:
            "Schooley's Balanced Hooks & Divers are equipped with a size 10 bronze hook and painted & hand dotted. These provide plenty of action & are real fish getters!",
          price: 0.99,
          image: {
            url: require("~/assets/noimg.png")
          },
          categories: [
            {
              id: 4,
              name: "Reels Hooks Ect",
              catOrder: 4,
              slug: "reelshooksect"
            }
          ]
        },
        {
          id: '22',
          title: "Schooley Diver #2",
          shipping: true,
          description:
            "Schooley's Balanced Hooks & Divers are equipped with a size 10 bronze hook and painted & hand dotted. These provide plenty of action & are real fish getters!",
          price: 0.99,
          image: {
            url: require("~/assets/noimg.png")
          },
          categories: [
            {
              id: 4,
              name: "Reels Hooks Ect",
              catOrder: 4,
              slug: "reelshooksect"
            }
          ]
        },
        //Bobbers
        {
          id: '19',
          title: "Clip On Bobber",
          shipping: true,
          description:
            "Schooley’s Clip on Sring Bobber is steel and sensitive to every bite. This bobber never touches water, and never freezes in water. It’s ideal for use from a boat or on the ice.",
          price: 3.29,
          image: {
            url: require("~/assets/products/clipOn.jpg")
          },
          categories: [
            {
              id: 5,
              name: "Bobbers",
              catOrder: 5,
              slug: "bobbers"
            }
          ]
        },
        {
          id: '18b',
          title: "Original Spring Bobbers",
          shipping: true,
          description:
            "Schooley’s Original Sring Bobber is steel and sensitive to every bite. This bobber never touches water, and never freezes in water. It’s ideal for use from a boat or on the ice.",
          price: 2.49,
          image: {
            url: require("~/assets/products/springBobber.jpg")
          },
          categories: [
            {
              id: 5,
              name: "Bobbers",
              catOrder: 5,
              slug: "bobbers"
            }
          ]
        },    
        {
          id: '23',
          title: "Cork Screw Bobber",
          shipping: true,
          description:
            "Schooley’s Corkscrew Bobber is a more sensitive bobber that can detect any bite. It slides on the pole for different action.",
          price: 2.99,
          image: {
            url: require("~/assets/products/corkScrew.jpg")
          },
          categories: [
            {
              id: 5,
              name: "Bobbers",
              catOrder: 5,
              slug: "bobbers"
            }
          ]
        },
        {
          id: '28',
          title: "Sniders Slip On Bobber",
          shipping: true,
          description:
            "Snider's Tackle #1 Slip On Spring Bobber. Twin Wire with lite wire tip. Plastic Clip or slip on collar. Now sold by Schooley's",
          price: 2.99,
          image: {
            url: require("~/assets/products/Sniders.jpg")
          },
          categories: [
            {
              id: 5,
              name: "Bobbers",
              catOrder: 5,
              slug: "bobbers"
            }
          ]
        },
        {
          id: '29',
          title: "Sniders Replacment Bobber",
          shipping: true,
          description:
            "Snider's Tackle #1 Slip On Spring Bobber. Twin Wire with lite wire tip. Plastic Clip or slip on collar. Now sold by Schooley's",
          price: 2.99,
          image: {
            url: require("~/assets/products/Sniders.jpg")
          },
          categories: [
            {
              id: 5,
              name: "Bobbers",
              catOrder: 5,
              slug: "bobbers"
            }
          ]
        },
        {
          id: '22',
          title: "The Bullet Bobber",
          shipping: true,
          description:
            "Press rubber stop into the end eyelet of your pole. Great bobber style for any rod. Great action!",
          price: 2.99,
          image: {
            url: require("~/assets/products/bulletBobber.jpg")
          },
          categories: [
            {
              id: 5,
              name: "Bobbers",
              catOrder: 5,
              slug: "bobbers"
            }
          ]
        },
        {
          id: '15',
          title: "Depth Marker Pin",
          shipping: true,
          description:
            "Schooley’s Depth Marker Reel Pins are a sturdy plastic pin. They easily insert into your De-Ma-Reel to stop payout of line at the same depth each time. These are available in red, yellow and green.",
          price: 0.29,
          image: {
            url: require("~/assets/products/depthMarker.jpg")
          },
          categories: [
            {
              id: 4,
              name: "Reels Hooks Ect",
              catOrder: 4,
              slug: "reelshooksect"
            }
          ]
        }
      ],
      allItems: [],
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
  mounted() {
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
          newItem.color = item.color
          newItem.shipping = item.shipping
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
};
</script>

<style scoped lang="scss">
.grid-parent {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin-top: 5rem;
}
</style>
