<template>
  <Box>
    <h1 class="title">Barcha Kinolar soni: {{moviesCount}}</h1>
    <h2 class="subTitle">Sevimli filimlar: {{favouriteCount}}</h2>
  </Box>
</template>

<script>

  export default {
    name:"MoveInfo",
    props:{
      moviesCount:{
        type:Number,
        required:true
      },
      favouriteCount:{
        type:Number,
        required:true
      }
    }
  }
</script>

<style >

</style>