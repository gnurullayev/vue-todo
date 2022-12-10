<template>
    <Box>
        <h3>Yangi kino qo'shish</h3>
        <form class="form d-flex" @submit.prevent="addMovie">
            <my-input 
            type="text" 
            placeholder="Qanday kino ?" 
            v-model="title"
            />

            <my-input 
                type="number" 
                placeholder="Nechi marotaba ko'rilgan ?"
                v-model="count"
            />
            
            <my-button class="btn-outline-dark" type="submit" >Qo'shish</my-button>
        </form>
    </Box>
</template>

<script>
import MyInput from '../ui-component/MyInput.vue'
    export default {
  components: { MyInput },
        name: "MoveAdd",
        data() {
            return {
                title:"",
                count:"",
            }
        },
        methods:{
            addMovie() {
                const newMovie = {
                    title: this.title,
                    watchCount: this.count,
                    like:false,
                    isWatch:false
                }
                this.$emit("addMovie", newMovie)

                this.title = "";
                this.count = "";
            }
        }
    }
</script>

<style scoped>

</style>
