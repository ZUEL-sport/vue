<template>
  <div class="header">
    <div><img src="@/assets/images/login/back/smallLogo.png"></div>
    <div class="name">
      <a-row><img src="@/assets/images/login/back/ChinaName.png"></a-row>
      <a-row>
        <span>ZHONGNAN UNIVERSITY OF ECONOMICS AND LAW</span>
      </a-row>
    </div>
    <div>
      <button @click="prev">返回</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  methods:{
    prev(){
      this.$router.go(-1)
    }
  }

}
</script>

<style lang="less" scoped>
.header img{
  height: 60px;
}
.header{
  display: flex;
  flex-flow: row nowrap;
  vertical-align: top;
  padding: 5px;
  height: 10vh;
  //left: 0px;
  //top: 250px;
  //width: 100%;
  ////height: 146px;
  //line-height: 20px;
  //background-color: rgba(137, 184, 232, 100);
  //text-align: center;
  //border: 1px solid rgba(187,187, 187, 100);
  .name{
    padding: 10px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 0.8em;
  }
  .name img{
    height: 30px;
  }
  button{
    position:absolute;
    top:50px;
    right:10px
  }
  //.top{
  //  left: 0px;
  //  top: 250px;
  //  width: 1440px;
  //  height: 146px;
  //  line-height: 20px;
  //  background-color: rgba(137, 184, 232, 100);
  //  text-align: center;
  //  border: 1px solid rgba(187, 187, 187, 100);
  //}
  //.thisright{
  //
  //}
}
</style>
