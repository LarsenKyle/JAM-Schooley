<template>
  <main class="content">
      <img src="../assets/main.png" alt="Image of a snowey cabin">
      <h2>Ice Fishing with Arctic Blue</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed sint aperiam unde blanditiis dolorem.</p>
      <img src="../assets/arctic.png" alt="Image of arctic blue ice fishing rod">
      <button class="btn" >Shop Now</button>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped >
@import '../assets/vari.scss';
.content{
    width: 95vw;
    margin: 0 auto;
    text-align: center;
    color: $primary;
    margin-bottom: 120px;
    img{
        margin-top: 2.5vh;
    }
}
.btn{
    display: block;
    margin: auto;
    background-color: $primary;
    border: none;
    color: #fff;
    border-radius: 5px;
    padding: 1rem 2rem;
    margin-top: 1rem;
}
</style>
