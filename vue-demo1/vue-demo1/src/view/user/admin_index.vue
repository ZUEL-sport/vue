<template class="page">
  <div class="team-home">
    <PageHead/>
    <a-row type="flex" justify="space-around" class="intro-row" :gutter="6">
      <a-col class="intro-col" :span="6">
        <a-card class="item" hoverable @click="goToCreateGame">
          <img src="../../assets/images/icon/team.png" >
          <div class="title">创建比赛</div>
        </a-card>
      </a-col>
      <a-col class="intro-col" :span="6">
        <a-card class="item"  hoverable @click="goToReviewGame">
          <img src="../../assets/images/icon/register.png">
          <div class="title">比赛审核</div>
        </a-card>
      </a-col>
      <a-col class="intro-col" :span="6">
        <a-card class="item" hoverable  @click="goToMatchManage">
          <img src="../../assets/images/icon/register.png">
          <div class="title">比赛管理</div>
        </a-card>
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around" class="intro-row" :gutter="6">
      <a-col class="intro-col" :span="6">
        <a-card class="item" hoverable @click="goToSportItem">
          <img src="../../assets/images/icon/team.png">
          <div class="title">分配裁判</div>
        </a-card>
      </a-col>
      <a-col class="intro-col" :span="6">
        <a-card class="item"  hoverable @click="goToAppealHandle">
          <img src="../../assets/images/icon/register.png" >
          <div class="title">申诉处理</div>
        </a-card>
      </a-col>
      <a-col class="intro-col" :span="6">
        <a-card class="item" hoverable @click="goToGradeManage" >
          <img src="../../assets/images/icon/register.png">
          <div class="title">成绩管理</div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import PageHead from "@/components/PageHead";
export default {
  name: "admin_index",
  components: {PageHead},
  methods:{
    goToCreateGame(){
      this.$router.push({name:'createGame',params:{id:this.id}})
    },
    goToReviewGame(){
      this.$message.error("该功能尚未开放，敬请期待")
    },

    goToMatchManage(){
      this.$router.push('/matchManage')
    },
    goToSportItem(){
      this.$router.push('/sportsItem')
    },
    goToGradeManage(){
      this.$router.push('/gradeManage')
    },
    goToAppealHandle(){
      this.$router.push('/appealHandle')
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
    height: 45vh;
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