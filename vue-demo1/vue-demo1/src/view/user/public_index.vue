<template>
  <div class="team-home">
    <PageHead/>
    <a-row type="flex" justify="space-around" class="intro-row" :gutter="8">
      <a-col class="intro-col" :span="6">
        <a-card class="item" hoverable @click="goToCreateGame">
          <img src="../../assets/images/icon/login.png" >
          <div class="title">创建比赛</div>
        </a-card>
      </a-col>
      <a-col class="intro-col" :span="6">
        <a-card class="item" hoverable @click="goToReview">
          <img src="../../assets/images/icon/team.png" >
          <div class="title">审核报名</div>
        </a-card>
      </a-col>
      <a-col class="intro-col" :span="6">
        <a-card class="item"  hoverable @click="goToMatchManage">
          <img src="../../assets/images/icon/register.png">
          <div class="title">比赛管理</div>
        </a-card>
      </a-col>
      <a-col class="intro-col" :span="6">
        <a-card class="item" hoverable @click="goToDetailAppeal">
          <img src="../../assets/images/icon/register.png">
          <div class="title">申诉处理</div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import PageHead from "@/components/PageHead";
export default {
  name: "public_index",
  components: {PageHead},
  methods:{
    goToCreateGame(){
        this.$message.error("该功能尚未开放，敬请期待")
    },
    goToDetailAppeal(){
      this.$message.error("该功能尚未开放，敬请期待")
    },
    goToReview(){
      this.$router.push('/review')
    },
    goToMatchManage(){
      this.$message.error("该功能尚未开放，敬请期待")
    }
  }
}
</script>

<style lang="less" scoped>
.team-home {
  height: 100vh;
  //background: url("../../assets/images/login/back/background.png");
  background: url("../../assets/images/背景1.jpg");
  background-size: cover;
  width: 100%;

  .intro-row{
    padding: 10px;
    width: 100%;
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .intro-col{
      display: flex;
      justify-content: center;

      .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(100% - 100px);
        height: calc(100% - 100px);
        img{
          width: calc(100% - 0px);
          height: calc(100% - 0px);
        }

        .title{
          font-family: 幼圆;
          font-size: 24px;
          margin-top: 10px;
          text-align: center;
          color: #2979FF;
          font-weight: bold;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:1;
          overflow: hidden;
        }
      }
    }
  }
}
</style>