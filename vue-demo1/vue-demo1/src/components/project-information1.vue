<template>
  <div>
    <div class="thisdiv">
      <div class="thisleft">参赛对象</div>
      <div class="thisright">学生</div>
    </div>
    <div class="thisdiv">
      <div class="thisleft">项目名称</div>
      <div class="thisright">50米</div>
    </div>
    <div class="thisdiv">
      <div class="thisleft">比赛场次</div>
      <div class="thisright">3</div>
    </div>
    <div class="thisdiv">
      <div class="thisleft">项目描述</div>
      <div class="thisright">50米田径赛跑</div>
    </div>
    <div class="thisdiv" v-for="(value,index) in match" :key="index">
      <div class="thisleft">{{value}}</div>
      <div class="this">比赛地点</div>
      <div class="this">大运场</div>
      <div class="this">比赛时间</div>
      <div class="this">2022.05.03</div>
    </div>
    <a-row class="thisbtn">
      <a-button
          size="large"
          type="primary"
          @click="handle"
          block
      >
        <span>报名</span>
      </a-button>
    </a-row>


  </div>

</template>

<script>
import {SignUp} from "@/api/user";
import {more} from "@/api/user";

export default {
  name: "project-information1",
  data(){
    return{
      projectId:'',
      data:'',
    }
  },
  created() {
    this.projectId=this.$route.params.id
    let data={game_no:this.projectId}
    console.log("这里都可以")
    more(data).then(res=>{
      console.log("121212918293892839128912819")
      console.log(res)
      console.log(res.data)
      this.data=res.data
    })
  },
  methods:{
    handle: function (){
      SignUp().then(res=>{
        if(res.code===1){
          console.log("报名成功")
        }
      })
    }
  },
  props:['match']



}
</script>

<style scoped>
.thisdiv{
  border:1px solid #000;
  height:30px;
  width: 100%;

}
.thisleft{
  border:1px solid #000;
  height: 100%;
  float: left;
  width: 50%;
  text-align: center;
  background-color: white;
}
.thisright{
  border:1px solid #000;
  height: 100%;
  float: left;
  width: 50%;
  text-align: center;
  background-color: white;
}
.this{
  border:1px solid #000;
  height: 100%;
  float: left;
  width: 12.5%;
  text-align: center;
  background-color: white;
}
.thisbtn{
  float: right;
  width: 10%;
}
</style>
