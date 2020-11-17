<template>
  <header class="header">
    <div class="content">
      <nuxt-link to="/">
        <h1 class="title">Schooley and Sons</h1>
      </nuxt-link>
      <img @click="toggleModalHandler" src="../../assets/cart-icon.svg" alt="Shopping cart icon">
      <div @click="toggleModalHandler" v-if="modal" class="modal">
        <p v-for="item in items" :key="item.title">{{item.title}}</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
data: () =>({
items:[],
token:false,
modal:false
}),
methods:{
  toggleModalHandler(){
    console.log(this.modal)
    this.modal = !this.modal
  }
},
mounted(){
  if(process.browser){
   let cartItems = JSON.parse(localStorage.getItem('cart'))
   this.items = cartItems
  }
}

}
</script>

<style  lang="scss" scoped >
@import '../../assets/vari.scss';
.modal{
  height: 45vh;
  width: 100vw;
  position: fixed;
  background-color: #fff;
  top: 10px;
  
}
.header{
  background-color: $primary;
  width: 100vw;
  .content{
    background-color: $primary;
    display: flex;
    align-items: center;
    h1,a{
      background-color: $primary;
      margin-left: 3vw;
      font-size: clamp(1.5rem, 2vw, 5rem);
      text-decoration: none;
    }
    img{
      background-color: $primary;
      margin-right: 5vw;
      margin:  1rem  5vw  1rem auto;
    }
  }
}
.title{
  color: #fff;
  font-weight: 400;
}
</style>
