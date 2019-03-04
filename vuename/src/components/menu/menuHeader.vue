<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">

        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="javascript:;" target="_blank">订单管理</a></el-menu-item>
      <el-col :span="1">
        <el-button v-if="openClose" @click="changeState" type="primary">展开</el-button>
        <el-button v-else="openClose" @click="changeState" type="primary">折叠</el-button>
      </el-col>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex2: '1'
      }
    },
    computed:{
      openClose:function(){
        return this.$store.state.openClose
      }
    },
    methods:{
      handleSelect(key, keyPath){
        console.log(key, keyPath);
      },
      changeState(){
        this.$store.commit('setOpenClose',!this.openClose)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
