<template>
  <header class="header">
    <div class="content">
      <nuxt-link to="/">
        <h1 class="title">Schooley and Sons</h1>
      </nuxt-link>
      <div class="shop-icon">
         <nuxt-link to="/checkout">
        <v-icon v-if="$store.state.cartItems">mdi-circle</v-icon>
        <img
          @click="dialog = true"
          src="../../assets/cart-icon.svg"
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
    if (process.browser && !this.$store.state) {
      this.$store.dispatch("getItems");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/vari.scss";
.header {
  background-color: $primary;
  width: 100vw;
  .content {
    background-color: $primary;
    display: flex;
    align-items: center;
    h1,
    a {
      background-color: $primary;
      margin-left: 3vw;
      font-size: clamp(1.5rem, 2vw, 4.5rem) !important;
      text-decoration: none;
    }
    img {
      background-color: $primary;
    }
  }
}
.shop-icon {
  position: relative;
  margin-right: 5vw;
  margin: 1rem 5vw 1rem auto;
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
</style>
