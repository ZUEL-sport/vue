<template>
<div>
  <div v-if="kk==1">
    <appeal-choose></appeal-choose>
  </div>
  <div v-else-if="kk==2">
    <appeal-result></appeal-result>
  </div>
</div>

</template>

<script>
import Msg from "../Msg";
import AppealChoose from "./appeal-choose";
import AppealResult from "./appeal-result";

export default {
  name: "appeal-content",
  components: {AppealResult, AppealChoose},
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