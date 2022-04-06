<!--//项目详情的右侧-->
<template>
  <div>
    <div v-if="kk==1">
      <project-information1 :data="data1" :match="match"></project-information1>
    </div>
    <div v-else-if="kk!==1&&kk!==0" >
      <match-content :data="data"></match-content>
    </div>
  </div>

</template>

<script>
import Msg from "./Msg";
import ProjectInformation1 from "./project-information1";
import MatchContent from "./match-content";
export default {
  name: "protect-content",
  components: {MatchContent, ProjectInformation1},
  mounted() {
    var _this=this;
    Msg.$on("val",function (m){
      _this.kk=m;
    })

  },
  data(){
   return{
     kk:0,
   }
  },
  props:['match','data1','data']
}
</script>

<style scoped>

</style>