<template>
 <div class="layout">
    <Header/>
    <div class="hero-img">
      <img class="hero" src="../assets/mainBg.png" alt="Image of a snowey cabin">
      <img class="hero-mobile" src="../assets/mainMobile.png" alt="Image of a snowey cabin">
      <h1 class="hero-heading" >Tagline Text Here</h1>
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
.hero-mobile{
  display: none;
}
.hero-img{
  position: relative;
  background-size: cover;
  margin-bottom: -8px;
 
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
@media only screen and (max-width: 1000px){
  .hero{
    display: none;
  }
  .hero-mobile{
    display: initial;
    width: 100vw;
    margin-bottom: -8px;
    
  }
}
</style>
