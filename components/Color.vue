<template>
  
    <v-card-text class="color-picker " >
        <p>Select a color</p>
      <v-row
        align="center"
        justify="center"
      >
        <v-btn-toggle
          v-model="toggle_exclusive"
          mandatory
        >
          <v-btn class="grey lighten-5" @click="colorHandler('Any')" >
            <p>Any</p>
          </v-btn>
          <v-btn @click="colorHandler('Red')" class="red" ></v-btn>
          <v-btn @click="colorHandler('Yellow')" class="yellow" ></v-btn>
          <v-btn @click="colorHandler('Green')" class="green"></v-btn>
        </v-btn-toggle>
      </v-row>
      <p v-if="color">{{color}}</p>
    </v-card-text>
  
</template>

<script>
export default {
data(){
    return{
        toggle_exclusive: undefined,
        color: 'Any'
    }
},
methods:{
    colorHandler(color){
        this.color = color
        this.$emit('clicked', color)
    }
}
}
</script>

<style lang="scss">
.color-picker{
    text-align: center;
    margin-right: 3rem;
    p{
        margin-bottom: 0px;
        font-size: 0.7rem;
    }
}
</style>