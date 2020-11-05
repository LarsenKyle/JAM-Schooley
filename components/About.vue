<template>
  <main class="content" >
      <img src="../assets/about.png" alt="Image of Marvin Schooley with caught fish.">
      <h2>About Us</h2>
      <p>Our grandpa Marvin Schooley was an amazing man with a passion for ice fishing! He loved making his own jigs and selling them to his co-workers at Gibson Refrigeration aka Frigidaire. He had a dream one night which sparked the idea for the first Spring Bobber Pole. Ice fishing with family and friends became a testing ground for his invention. Everyone was astonished with his prototype and began asking him to make one for them. With an entrepreneur spirit, grandpa applied for his first patent. And, so the business was born! In the 1960s he made improvements to the pole and developed more ice fishing tackle for his customers. Today we keep grandpa's spirit and passion alive by making improvements, introducing new products and keeping the business in the family! I think gramps would be amazed that his inventions are still popular today! Thank you for your interest in our products! Happy Fishing!</p>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '../assets/vari.scss';
.content{
    width: 95vw;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    color: $primary;
    margin-bottom: 120px;
    h2{
        text-decoration: underline;
        margin: 1vh 0;
        font-size: clamp(1.5rem,5vw,2.2rem);
    }
    p{
        font-size: clamp(1.2rem, 3vw, 1.4rem)
    }
    img{
        margin-top: 1.5vh;
        width: 100%;
    }
}
</style>
