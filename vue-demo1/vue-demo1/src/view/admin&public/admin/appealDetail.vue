<template>
  <div class="page">
    <PageHead/>
    <template>
      <a-descriptions class="appeal" title="申诉信息" bordered>
        <a-descriptions-item label="申诉时间" span="2">
          {{data.createdTime}}
        </a-descriptions-item>
        <a-descriptions-item label="申诉类别">
          {{data.category}}
        </a-descriptions-item>
        <a-descriptions-item label="申诉人" span="2">
          {{data.name}}
        </a-descriptions-item>
<!--        <a-descriptions-item label="申诉状态">-->
<!--          {{list.state}}-->
<!--        </a-descriptions-item>-->
        <a-descriptions-item label="申诉原因" span="4">
          {{data.discription}}
        </a-descriptions-item>
        <a-descriptions-item label="结果">
          <a-input ref="result"/>
        </a-descriptions-item>
      </a-descriptions>
      <a-button @click="onsubmit()">提交</a-button>
    </template>
  </div>
</template>

<script>
import PageHead from "@/components/PageHead";
import {appealDetail, submitto} from "@/api/user";
export default {
  name: "appealDetail",
  components: { PageHead},
  data(){
    return{
      id:'',
      data:'',
      result:''
    }
  },
  created(){
    // 获取申诉编号
    this.id=this.$route.params.id
    let data={id:this.id}
    console.log(this.id)
    //  得到申诉详细信息
    appealDetail(data).then(res=>{
      this.data=res.data
    })
  },
  methods:{

    onsubmit(){
      submitto(this.$refs.result).then(res=>{
        console.log(res)
        if(res.code === 0) {
          this.$message.success("提交成功")
          this.$router.push({ path: '/admin_index' })
        } else {
          this.$message.error("提交失败")
        }
      })
    }
  }
}
</script>

<style scoped>
.appeal{
  /*width: 500px;*/
  padding: 30px;
  position: relative;
  top:50px;
  left:30px;
}
</style>