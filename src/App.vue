<template>
  <MoveInfo 
    :favouriteCount="onFilterMovies.filter(movie => movie.like).length" 
    :moviesCount="movies.length"
  />

  <MoveFilter 
    @search-movie="searchMovie" 
    @filter-movies="movieType = $event"
  />


  <Box v-if="!movies.length" class="d-flex justify-content-center">
    <h3 v-if="!movies.length && !loading">Hozirch bizda kinolar mavjud emas</h3>
    <div v-else-if="loading" class="spinner-border mx-auto" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </Box>
  <MoveList 
    v-show="movies.length"
    :movies="filteredMovies(onFilterMovies)" 
    @movies-change="moviesChange"
  />

  <div class="btn-group">
    <my-button 
    v-for="page in totalPage" 
    :key="page" 
    class="btn"
    :class="[page === pageNum ? 'btn-secondary' : 'btn-outline-secondary']"
    @click="pageNum = page"
    >
      {{page}}
    </my-button>
  </div>

  <MoveAdd 
    @add-movie="createMovie"
  />

</template>

<script>
  import MoveInfo from "./components/move-info/MoveInfo.vue"
  import MoveFilter from "./components/move-filter/MoveFilter.vue"
  import MoveList from "./components/move-list/MoveList.vue"
  import MoveAdd from "./components/move-add/MoveAdd.vue"
  import axios from "axios"
import MyButton from './components/ui-component/myButton.vue'

  export default {
    name: 'App',
    components: {
      MoveInfo,
      MoveFilter,
      MoveList,
      MoveAdd,
        MyButton,
        MyButton,
    },
    data(){
      return {
        movies:[],
        filterMovies:[],
        movieTitle:"",
        movieType: "all",
        pageNum: 1,
        totalPage:0,
        limit:10,
        loading:false,
      }
    }, 
    methods:{
      searchMovie(evt) {
        this.movieTitle = evt.trim()
      },
      filteredMovies(movies) {
        switch(this.movieType) {
          case "popular": 
            return movies.filter(movie => movie.like);
          case "favourite": 
            return movies.filter(movie => movie.watchCount > 750)
          default:
            return movies
        }
      },
      moviesChange({id, type}) {
        if(type === "like" || type === "isWatch") {
          this.movies = this.movies.map(movie => {
            if(movie.id === id) {
              return {...movie, [type]: !movie[type]}
            }
            return movie
          })
        }else {
          this.deleteMovie(id)
          // this.movies =  this.movies.filter(movie => movie.id !== id);
        }
      },
      async getPosts(page) {
        try{
          this.loading = true;
          const response = await axios.get("https://jsonplaceholder.typicode.com/posts?", {
            params: {
              _limit: this.limit,
              _page: page,
            }
          }) 
          this.movies = response.data.map(el => ({
            id:el.id,
            title: el.title,
            watchCount: 800,
            like:false,
            isWatch:true
          }))

          this.totalPage = Math.ceil(response.headers["x-total-count"] / this.limit)
        }catch(err){
          console.log(err.message);
        }finally {
          this.loading = false;
        }
      },
      async createMovie (postData) {
        try {
          const response = await axios.post("https://jsonplaceholder.typicode.com/posts", postData)
          this.movies.push(response.data)
        }catch (e) {
          console.log(e.message);
        }
      },
      async deleteMovie (id) {
        try {
          const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
          console.log(response);
        }catch (e) {
          console.log(e.message);
        }
      }
    },
    computed:{
      onFilterMovies() {
        return this.movies.filter(movie => movie.title.toLowerCase().includes(this.movieTitle))
      },
    },
    mounted() {
      this.getPosts()
    },
    watch: {
      pageNum() {
        this.getPosts(this.pageNum)
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
