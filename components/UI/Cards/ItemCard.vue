<template>
  <div v-if="item.title" class="container">
    <div class="card">
      <h3>{{ item.title }}</h3>
      <img @click="check" :src="item.image" alt="" />
      <p>{{ item.description }}</p>
      <p class="price" v-if="!item.size">Price: ${{ item.price }}</p>
      <Color @clicked="colorHandler" v-if="item.color"/>
      <div v-if="item.size" class="select-form">
        <v-select
          @change="getPrice"
          v-model="selected"
          v-if="item.size"
          :items="item.size"
          label="Select Size"
        ></v-select>
        <p v-if="item.size">Price: ${{ price }}</p>
      </div>
      <div class="flex">
        <div class="form__group field">
          <input type="number" class="form__field" v-model="qty" />
          <label for="name" class="form__label">Qty</label>
        </div>
      </div>
      <Btn
        @click="
          addTooCart(item.title, item.price, item.shipping);
          snackbar = true;
        "
        :text="'Add to Cart'"
      />
      <v-snackbar v-model="snackbar"  centered :timeout="timeout" :color="color">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <nuxt-link to="/checkout">
            <v-btn v-if="checkout" color="white" text v-bind="attrs" @click="snackbar = false">
              Proceed to Checkout
            </v-btn>
          </nuxt-link>
          <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "items"],

  data: () => ({
    strapiBaseUri: process.env.strapiBaseUri,
    selected: "",
    price: "Select Size",
    qty: 1,
    color: "green",
    itemColor: 'any',
    text: null,
    checkout:null,
    snackbar: false,
    timeout: 2000
  }),
  methods: {
    check(){
      console.log(this.item)
    },
    colorHandler(val){
      this.itemColor = val
    },
    getPrice() {
      this.items.forEach(item => {
        if(this.selected === item.title){
          this.price = item.price
        }
      });
    },
    checkCart(cartItems, title) {
      const upItems = cartItems.map(item => {
        if (item.title === title) {
          return {
            title: item.title,
            qty: parseInt(item.qty) + parseInt(this.qty),
            price: item.price
          };
        } else {
          return {
            title: item.title,
            qty: item.qty,
            price: item.price
          };
        }
      });
      //end map
      if (JSON.stringify(cartItems) === JSON.stringify(upItems)) {
        return false;
      } else {
        return upItems;
      }
    },

    addTooCart(title, price , shipping) {
      if(this.item.color){
        title = `(${this.itemColor}) ${title}`
      }
      if (this.item.size && this.selected === "") {
        this.snackbar = true;
        this.text = "Please Select a Size";
        this.color = "red";
      } else {
        //Check local storage to see if items are in cart
        let cartItems = JSON.parse(localStorage.getItem("cart"));
        //If local storage is empty intialize an empty cart
        if (!cartItems) {
          cartItems = [];
        }
        //Initialize new item to add to cart
        let cartItem = {};
        cartItem.shipping = shipping
        //Check to see if the item has multiple sizes
        if (this.selected !== "") {
          //Check to see if the item is already in the cart
          const checkCart = this.checkCart(cartItems, this.selected);
          if (checkCart === false) {
            //Build the new item for the cart if the item is new
            cartItem.title = `(${this.itemColor})${this.selected}`;
            
            cartItem.qty = parseInt(this.qty);
            cartItem.price = parseFloat(this.price.toFixed(2));
          } else {
            //Replace the cart with the updated qty if the item is in the cart
            cartItems = checkCart;
          }
          //Item has one size
        } else {
          //Check to see if the item is already in the cart
          const checkCart = this.checkCart(cartItems, title);
          if (checkCart === false) {
            //Build the new item for the cart if the item is new
            cartItem.title = title;
            cartItem.qty = parseInt(this.qty);
            cartItem.price = price;
          } else {
            //Replace the cart with the updated qty if the item is in the cart
            cartItems = checkCart;
          }
        }
        //If the item was not already in the cart, add it
        if (cartItem.title) {
          cartItems.push(cartItem);
        }
        //Replace the cart with the updated version
        this.$store.commit("addItem", cartItems);
        
        localStorage.setItem("cart", JSON.stringify(cartItems));
        this.text = "Items Added";
        this.timeout = 20000
        this.checkout = true
        this.color = "green";
      }
    }
  }
};
</script>

<style scoped lang="scss">
a{
  text-decoration: none;
}
.price{
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.snackbar {
  position: fixed;
  top: 20vh;
  background-color: #70865e;
  color: white;
  width: 100%;
  max-width: 500px;
  height: 85px;
  margin: auto;
  display: grid;
  justify-items: center;
  align-items: center;
  border-radius: 10px;
  transition: all 0.5s ease-out;
  p {
    background-color: inherit;
    justify-items: center;
    align-items: center;
    font-size: clamp(1.3rem, 2vw, 4rem);
  }
}
.container {
  color: #70865e;
  width: 95vw;
  margin: 0 auto;
  margin-bottom: 120px;
  padding: 0;
  max-width: 400px;
  h3 {
    text-align: center;
    font-weight: 400;
    margin: 1rem;
    font-size: clamp(1.5rem, 2vw, 4rem);
  }
  .flex {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  img {
    width: 100%;
  }
  
  p {
    margin: 1rem;
  }
  .select-form {
    width: 300px;
    margin: auto;
    p {
      margin: 0;
      padding: 0;
      text-align: center;
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
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary, $secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
/* demo */
body {
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
  background-color: #222222;
}
</style>
