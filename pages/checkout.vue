<template>
  <div>
    <Header />
    <div class="checkout" v-if="!paidFor">
      <v-card>
        <v-card-title class="headline">
          My Cart
        </v-card-title>
        <v-card-text>Shipping and handling: UPS flat rate ${{shipping}}.00</v-card-text>
        <v-card-text>
          <v-card-text v-if="!items">
            <h1 class="empty">Looks like your cart is empty!</h1>
          </v-card-text>
          <v-simple-table v-if="items" >
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
                  <th class="text-left">
                    Remove Item
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>${{ item.unit_amount.value.toFixed(2) }}</td>
                  <td  @click="remove(item.name)"><v-icon>mdi-delete</v-icon></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </div>
    <div v-if="paidFor">
      <nuxt-link to="/"> <h1>Return to Homepage</h1></nuxt-link>
    </div>
    <div class="paypal-styles">
      <div ref="paypal"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkout",
  data() {
    return {
      loaded: false,
      paidFor: false,
      amount: null,
      items: null,
      shipping: 4
    };
  },
  mounted() {
    if (process.browser && this.$store.state.cartItems ) {
      let amount = {};
      let breakdown = {};
      let shippingVal = 4;
      let arr = [];
      let cartItems = this.$store.state.cartItems
      let shippingCheck = cartItems.map(item => {
          return item.shipping
      })
      if(shippingCheck.includes(undefined)){
        shippingVal = 8
      }
      this.shipping = shippingVal
      //Get items from cart and turn them into an array for the paypal function items:
      let purchaseItems = cartItems.map(item => {
        return {
          name: item.title,
          quantity: item.qty,
          unit_amount: {
            currency_code: "USD",
            value: parseFloat(item.price.toFixed(2))
          },
          tax: {
            currency_code: "USD",
            value: this.getTax(item.price)
          }
        };
      });
      // Get totals to work with to create the amount object needed for paypal checkout function
      let itemTotals = purchaseItems.map(item => {
        return item.unit_amount.value * item.quantity;
      });
      let taxTotals = purchaseItems.map(item => {
        return item.tax.value * item.quantity;
      });
      //Take totals arrays and add them together for amount object
      let amountItems = itemTotals.reduce((a, b) => a + b, 0);
      let amountTax = taxTotals.reduce((a, b) => a + b, 0);
      //Var for the total of items in amount obj
      let amountValue = amountItems + amountTax + shippingVal
      //Create objects to add to the breakdown object for amount object
      let item_total = {
        currency_code: "USD",
        value: parseFloat(amountItems.toFixed(2))
      };
      let tax_total = {
        currency_code: "USD",
        value: parseFloat(amountTax.toFixed(2))
      };
      let shipping = {
        currency_code: "USD",
        value: shippingVal
      };
      //Populate breakdown object then populate amount object
      breakdown.item_total = item_total;
      breakdown.tax_total = tax_total;
      breakdown.shipping = shipping;
      amount.currency_code = "USD";
      amount.value = parseFloat(amountValue.toFixed(2))
      amount.breakdown = breakdown;
      //Set amouont object and items array to component data
      this.amount = amount;
      this.items = purchaseItems;

      //Add paypal sdk to body
      ///////////////////////
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=ARNRNvgJTH0oaRUrQUC-p-MgCXzIOl5T6um6YqdW7U9mkwzV-ZkfCtp9c0QH6dRWArJY85Yh3rLCT5Vu";
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
    }
  },
  methods: {
    remove(name){
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    
    cartItems = cartItems.filter(item => {
     return item.title != name
    })
    localStorage.setItem("cart",JSON.stringify(cartItems)) 
    location.reload()
      },
    getTax(price) {
      let tax = price * 0.06;
      return parseFloat((Math.round(tax * 100) / 100).toFixed(2));
    },
    //Paypal checkout api function
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  reference_id: "PUHF",
                  description: "Sporting Goods",
                  custom_id: "CUST_Schooley Ice Tackle",
                  soft_descriptor: "Ice fishing tackle",
                  amount: this.amount,
                  items: this.items
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            localStorage.clear();
            const order = await actions.order.capture();
            this.data;
            this.paidFor = true;
            console.log(order);
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    }
  }
};
</script>

<style lang="scss" scoped>
.empty{
  text-align: center;
}
.paypal-styles{
width: 95vw;
max-width: 750px;
margin: 0 auto;
margin-top: 1rem;
}

.checkout{
  width: 95vw;
  margin: 0 auto;
  margin-top: 8rem;
}
</style>
