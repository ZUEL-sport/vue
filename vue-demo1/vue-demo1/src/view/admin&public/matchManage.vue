<template>
<div class="page">
  <div>
    <top></top>
  </div>
  <div class="infor-route">
    <div class="left-route">
      <matchmanageleft></matchmanageleft>
    </div>
    <div class="right-route">
      <matchmanage-content></matchmanage-content>
    </div>
  </div>
</div>
</template>

<script>
import Top from "../../components/top";
import Matchmanageleft from "../../components/match/matchmanageleft";
import MatchmanageContent from "../../components/match/matchmanage-content";
export default {
  name: "matchManage",
  components: {MatchmanageContent,  Matchmanageleft, Top}
}
</script>

<style scoped>
</style>