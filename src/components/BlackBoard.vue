<template>
  <main>
    <div class="">
      <div class="board-wrapper">
        <div @click="draw()" class="board"
             v-bind:style="{backgroundColor: bgColor, fontSize:realTextSize}">
          {{ message }}
        </div>
        <div class="board-pages">
          <h3>Pages</h3>
          <ul id="example-1">
            <li v-for="item in pages" :key="item.id">
              {{ item.message }}
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
        <button @click="addPage()">New Page</button>
        <button>BackWard</button>
        <button>Forward</button>
        <button>Sample</button>
        <button>Sample</button>
      </div>
    </div>
  </main>
</template>

<script>
/* eslint-disable */

export default {
  name: 'BlackBoard',
  data: function () {
    return {
      pageCount:1,
      boardmessage : "",
      message: "hello world",
      isActive : true,
      bgColor : "#fff",
      textSize : 10,
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
      }else{
        this.bgColor = colors[0];
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
    },
  },
  computed: {
    // a computed getter
    realTextSize: function () {
      // `this` points to the vm instance
      return this.textSize + "px";
    }
  }
}
</script>

<style scoped>

</style>
