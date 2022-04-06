<template>
<div class="page">
  <div>
    <top></top>
  </div>
  <div class="infor-route">
    <div class="left-route">
      <appeal-left></appeal-left>
    </div>
    <div class="right-route">
      <appeal-content></appeal-content>
    </div>
  </div>
</div>
</template>

<script>
import Top from "../../components/top";
import AppealLeft from "../../components/appeal/appeal-left";
import AppealContent from "../../components/appeal/appeal-content";
export default {
  name: "appeal",
  components: {AppealContent, AppealLeft, Top},
  data(){
    return{
      id:''
    }
  },
  created() {
    this.id=this.$route.params.id
  },
}
</script>

<style scoped>
.right-route{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>