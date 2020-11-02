<template>
 <footer>
    <nav class="mobile">
     <div class="navi home">
        <nuxt-link to="/">
         <img src="../../assets/home-icon.svg" alt="House SVG navigates to home">
         </nuxt-link>
         <nuxt-link to="/">Home</nuxt-link>
     </div>
     <div class="navi shop">
        <nuxt-link to="/shop">
          <img src="../../assets/shop-icon.svg" alt="House SVG navigates to home">
          </nuxt-link>
         <nuxt-link to="/shop">Shop</nuxt-link>
     </div>
     <div class="navi about">
       <nuxt-link to="/about">
          <img src="../../assets/about-icon.svg" alt="House SVG navigates to home">
          </nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
     </div>
    </nav>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped >
@import '../../assets/vari.scss';
footer{
  position: fixed;
  bottom: 0;
}
.mobile {
    position: fixed;
    width: 100vw;
    display: flex;
    bottom: 0vh;
    justify-content: space-around;
    font-size: 1.3rem;
    z-index: 1;
    .navi{
      display: flex;
      flex-direction: column;
    }
    img{
      margin-top: 1rem;
    }
  }
a{
  text-decoration: none;
  color:$primary;
}
</style>
