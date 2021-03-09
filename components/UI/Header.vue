<template>
  <header class="header">
    <div class="content">
      <nuxt-link to="/">
        <h1 class="title">Schooley Ice Tackle</h1>
      </nuxt-link>
      <div class="desktop-links mt-1">
        <nuxt-link to="/shop">
          <p>Shop</p>
        </nuxt-link>
        <nuxt-link to="/about">
          <p>About</p>
        </nuxt-link>
        <nuxt-link to="/contact">
          <p>Contact</p>
        </nuxt-link>
      </div>
      <div class="shop-icon">
         <nuxt-link to="/checkout">
        <img
          v-if="!$store.state.cartItems"
          @click="dialog = true"
          src="../../assets/cart-icon.svg"
          alt="Shopping cart icon and link"
        />
        <img
          v-if="$store.state.cartItems"
          @click="dialog = true"
          src="../../assets/full-cart.svg"
          alt="Shopping cart icon and link"
        />
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    items: [],
    token: false,
    dialog: false
  }),
  mounted() {
    if (process.browser && !this.$store.state.items) {
      this.$store.dispatch("getItems");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/vari.scss";
h1{
        font-size: clamp(1.5rem, 2vw, 4.5rem) !important;
    }
   
h1,
a {
      background-color: $primary;
      color: #fff !important;
      margin-left: 3vw;
      text-decoration: none;
    }
img {
      background-color: $primary;
    }
.desktop-links{
     padding-top: 12px;
     margin-left: auto;
     display: flex;
     flex-direction: row;
   }
.header {
  background-color: $primary;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 3;
  
}
.content {
    background-color: $primary;
    display: flex;
    align-items: center;
    
  }
.shop-icon {
  position: relative;
  margin-right: 5vw;
  padding-top: 12px;
  i {
    position: absolute;
    top: -30%;
    left: 50%;
    color: #cc5500;
  }
}
.title {
  color: #fff;
  font-weight: 400;
}
@media only screen and (max-width: 1000px){
  .desktop-links{
    display: none;
  }
  .shop-icon{
    margin-left: auto !important;
  }
}
</style>
