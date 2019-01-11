<template>
  <main>
    <div class="">
      <div id="components-demo">
        <button-counter></button-counter>
      </div>
      <div class="board-wrapper">
        <div @click="draw()" class="board"
             v-bind:style="{backgroundColor: bgColor, fontSize:realTextSize, color:ftColor}">
          {{ message }}
        </div>
        <div class="board-pages">
          <h3>Pages ({{pageCount -1}})</h3>
          <ul class="pages-list">
            <li v-for="item in pages" :key="item.id" >
              <a class="page-item" @click="goToPage(item.id)">{{ item.message }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="keyboard">
        <input v-model="message" type="text" placeholder="Enter text">
      </div>
      <div class="board-tools">
        <button id="btn1" @click="changeColour()">Black/White</button>
        <button id="btn2" @click="changeSizeUp()">+ Size</button>
        <button id="btn3" @click="changeSizeDown()">- Size</button>
        <button @click="addPage()">Save Page</button>
        <button @click="newPage()">New Page</button>
        <button @click="goToUrl('contact')">Learn More</button>
      </div>
      <AboutView/>
    </div>
  </main>
</template>

<script>
/* eslint-disable */
import AboutView from './AboutView.vue';

export default {
  name: 'BlackBoard',
  components : {AboutView},
  data: function () {
    return {
      pageCount:1,
      boardmessage : "",
      message: "hello world",
      isActive : true,
      bgColor : "#fff",
      ftColor : "#000",
      textSize : 15,
      pages : {}
    }
  },
  methods: {
    draw () {
      console.log('drawing')
    },
    changeColour () {
      var colors = ["#fff","#000"];
      if(this.bgColor === colors[0]){
        this.bgColor = colors[1];
        this.ftColor = colors[0];
      }else{
        this.bgColor = colors[0];
        this.ftColor = colors[1];
      }
      console.log("changing to false");
    },
    changeSizeUp () {
      console.log("Chaing text size");
      this.textSize += 10;
    },
    changeSizeDown () {
      this.textSize -= 10;
    },
    addPage () {
      this.pages[this.pageCount] = {
        "id" : this.pageCount,
        "message":this.message
      }
      console.log(this.pages);
      this.message = "";
      this.pageCount += 1;
    },
    newPage () {
      this.message = "";
    },
    goToPage ( id ) {
      var page = this.pages[id];
      this.message = page.message;
      console.log("list item clicked" + id );
    },
    goToUrl ( page ){
      window.location.href = "#/" + page;
    }
  },
  computed: {
    // a computed getter
    realTextSize: function () {
      // `this` points to the vm instance
      return this.textSize + "px";
    },

  }
}
</script>

<style scoped>

</style>
