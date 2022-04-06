<template>
  <div class="page">
    <PageHead />
      <div style="width:256px">
        <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
      <a-menu
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          mode="inline"
          :theme=theme
          :inline-collapsed="collapsed"
      >
        <a-menu-item key="1" >
          <a-icon type="mail" />
         <span>个人信息</span>
        </a-menu-item>
<!--        <a-menu-item key="2" @click="goToMyTeam">-->
<!--          <a-icon type="calendar" />-->
<!--          <span>我的团队</span>-->
<!--        </a-menu-item>-->
      </a-menu>
    </div>
    <div class="form">
      <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item   label="学号">
          <a-input v-model="form.userNo" >{{form.userNo}}</a-input>
        </a-form-model-item>
        <a-form-model-item   label="学院">
          <a-input v-model="form.schoolName" />
        </a-form-model-item>
        <a-form-model-item   label="姓名">
          <a-input v-model="form.userName" />
        </a-form-model-item>
        <a-form-model-item   label="手机号">
          <a-input v-model="form.phone" />
        </a-form-model-item>
        <a-form-model-item   label="密码">
          <a-input v-model="form.password" />
        </a-form-model-item>
        <a-form-model-item   label="性别">
          <a-input v-model="form.sex" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 18, offset: 4 }">
          <a-button type="primary" @click="goToDataModify">
            点击修改
          </a-button>
        </a-form-model-item>

      </a-form-model>
    </div>


  </div>
</template>

<script>
import PageHead from "@/components/PageHead";
import {persondata} from "@/api/user";
export default {
  name: "student_data",
  components: {PageHead},
  created() {
    this.id=this.$route.params.id
  },
  data() {
    return {
      id:'',
      collapsed: false,
      theme:'light',
      labelCol: { span: 9 },
      wrapperCol: { span: 9 },
      form: {
        userNo: '',
        schoolName:'',
        userName:'',
        phone:'',
        password:'',
        sex:''
      }
    };
  },
  mounted() {
    this.fetch()
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    goToMyTeam(){
      this.$router.push({name:'myTeam',params:{id:this.id}})

    },
    goToDataModify(){
      this.$router.push({name:'dataModify',params:{id:this.id}})
    },
    fetch(){
      let data={user_no:this.id}
      persondata(data).then(res=>{
        console.log(res)
        if(res.code===0){
          this.form=res.data
        }else{
          console.log("获取失败")
        }
      }).catch(error=>{
        console.log(error)
      })
    },
  },
}
</script>

<style scoped>
form{
  width:50%;
  position:relative;
  left:300px;
  top:-70px;
}


</style>




