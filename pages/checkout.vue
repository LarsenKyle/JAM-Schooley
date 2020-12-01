<template>
<!-- eslint-disable -->
  <div>
    <div v-if="!paidFor">
      <img width="400" src="https://images-na.ssl-images-amazon.com/images/I/61yZD4-mKjL._SX425_.jpg" />
    </div>
    <div v-if="paidFor">
      <nuxt-link to="/">
      <h1>Return to Homepage</h1></nuxt-link>
    </div>

    <div ref="paypal"></div>
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
      items:null
    };
  },
  mounted() {
    if(process.browser){
      let amount = {}
      let breakdown = {}
      let shippingVal = 5.00
      let arr = []
      let cartItems = JSON.parse(localStorage.getItem('cart'))
      //Get items from cart and turn them into an array for the paypal function items:
      let purchaseItems = cartItems.map(item => {
        return{
          name:item.title,
          quantity: item.qty,
          unit_amount:{
            currency_code: "USD",
            value: parseFloat(item.price.toFixed(2))
          },
          tax:{
            currency_code: "USD",
            value: this.getTax(item.price)
          }
        }
      })
      // Get totals to work with to create the amount object needed for paypal checkout function
      let itemTotals = purchaseItems.map(item => {
        return item.unit_amount.value * item.quantity
      })
      let taxTotals = purchaseItems.map(item => {
        return item.tax.value * item.quantity
      })
      //Take totals arrays and add them together for amount object
      let amountItems = itemTotals.reduce((a, b) => a + b, 0)
      let amountTax = taxTotals.reduce((a, b) => a + b, 0)
      //Create objects to add to the breakdown object for amount object
      let item_total = {
        currency_code:'USD',
        value: amountItems
      }
      let tax_total = {
        currency_code:'USD',
        value: amountTax
      }
      let shipping = {
        currency_code: 'USD',
        value: 5
      }
      //Populate breakdown object then populate amount object
      breakdown.item_total = item_total
      breakdown.tax_total = tax_total
      breakdown.shipping = shipping
      amount.currency_code = 'USD'
      amount.value = amountItems + amountTax + shippingVal
      amount.breakdown = breakdown
      //Set amouont object and items array to component data
      this.amount = amount
      this.items = purchaseItems
     
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
    getTax(price){
      let tax = price *.06
      return parseFloat((Math.round(tax * 100) / 100).toFixed(2))

    },
    //Paypal checkout api function
    setLoaded: function() {
      this.loaded = true
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {      
            return actions.order.create({
              purchase_units: [{
                reference_id: "PUHF",
                description: "Sporting Goods",

                custom_id: "CUST-HighFashions",
                soft_descriptor: "HighFashions",
                amount:this.amount,
                items: this.items
                }]
            });
          },
          onApprove: async (data, actions) => {
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>