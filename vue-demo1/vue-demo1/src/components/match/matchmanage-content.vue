<template>
<div>
  <div v-if="kk==1">
    <matchmanage1></matchmanage1>
  </div>
  <div v-else-if="kk==2">
    <matchrise></matchrise>
  </div>
</div>
</template>

<script>
import Matchrise from "./matchrise";
import Matchmanage1 from "./matchmanage1";
import Msg from "../Msg";
export default {
  name: "matchmanage-content",
  components: {Matchmanage1, Matchrise},
  data(){
    return{
      kk:'1',
    }
  },
  mounted() {
    var _this=this;
    Msg.$on('val10',function (m){
      _this.kk=m;
    });

  }
}
</script>

<style scoped>

</style>