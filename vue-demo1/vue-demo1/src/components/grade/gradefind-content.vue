<template>
  <div>
    <div v-if="kk==1">
      <gradefind></gradefind>
    </div>
    <div v-else-if="kk==2">
      <gradechange></gradechange>
    </div>
  </div>
</template>

<script>
import Gradefind from "./gradefind";
import Gradechange from "./gradechange";
import Msg from "../Msg";
export default {
  name: "gradefind-content",
  components: {Gradechange, Gradefind},
  data(){
    return{
      kk:'1'
    }

  },
  mounted() {
    var _this=this;
    Msg.$on('gradeval1',function (m){
      _this.kk=m;
    });

  }
}
</script>

<style scoped>

</style>