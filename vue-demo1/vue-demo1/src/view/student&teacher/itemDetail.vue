<template>
<div class="page">
  <div>
    <top>

    </top>
  </div>
  <div class="infor-route">
    <div class="left-route">
<!--      <left @transfermatch="get"  @tranferdata1="get1" @tranferdata="get2"  :id="ProjectId"></left>-->
      <left @transfermatch="get"></left>
    </div>
    <div class="right-route">
<!--      <protect-content :match="match0" :data1="data1" :data="data"></protect-content>-->
      <protect-content :match="match0"></protect-content>
    </div>
  </div>
</div>
</template>

<script>
import Left from "../../components/Left";
import Top from "../../components/top";
import ProtectContent from "../../components/protect-content";
// import {more} from "@/api/user";

export default {
  name: "itemDetail",
  components: {ProtectContent, Top, Left},
  data(){
    return{
      ProjectId:'',
      match0:'',
      data1:'',
      data:'',
      list:''
    }
  },
  methods:{
  //   created(){
  //     //获取项目编号
  //     this.ProjectId=this.$route.params.id
  //     console.log("看这里")
  //     console.log(this.ProjectId)
  //     //传键值对给后端
  //     let data={game_no:this.$route.params.id}
  //   //  获取详细信息
  //     more(data).then(res =>{
  //       console.log(res)
  //       this.list=res.data
  //     })
  //   },
    get:function (match1){
      this.match0=match1
    },
  //   get1:function (data1){
  //     this.data1=data1
  //   },
  //   get2:function (data){
  //     this.data=data
  //   }

  }
}
</script>



