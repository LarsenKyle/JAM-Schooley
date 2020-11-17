<template>
  <button @click="handleClick"  class="btn">{{text}}</button>
</template>

<script>
export default {
props:['text'],
methods:{
  handleClick(){
    this.$emit('click')
  }
}
}

</script>

<style lang="scss" scoped>
@import '../../assets/vari.scss';
.btn{
    display: block;
    margin: auto;
    background-color: $primary;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 2px;
    padding: .5rem 1.5rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
}
</style>