<template>
  <li class="list-item" :class="movie.like && 'active'">
    <span  @click="$emit('moviesChange', {id:movie.id, type:'like'})" class="title" :class="movie.isWatch && 'watch-active'">{{movie.title}}</span>

    <div class="item-right">
      <input type="number" class="form-control" :class="movie.isWatch && 'watch-active'" :value="movie.watchCount">

      <my-button class="btn" @click="$emit('moviesChange', {id:movie.id, type:'isWatch'})">
        <i class="bi bi-life-preserver icon-watch"></i>
      </my-button>

      <my-button class="btn"  @click="$emit('moviesChange', {id:movie.id, type:'delete'})">
        <i class="bi bi-trash-fill icon-delete text-danger"></i>
      </my-button>

      <i class="bi bi-star-fill icon-star" :class="movie.like && 'active'"></i>
    </div>
  </li>
</template>

<script>
  export default {
    name:"MoveItem",
    props:{
      movie:{
        type:Object,
        required:true
      }
    } 
  }
</script>

<style scoped>

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    font-family: sans-serif;
    border-bottom: 2px solid rgba(0, 0, 0, .2);
    overflow: hidden;
  }

  .item-right {
    display: flex;
    align-items: center;
  }

  .title  {
    width: 100%;
    min-height: 44px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  input {
    border: none;
  }

  i {
    display: inline-block;
    font-size: 20px;
  }

  .icon-star,
  .icon-watch {
    color: rgb(255, 136, 0);
  }

  .icon-star {
    position: relative;
    left: 30px;
    opacity: 0;
  }
  
  .active {
    overflow: inherit;
    left: 0;
    opacity: 1;
  }

  .watch-active {
    color: rgb(255, 136, 0);
  }
</style>