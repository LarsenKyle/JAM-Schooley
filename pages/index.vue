<template>
 <div class="layout">
    <Header/>
    <div class="hero-img">
      <img class="hero" src="../assets/mainBg.png" alt="Image of a snowey cabin">
      <img class="hero-mobile" src="../assets/mainMobile.png" alt="Image of a snowey cabin">
      <h1 class="hero-heading" >Quality Tackle for Quality Fishing</h1>
     </div>
     <div class="feature">
      <v-divider class="mt-10 mb-10"></v-divider>
      <h2>Featured Item</h2>

      <div class="categoryCard">
      <img  src="~/assets/arctic.png" alt="Arcit Blue Ice Rod">
      <h3>Arctic Blue Ice Rod</h3>
      <nuxt-link :to="`/shop/arcticblue`">
        <Btn class="w" :text="'Shop Now'"/>
      </nuxt-link>
    </div>
      </div>

  <Nav />
  <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '../assets/vari.scss';
.feature{
  text-align: center;
  color: $primary;
  width: 95vw;
  margin: 0 auto;
}
.hero-mobile{
  display: none;
}
.hero-img{
  position: relative;
  background-size: cover;
 
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
  color:#fff;
  padding: 1rem;
}
.content{
    width: 95vw;
    border-radius: 5px;
    padding: 2rem 1.5rem;
    max-width: 1500px;
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
a{
  text-decoration: none;
}
.categoryCard{
  margin: 0 auto;
  text-align: center;
  margin-top: 2rem;
  max-width: 300px;
  margin-bottom: 120px;
  h3{
    font-weight: 400;
    color: $primary;
    font-size: clamp(1rem, 2vw, 4rem);
  }
  img{
    width: 30vw;
    max-width: 300px;

  }
  .w{
    width: 30vw;
    max-width: 300px;
  }
}
@media (max-width: 1240px) { 
  .categoryCard{
    img{
      width:80vw;
    }
    .w{
      width:40vw;
    }
  }
 }
@media only screen and (max-width: 1000px){
  .hero{
    display: none;
  }
  .hero-mobile{
    display: initial;
    width: 100vw;
    
  }
  .hero-heading{
    top: 20%;
    right: 0%;
    text-align: center;
  }
}
</style>
