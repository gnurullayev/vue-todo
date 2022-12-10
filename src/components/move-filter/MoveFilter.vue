<template>
  <Box>
    <input 
    class="form-control fw-700 py-2 shadow mb-3" 
    type="text" 
    placeholder="Kinolarni qidirish"
    :value="title"
    @input="changeHandler"
    />
    <div class="btn-group">
      <my-button
      v-for="btn in btns" :key="btn.name"
      class="btn "
      :class="moveType === btn.type ? 'btn-dark' :'btn-outline-dark'" 
      type="button"
      @click="moveiTypeHandler(btn.type)"
      >
      {{btn.name}}
      </my-button>
    </div>
  </Box>
</template>

<script>
  export default {
    name: "MoveFilter",
   data() {
    return {
      title: "",
      moveType:"all",
      btns:[
        {
          name: "Barcha kinolar",
          type: "all",
        },
         {
          name: "Mashhur kinolar",
          type: "popular",
        },
         {
          name: "Eng ko'p ko'rilgan kinolar",
          type: "favourite",
        }
      ]
    }
   },
    methods:{
      changeHandler(event) {
        this.title = event.target.value
        this.$emit("searchMovie", this.title)
      },
      moveiTypeHandler (evt) {
        this.moveType = evt
        this.$emit("filterMovies", this.moveType)
      }
    }
  }
</script>

<style scoped>

</style>