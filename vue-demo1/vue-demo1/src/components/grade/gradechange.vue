<template>
  <div class="form-card1">
    <div class="lift">
    </div>
    <div class="right">
      <a-input
          v-model="number"
          width:60%
          size="large"
          clearable
          placeholder="请输入修改的学号/工号"
      >
      </a-input>
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
export default {
  name: "gradechange",
  data(){
    return{
      number:'',
    }
  },
  methods:{
    handle(){
      this.$route.push('/gradeChange1')
    }
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
.thisbtn{
  float: right;
  width: 20%;
}
.form-card1{
  z-index: 999;
  background-color: #FFFFFF;
  /*opacity: 0.7;*/
  width: 900px;
  height: 400px;
}
</style>