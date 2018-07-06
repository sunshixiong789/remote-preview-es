<template>
  <div>
    主页
    <el-button @click="loadData">点击</el-button>
  </div>
</template>
<script>
import { formRequest } from "../../axios/api"

export default {
  name: 'home',
  methods: {
    loadData() {
      formRequest('/user', 'get').then(response => {
        alert(response.data);
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
