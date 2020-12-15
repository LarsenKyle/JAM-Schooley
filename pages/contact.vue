<template>
<v-main>
<Header/>

  <v-container  fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <p>Phone: (616)-754-3266</p>
            <p>Email: schooley@gmail.com</p>
            <p>Adress: 13700 14 Mile Rd NE, Greenville, MI</p>
            <v-card class="elevation-0">
              <v-toolbar color="white" dark flat>
                <v-toolbar-title class="t-title">Contact Us</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-form action="https://formspree.io/krlars87@gmail.com" method="POST">
                <v-card-text>
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mdi-email"
                    type="text"
                    class="t-title"
                    v-model="email"
                  ></v-text-field>

                  <v-textarea
                    id="message"
                    label="Message"
                    name="message"
                    prepend-icon="mdi-comment"
                    type="text"
                    class="t-title"
                    v-model="text"
                  ></v-textarea>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    type="submit"
                    @submit="clear"
                    depressed
                    class="primary-color mb-2 mr-2"
                  >Send</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <Nav/>
      </v-main>
</template>

<script>
export default {
data(){
    return{
        text:'',
        email:''
    }
},
methods:{
    clear(){
        this.text = ''
        this.email = ''
    }
}
}
</script>

<style scoped lang="scss">
@import '../assets/vari.scss';
.t-title{
    color:$primary
}
p{
  background-color: white;
}
</style>