<template>
  <header class="header">
    <div class="content">
      <h1 class="title">Schooley and Sons</h1>
      <img src="../../assets/cart-icon.svg" alt="House SVG navigates to home">
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style  lang="scss" scoped >
@import '../../assets/vari.scss';
.header{
  background-color: $primary;
  width: 100vw;
  .content{
    background-color: $primary;
    display: flex;
    h1{
      background-color: $primary;
      margin-left: 3vw;
    }
    img{
      background-color: $primary;
      margin-left: auto;
      margin-right: 5vw;
    }
  }
}
.title{
  color: #fff;
  font-weight: 400;
}
</style>
