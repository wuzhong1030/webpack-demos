<template>
  <div class="hello">
    <h1 @click="handleClick">{{ msg }}</h1>
    <h2 ref="h2">{{ data }}</h2>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: 'hello'
    }
  },
  methods: {
    handleClick () {
      this.data = 'world'
      this.$nextTick(function () {
        console.log(this.$refs.h2.innerText)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
