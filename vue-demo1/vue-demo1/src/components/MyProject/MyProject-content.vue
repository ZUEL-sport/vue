<template>
  <div>
    <div v-if="kk==1">
      <my-project1></my-project1>
    </div>
    <div v-else-if="kk==2">
      <my-grade></my-grade>
    </div>
    <div v-else-if="kk=3">
      <team-grade></team-grade>
    </div>
  </div>
</template>

<script>
import MyProject1 from "./MyProject1";
import MyGrade from "./MyGrade";
import TeamGrade from "./TeamGrade";
import Msg from "../Msg";
export default {
  name: "MyProject-content",
  components: {TeamGrade, MyGrade, MyProject1},
  data(){
    return{
      kk:'1'
    }

  },
  mounted() {
    var _this=this;
    Msg.$on('val1',function (m){
      _this.kk=m;
    });

  }
}
</script>

<style scoped>

</style>