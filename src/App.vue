<template>
  <div id="app">
    <h1>BlackBoard Vue Tutorial</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/** eslint-disable */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.board-wrapper{
  overflow:auto;
  margin: 10px;
}

.board {
  border: 1px solid #000;
  width: 75%;
  height: 350px;
  margin: 5px;
  padding: 5px;
  text-align: left;
  overflow-y: auto;
  display: inline-block;
  float: left;
}

.board-pages{
  width: 20%;
  float:right;
  border: 1px solid #000;
  height: 350px;
  margin: 5px;
  padding: 5px;
}

.keyboard {
  width: 98%;
  height:30px;
  margin: 5px;
  display: block;
}
.blue{
  background: blue;
}

.keyboard input[type="text"]{
  text-align: left;
  height: 25px;
  width: 100%;
}

.board-tools{
  display: block;
  background: #ccc;
  width: 98%;
  min-height: 30px;
  margin:5px;
  padding: 5px;
  text-align: left;
}
</style>
