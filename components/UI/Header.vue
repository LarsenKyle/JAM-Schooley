<template>
  <header class="header">
    <div class="content">
      <h1 class="title">Schooley and Sons</h1>
      <img @click="log" src="../../assets/cart-icon.svg" alt="Shopping cart icon">
    </div>
  </header>
</template>

<script>
export default {
methods:{
  log(){
    console.log('click')
  }
}
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
