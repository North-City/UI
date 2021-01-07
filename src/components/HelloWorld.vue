<template>
  <div class="hello">
    <p>测试Alert组件</p>
    <ls-alert title="标题" sub-text="副标题" center show-icon @close="close"/>
    <br/>
    <el-alert title="标题" description="副标题" center effect="dark" show-icon @close="close1"></el-alert>
    <br/>
    <button autofocus value="原生button">重置</button>
    <el-button type="text" value="elButton">elButton</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    closeClick(e) {
      console.log(e)
    },
    close(e) {
      console.log(e)
    },
    close1(e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
