<template>
<div class="page">
  <div>
    <top></top>
  </div>
  <div class="infor-route">
    <div class="left-route">
      <my-project-left></my-project-left>
    </div>
    <div class="right-route">
      <MyProjectContent></MyProjectContent>
    </div>
  </div>
</div>
</template>

<script>
import Top from "../../components/top";
import MyProjectLeft from "../../components/MyProject/MyProject-left";
import MyProjectContent from "../../components/MyProject/MyProject-content";
export default {
  name: "MyProject",
  components: {MyProjectContent, MyProjectLeft, Top},
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