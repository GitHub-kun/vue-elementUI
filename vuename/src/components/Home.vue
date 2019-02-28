<template>
  <el-container>
    <el-header>
      <menu-Header></menu-Header>
    </el-header>
    <el-container>
      <el-aside width="210px">
       <menu-Aside></menu-Aside>
      </el-aside>
      <el-main>
        <router-view></router-view>
        <!--<Main-Body></Main-Body>-->
      </el-main>
    </el-container>
  </el-container>
      <!--<router-link :to="{name:'components'}">首页</router-link>-->
</template>

<script>
import menuHeader from './menu/menuHeader.vue';
import menuAside from  './menu/menuAside.vue';
export default {
    components:{
      menuHeader,
      menuAside
    },
  name: 'home',
  data () {
    return {

    }
  } ,
  methods:{
    toFourPage(){
      this.$router.push({name: 'Four', params: {id: 456, name: 'zhangsan'}})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  .el-header, .el-footer {
    padding:0;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    line-height: 160px;
    min-height: 500px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-aside{

  }
/*页面切换动画*/
/*进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除*/

.fade-enter-active {
  transition: opacity .5s;
}
/*进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除*/
.fade-enter {
  opacity: 0;
}
/*离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除*/
.fade-leave {
  opacity: 1;
}
/*离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除*/
.fade-leave-active {
  opacity:0;
  transition: opacity .5s;
}
</style>
