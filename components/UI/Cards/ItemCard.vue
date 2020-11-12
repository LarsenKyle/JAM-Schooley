<template>
<div  class="container">
  <div class="card">
    <h3>{{item.title}}</h3>
      <img :src="strapiBaseUri + item.image" alt="">
      <p>{{item.desc}}</p>
      <div v-if="item.size" class="select-form">
        <p>Select Size</p>
        <select @change="getPrice" v-if="item.size" placeholder="Select Size" v-model="selected">
          <option :key="size" v-for="size in item.size" >{{size}}</option>
       </select>
      </div>
      <p v-if="item.size" >Price: {{price}}</p>
      <p v-if="!item.size">Price: ${{item.price}}</p>
      <div class="flex">
        <div class="form__group field">
          <input type="number" class="form__field" placeholder="Name" name="name" id='name' required />
          <label for="name" class="form__label">Qty</label>
        </div>
      </div>
      <Btn :text="'Add to Cart'" />
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
  getPrice(){
    this.items.forEach(thing => {
     thing.forEach(weird =>{
       if(weird.title === this.selected){
         this.price = weird.price
       }
     })
    })
  
  }
}
}
</script>

<style scoped lang="scss">

.container{
  color: #70865e;
  text-align: center;
  margin: auto;
  margin-bottom: 120px;
  h3{
    font-weight: 400;
    margin: 1rem;
    font-size: clamp(1.5rem, 3.5vw, 3rem);
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