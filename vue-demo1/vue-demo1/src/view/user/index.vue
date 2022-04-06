<template class="page">
  <div class="team-home">
    <PageHead/>
    <a-row type="flex" justify="space-around" class="intro-row" :gutter="8">
      <div class="bigtitle">请选择你的登录方式</div>
    </a-row>
    <a-row type="flex" justify="space-around" class="intro-row" :gutter="8">
      <a-col class="intro-col" :span="6">
        <a-card class="item" hoverable @click="goToStudentLogin">
          <img src="../../assets/images/icon/login.png">
          <div class="title">学生</div>
        </a-card>
      </a-col>
      <a-col class="intro-col" :span="6">
        <a-card class="item" hoverable @click="goToTeacherLogin">
          <img src="../../assets/images/icon/team.png">
          <div class="title">教师</div>
        </a-card>
      </a-col>
      <a-col class="intro-col" :span="6">
        <a-card class="item"  hoverable @click="goToAdminLogin">
          <img src="../../assets/images/icon/register.png">
          <div class="title">管理员</div>
        </a-card>
      </a-col>
      <a-col class="intro-col" :span="6">
        <a-card class="item" hoverable @click="goToPublicLogin" >
          <img src="../../assets/images/icon/register.png">
          <div class="title">公共账号</div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import PageHead from "../../components/PageHead";
export default {
  name: "index",
  components: {PageHead },
  methods: {
    goToStudentLogin(){
      this.$router.push('/student_login')
    },
    goToTeacherLogin(){
      this.$router.push('/teacher_login')
    },
    goToAdminLogin(){
      this.$router.push('/admin_login')
    },
    goToPublicLogin(){
      this.$router.push('/public_login')
    }
    // goToLogin () {
    //   this.$router.push('/login')
    // },
    // goToRegister () {
    //   this.$router.push('/register')
    // },
    // goToMember () {
    //   this.$router.push('/members')
    // },
    // goTOStudentIndex(){
    //   this.$router.push('/student_index')
    // }
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
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .bigtitle{
      font-family: 幼圆;
      font-size:30px;
      fond-weight:bold;
      color:#0066FF
    }

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
