<template>
  <Box>
    <ul class="">
      <MoveItem 
      v-for ="movie in movies" 
      :key ="movie.id" 
      :movie ="movie" 
      @movies-change="$emit('moviesChange', $event)"
      />
    </ul>
  </Box>
</template>

<script>
  import MoveItem from "../move-item/MoveItem.vue"

  export default {
    name: "MoveList",
    props: {
      movies: {
        type: Array,
        required:true
      }
    },
    components: {
      MoveItem,
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
  }
</style>