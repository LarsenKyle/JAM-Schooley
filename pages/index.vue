<template>
 <div class="layout">
    <Header/>
    <div class="hero-img">
      <img class="hero" src="../assets/mainBg.png" alt="Image of a snowey cabin">
      <h1 class="hero-heading" >Some Text Goes Here</h1>
    </div>
    <v-divider class="divide" ></v-divider>
     <main class="content pb-3">
      <h2>Get ready with the Arctic Blue Ice Rod</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed sint aperiam unde blanditiis dolorem.</p>
      <img src="../assets/arctic.png" alt="Image of arctic blue ice fishing rod">
      <nuxt-link class="mb-2" to="/shop/arcticblue"> 
        <Btn :text="'Shop Now'"/>
      </nuxt-link>
   </main>
  <Nav />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '../assets/vari.scss';
.hero-img{
  position: relative;
}
.divide{
  margin: 4rem 2rem;
}
.hero{
  width:100vw;
}
.hero-heading{
   position: absolute;
    top: 30%;
    right: 10%;
    color: #fff;
}
.content{
    width: 80vw;
    margin: 0 auto;
    text-align: center;
    color: $primary;
    margin-bottom: 120px;
    background-color: #fff;
    a{
        text-decoration: none;
    }
    img{
        margin-top: 2.5vh;
        
    }
}
.layout{
  display: block;
}
</style>
