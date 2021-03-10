<template>
 <footer>
    <nav class="mobile">
     <div class="navi home">
        <nuxt-link to="/contact">
         <img src="../../assets/contact-icon.svg" alt="House SVG navigates to home">
         </nuxt-link>
         <nuxt-link to="/contact">Contact</nuxt-link>
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
  z-index: 1000;
}
.mobile {
    position: fixed;
    width: 100vw;
    display: flex;
    bottom: 0vh;
    justify-content: space-around;
    background-color: #f2f2f2;
    font-size: 1.3rem;
    z-index: 1000;
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
  color:$primary !important;
}
@media only screen and (min-width: 1000px){
  footer{
    display: none;
  }
}
</style>
