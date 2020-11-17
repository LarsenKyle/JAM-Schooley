<template>
<div v-if="item.title" class="container">
  <div class="card">
    <h3>{{item.title}}</h3>
      <img @click="clear" :src="strapiBaseUri + item.image" alt="">
      <p>{{item.desc}}</p>
      <div v-if="item.size" class="select-form">
        <v-select @change="getPrice" v-model="selected" v-if="item.size" :items="item.size" label="Select Size"></v-select>
      </div>
      <p v-if="item.size" >Price: {{price}}</p>
      <p v-if="!item.size">Price: ${{item.price}}</p>
      <div class="flex">
        <div class="form__group field">
          <input type="number" class="form__field" v-model="qty" />
          <label for="name" class="form__label">Qty</label>
        </div>
      </div>
      <Btn @click="addTooCart(item.title,item.price)" :text="'Add to Cart'" />
  </div>
</div>
</template>

<script>
export default {
props:['item','items'],

data:()=>({
    strapiBaseUri: process.env.strapiBaseUri,
    selected: '',
    price: 'Select Size',
    qty: 1
}),

methods:{
  clear(){
    localStorage.clear()
  },
  getPrice(){
    this.items.forEach(thing => {
     thing.forEach(weird =>{
       if(weird.title === this.selected){
         this.price = weird.price
       }
     })
    })
  
  },
  checkCart(cartItems,title){
    const upItems = cartItems.map(item => {
       if(item.title === title){
        return {
          title: item.title,
          qty: parseInt(item.qty) + parseInt(this.qty), 
          price: item.price
         }
       }else{
         return{
           title: item.title,
           qty: item.qty,
           price: item.price
         }
       }
    })
    //end map
    if(JSON.stringify(cartItems)===JSON.stringify(upItems)){
      return false
    }else{
      return upItems
    }
  },
  addTooCart(title,price){
    
  //Check local storage to see if items are in cart
    let cartItems = JSON.parse(localStorage.getItem('cart'))
  //If local storage is empty intialize an empty cart
    if(!cartItems){
      cartItems = []
    }
    
    let cartItem = {}
    if(this.selected !== ''){
 
     const checkCart = this.checkCart(cartItems,this.selected)
      if(checkCart === false){
      cartItem.title = this.selected
      cartItem.qty = parseInt(this.qty)
      cartItem.price = this.price
     }else{
      cartItems = checkCart
    }
     
    }else{
      const checkCart = this.checkCart(cartItems,title)
      if(checkCart === false){
      cartItem.title = title
      cartItem.qty = parseInt(this.qty)
      cartItem.price = price
    }else{
      cartItems = checkCart
    }
    }
    
    if(cartItem.title){
      cartItems.push(cartItem)
    }
    
    localStorage.setItem('cart',JSON.stringify(cartItems))
  }
  }
}
</script>

<style scoped lang="scss">

.container{
  color: #70865e;
  margin-bottom: 120px;
  padding: 0;
  h3{
    text-align: center;
    font-weight: 400;
    margin: 1rem;
    font-size: clamp(1.5rem, 2vw, 4rem);
  }
  .flex{
    display: flex;
    justify-content: center;
    align-content: center;
   
  }
  img{
    width: 100%;
  }
  p{
    margin: 1rem;
  }
  .select-form{
  p{
    margin: 0;
    padding: 0;
    text-decoration: underline;
  }
}
}
//Qty input styles
$primary: #70865e;
$secondary: #70865e;
$white: #70865e;
$gray: #70865e;
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 60px;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight:700;    
  }
  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary,$secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field{
  &:required,&:invalid { box-shadow:none; }
}
/* demo */
body {
  font-family: 'Poppins', sans-serif; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
  background-color:#222222;
}
</style>