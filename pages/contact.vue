<template>
<v-main>
<Header/>
  <v-container  fluid>
        <v-row class="fit" align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-0">
              <v-toolbar color="white" dark flat>
                <v-toolbar-title class="t-title">Contact Us</v-toolbar-title>
                
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-form action="https://formspree.io/schooleytackle@gmail.com" method="POST">
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
      <Footer/>
      </v-main>
</template>

<script>
export default {
  head: {
    title: 'Contact Us',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Get in touch with us'
      }
    ],
  },
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
.fit{
  margin: 3rem 0;
  height:calc(100vh - 120px);
}
</style>