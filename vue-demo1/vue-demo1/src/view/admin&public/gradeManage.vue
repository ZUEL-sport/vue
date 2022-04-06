<template>
<div class="page">
  <div>
    <top></top>
  </div>
  <div class="infor-route">
    <div class="left-route">
      <gradefindleft></gradefindleft>
    </div>
    <div class="right-route">
      <gradefind-content></gradefind-content>
    </div>
  </div>
</div>
</template>

<script>
import Top from "../../components/top";
import Gradefindleft from "../../components/grade/gradefindleft";
import GradefindContent from "../../components/grade/gradefind-content";
export default {
  name: "grademanage",
  components: {Top, GradefindContent, Gradefindleft}
}
</script>

<style scoped>
.right-route{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>