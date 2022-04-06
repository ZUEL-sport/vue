<template>
  <div class="form-card1">
    <div class="lift">
      <a-radio-group v-model="value" @change="onChange">
        <p>申诉类别</p>
        <a-radio :style="radioStyle" :value=0>
          成绩错误
        </a-radio>
        <a-radio :style="radioStyle" :value=1>
          举报他人
        </a-radio>
        <a-radio :style="radioStyle" :value=2>
          其他错误
        </a-radio>
      </a-radio-group>
    </div>
    <div class="right">
      <p>申诉描述</p>
      <a-textarea v-model="AppealData" placeholder="请输入申诉的描述" :rows="6" />
      <a-row class="thisbtn">
        <a-button
            size="large"
            type="primary"
            @click="handle"
            block
        >
          <span>提交</span>
        </a-button>
      </a-row>
    </div>

  </div>

</template>

<script>
import {AppealSignUp} from "@/api/user";

export default {
  name: "appeal-choose",
  data() {
    return {
      value: 1,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
      AppealData:'',
      form:{
        AppData:'',
        no:'',
        id:''
      }
    }
  },
  created() {
    this.form.id=this.$route.params.id
  },
  methods: {
    onChange(e) {
      console.log('radio checked', e.target.value);
    },
    handle(){
      this.form.AppData=this.AppealData
      this.form.kind=this.value
      console.log(this.form)
      AppealSignUp(this.form).then(res=>{
        this.$message.success("申述提交成功!")
        console.log(res.code)
      })
    }
  }
}
</script>
.
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
.thisbtn{
  float: right;
  width: 20%;
}
.form-card1{
  z-index: 999;
  background-color: #FFFFFF;
  /*opacity: 0.5;*/
  width: 900px;
  height: 400px;
}
</style>