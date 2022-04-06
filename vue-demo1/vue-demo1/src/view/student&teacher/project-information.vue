<template>
<div class="page">
  <div>
    <top>

    </top>
  </div>
  <div class="infor-route">
    <div class="left-route">
      <left @transfermatch="get"  @tranferdata1="get1" @tranferdata="get2"  :id="ProjectId"></left>
    </div>
    <div class="right-route">
      <protect-content :match="match0" :data1="data1" :data="data"></protect-content>
    </div>
  </div>
</div>
</template>

<script>
import Left from "../../components/Left";
import Top from "../../components/top";
import ProtectContent from "../../components/protect-content";
export default {
  name: "project-information",
  components: {ProtectContent, Top, Left},
  data(){
    return{
      ProjectId:'',
      match0:'',
      data1:'',
      data:'',
      dataFrom:'',
    }
  },
  methods:{
    get:function (match1){
      this.match0=match1
    },
    get1:function (data1){
      this.data1=data1
    },
    get2:function (data){
      this.data=data
    }

  }
}
</script>



