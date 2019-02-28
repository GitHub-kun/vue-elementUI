<template>
  <div>
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        :unique-opened="true"
        text-color="#fff"
        :router="true"
        active-text-color="#ffd04b">
        <el-menu-item index="1" route="/">
          <i class="el-icon-refresh"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>表单</span>
          </template>
          <el-menu-item-group>
            <!--<template slot="title">分组一</template>-->
            <el-menu-item index="2-1" route="Form">form</el-menu-item>
            <el-menu-item index="2-2" route="Table">table</el-menu-item>
            <el-menu-item index="2-3" route="list">list</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3" route="tab">
          <i class="el-icon-menu"></i>
          <span slot="title">选项卡</span>
        </el-menu-item>
        <el-menu-item index="4" route="tips">
          <i class="el-icon-document"></i>
          <span slot="title">弹窗</span>
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>echarts</span>
          </template>
          <el-menu-item-group>
            <!--<template slot="title">分组一</template>-->
            <el-menu-item index="5-1" route="bar">柱状图</el-menu-item>
            <el-menu-item index="5-2" route="ball">球体</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
