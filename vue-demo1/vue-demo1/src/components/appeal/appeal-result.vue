<template>
<div class="form-card1">
  <div class="lift">
    <p>申诉描述</p>
    <a-textarea v-model="AppealData" placeholder="申诉描述" :rows="6" />
  </div>
  <div class="right">
    <p>处理结果</p>
    <a-textarea v-model="AppealResult" placeholder="申诉描述" :rows="6" />
  </div>
</div>
</template>

<script>
import {AppealResult} from "@/api/user";

export default {
  name: "appeal-result",
  data(){
    return{
      AppealData:'',
      AppealResult:'',
      id:''
    }
  },
  created() {
    this.id=this.$route.params.id
    let data={id:this.id}
    AppealResult(data).then(res=>{
      if(res.code===0){
        console.log(res.data)
        this.AppealData=res.data.AppealData
        this.AppealResult=res.data.AppealResult
      }
    })
  }
}
</script>

<style scoped>
.lift{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: mistyrose;
}
.right{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: mistyrose;
}
.form-card1{
  z-index: 999;
  background-color: #FFFFFF;

  width: 900px;
  height: 400px;
}
</style>

