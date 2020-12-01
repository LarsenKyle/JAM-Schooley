<template>
  <header class="header">
    <div class="content">
      <nuxt-link to="/">
        <h1 class="title">Schooley and Sons</h1>
      </nuxt-link>
      <img @click="dialog = true" src="../../assets/cart-icon.svg" alt="Shopping cart icon and link">
    </div>
  
     <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          My Cart
        </v-card-title>
        <v-card-text >
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Item
                  </th>
                  <th class="text-left">
                    Qty
                  </th>
                  <th class="text-left">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in items"
                  :key="item.title"
                >
                  <td>{{ item.title }}</td>
                  <td>{{ item.qty }}</td>
                  <td>${{ item.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>  
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Proceed to checkout
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </header>
</template>

<script>
export default {
data: () =>({
items:[],
token:false,
dialog:false,

}),
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
