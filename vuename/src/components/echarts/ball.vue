<template>
  <el-row>
    <el-col :span="24">
      <div id="ball" class="bar">

      </div>
    </el-col>
  </el-row>
</template>
<script>

  export default {
    data() {
      return {
        name:'msg',
        chartColumn: null,
        baseTexture:'/assets/worldtopobathy200401.jpg',
        environment:"/assets/starfield.jpg"
      };
    },
    mounted(){
      this.initBall()
    },
    methods: {
      initBall(){
        this.chartColumn = echarts.init(document.getElementById('ball'));
        // 使用刚指定的配置项和数据显示图表。
        this.chartColumn.setOption({
          backgroundColor: '#000',
          globe: {
            baseTexture: this.baseTexture,
            heightTexture: this.baseTexture,
            displacementScale: 0.04,
            shading: 'realistic',
            environment: this.environment,
            realisticMaterial: {
              roughness: 0.9
            },
            postEffect: {
              enable: true
            },
            light: {
              main: {
                intensity: 5,
                shadow: true
              },
              ambientCubemap: {
                texture: '../../asset/pisa.hdr',
                diffuseIntensity: 0.2
              }
            }
          }
        });
      }
    }
  };

</script>
<style scoped>
  .bar{
    width: 100%;
    height: 500px;
  }
</style>
